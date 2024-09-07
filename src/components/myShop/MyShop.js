import React, { useState, useRef, useEffect } from "react";
import { View, Text, SafeAreaView, ImageBackground, ScrollView, Dimensions, TouchableOpacity, Image } from "react-native";
import { faChevronDown, faSearch, faImage, faLocation, faClock } from "@fortawesome/free-solid-svg-icons";
import { launchImageLibrary } from "react-native-image-picker";
import RBSheet from "react-native-raw-bottom-sheet";
import LocationPickerModal from "../../modals/locationPickerModal/LocationPickerModal";
import FormInput from "../formInput/FormInput";
import { CategoryLiSt } from "../../config/LocalAppData";
import DropDown from "../dropDown/DropDown";
import styles from "./styles";
import DatePicker from "react-native-date-picker";
import { formatTime } from "../../config/datePicker";
import { toastMessage } from "../../config/appToast";
import Button2 from "../button2/Button2";
import { getFromAsyncStorage, storeIntoAsyncStorage } from "../../config/asyncStorage";
import { axiosClient, CREATE_SHOP } from "../../config/api";
import Toast from "react-native-toast-message";




const MyShop = () => {

    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [shopImage, setShopImage] = useState();
    const [shopOwnerImage, setShopOwnerImage] = useState();
    const [shopCategory, setShopCategory] = useState("");
    const [showMap, setShowMap] = useState(false);
    const [shopLocation, setShopLocation] = useState();
    const [openDatePicker, setOpenDatePicker] = useState();
    const [date, setDate] = useState(new Date());
    const [currentTimeOption, setCurrentTimeOption] = useState();
    const [shopOpenTime, setShopOpenTime] = useState();
    const [shopCloseTime, setShopCloseTime] = useState();


    const refRBSheet = useRef();

    useEffect(() => {
        getUserData();
    }, []);

    async function getUserData() {

        const userData = await getFromAsyncStorage("user");
        if (userData) {

            let userJson = JSON.parse(userData);
            setUserData(userJson);
        }
    };

    async function createMyShop() {

        if (!name) {
            toastMessage("error", "Please provide shop name");
            return;
        }

        if (!phone) {
            toastMessage("error", "Please provide a Phone");
            return;
        }

        if (!shopImage) {
            toastMessage("error", "Please provide shop image");
            return;
        }

        if (!shopOwnerImage) {
            toastMessage("error", "Please provide a shopOwnerImage");
            return;
        }

        /* if (!shopLocation) {
             toastMessage("error", "Please provide a shopLocation");
             return;
         }*/

        if (!shopOpenTime) {
            toastMessage("error", "Please provide shopOpenTime");
            return;
        }

        if (!shopCloseTime) {
            toastMessage("error", "Please provide shopCloseTime");
            return;
        }

        const formData = new FormData();
        //formData.append("email", userData.user.email);
        //formData.append("apiToken", userData.user.token);
        formData.append("name", name);
        formData.append("phone", phone);
        //formData.append("latitude", shopLocation.marker.latitude);
        //formData.append("longitude", shopLocation.marker.longitude);
        //formData.append("address", shopLocation.address);
        formData.append("category", shopCategory);
        formData.append("timeOpen", shopOpenTime);
        formData.append("timeClose", shopCloseTime);
        formData.append("shopImage", {
            uri: shopImage.assets[0].uri,
            type: shopImage.assets[0].type,
            name: shopImage.assets[0].fileName,
        });
        formData.append("shopOwnerImage", {
            uri: shopOwnerImage.assets[0].uri,
            //type: shopOwnerImage.asstes[0].type,
            name: shopImage.assets[0].fileName,
        });

        setLoading(true);
        const { data, status } = await axiosClient.post(CREATE_SHOP, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        console.log(data);
        if (status == 200) {
            if (data.status === "200") {
                toastMessage("success", data.message);
                let updatedUserData = userData;
                updatedUserData.shopData = data.data;
                storeIntoAsyncStorage("useruddated", JSON.stringify(updatedUserData));
            }
            else {
                toastMessage("error", data.message);
            }
        }
        else {
            toastMessage("error", "Error in sign in");
        }
    }

    //assets[0] assets will be array to take the first object from the array

    async function pickImageFromGallery() {

        const result = await launchImageLibrary();

        if (result.didCancel) {
            return;
        }

        setShopImage(result);
    }

    async function pickOwnerImageFromGallery() {

        const result = await launchImageLibrary();

        if (result.didCancel) {
            return;
        }

        setShopOwnerImage(result);
    }

    const SelectCategoryBS = () => {
        return (
            <RBSheet ref={refRBSheet} closeOnDragDown={true} closeOnPressMask={true} height={Dimensions.get("window").height / 2}>

                <View style={styles.bottomSheetContainer}>
                    <Text style={styles.txtBottomSheet}>Select Shop Category</Text>
                </View>


                {CategoryLiSt.map((item) => {
                    return (
                        <TouchableOpacity key={item.id} onPress={() => { setShopCategory(item.name); refRBSheet.current.close() }}>
                            <View style={styles.itemContainer}>
                                <Text>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    );
                })}


            </RBSheet>
        );
    }

    return (
        <SafeAreaView style={styles.theMain}>

            <Toast />

            <SelectCategoryBS />

            <LocationPickerModal visible={showMap} onClose={() => setShowMap(false)}
                onLocationSelected={data => { setShopLocation(data), setShowMap(false); }} />

            <DatePicker modal mode="time" open={openDatePicker} date={date}
                onConfirm={(date) => {
                    setOpenDatePicker(false); setDate(date); if (currentTimeOption === "open") {
                        setShopOpenTime(formatTime(date.getHours() + ":" + date.getMinutes()));
                    }
                    else if (currentTimeOption === "close") {
                        setShopCloseTime(formatTime(date.getHours() + ":" + date.getMinutes()));
                    }

                }}
                onCancel={() => {
                    setOpenDatePicker(false)
                }} />

            {userData !== undefined && userData.shopData == null ? (
                <>
                    <ScrollView contentContainerStyle={styles.scrollContainer}>
                        <FormInput placeholder={"Email"} onChangeText={(text) => { setEmail(text) }} keyboardType={"email-address"} />

                        <FormInput placeholder={"Name"} onChangeText={(text) => { setName(text) }} keyboardType={"default"} />

                        <FormInput placeholder={"Phone"} onChangeText={(text) => { setPhone(text) }} keyboardType={"number-pad"} />


                        <DropDown title={"Upload Shop Image"} icon={faImage} onPress={() => { pickImageFromGallery() }}
                            checked={shopImage ? true : false} />

                        <DropDown title={"Upload Shop Owner Image"} icon={faImage} onPress={() => { pickOwnerImageFromGallery() }}
                            checked={shopOwnerImage ? true : false} />

                        <DropDown title={shopCategory ? shopCategory : "Select Category"} icon={faChevronDown} onPress={() => { refRBSheet.current.open() }} />

                        <DropDown title={"Select Shop Location"} icon={faLocation} onPress={() => { setShowMap(true) }}
                            checked={shopLocation ? true : false} />

                        <DropDown title={shopOpenTime === undefined ? "Open Time" : "Open Time - " + shopOpenTime} icon={faClock} onPress={() => { setOpenDatePicker(true), setCurrentTimeOption("open") }}
                            checked={shopOpenTime ? true : false} />

                        <DropDown title={shopCloseTime === undefined ? "Close Time" : "Close Time - " + shopCloseTime} icon={faClock} onPress={() => { setOpenDatePicker(true), setCurrentTimeOption("close") }}
                            checked={shopCloseTime ? true : false} />

                    </ScrollView>

                    <Button2 title={"submit"} onPress={() => { createMyShop() }} />
                </>
            )
                : (
                    <>
                        <View style={styles.profileContainer}>

                            <ImageBackground style={styles.coverView} source={require("../../assets/images/bk.png")} resizeMode="cover">
                                <View style={styles.profileView}>
                                    <Image source={require("../../assets/images/bk.png")} style={styles.profileImg} />
                                </View>
                            </ImageBackground>

                            <View style={styles.infoView}>

                                <Text style={styles.nameTxt}>Mohamed</Text>

                                <View style={styles.dataContainer}>
                                    <View >
                                        <Text style={styles.ordersTxt}>Total Orders</Text>
                                        <Text style={styles.numTxt}>100</Text>
                                    </View>

                                    <View >
                                        <Text style={styles.ordersTxt}>Total Orders</Text>
                                        <Text style={styles.numTxt}>4.5</Text>
                                    </View>


                                </View>

                            </View>
                        </View>
                    </>
                )

            }
        </SafeAreaView>
    );
};




export default MyShop;

//{uri: userData.shopData.shopImage}
//{uri: userData.shopData.shopKeeperImage}
//{userData.shopData.name}