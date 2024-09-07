import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, PermissionsAndroid,FlatList } from "react-native";
import { GET_NEARBY_SHOPS, axiosClient } from "../../config/api";
import { getFromAsyncStorage } from "../../config/asyncStorage";
import GetLocation from "react-native-get-location";
import Geocoder from "react-native-geocoding";
import styles from "./styles";
import Button2 from "../button2/Button2";
import AppLoaderSpinner from "../../config/appLoader";
import { toastMessage } from "../../config/appToast";
import Shop from "../shop/Shop";



const MyLocation = () => {

    const [PGranted, setPGranted] = useState();
    const [userData, setUserData] = useState();
    const [loading, setLoading] = useState(false);
    const [shopList, setShopList] = useState([]);

    Geocoder.init("AIzaSyAVDGgX_0YzJ8HJafdLQWqQc-pLJozUgqc");

    useEffect(() => {
        checkLocationPermission();
        getUserData();
    }, []);

    async function checkLocationPermission() {

        let granted = await getLocationPermission();
        setPGranted(granted);

        if (granted) {
            getCurrentLocation();
        }
    }


    async function getLocationPermission() {

        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        ).catch(err => { console.log(err); });

        return granted === PermissionsAndroid.RESULTS.GRANTED;
    }

    async function getCurrentLocation() {

        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
            .then(location => {
                Geocoder.from(location.latitude, location.longitude).then(data => {
                    let fetchAddress = data.results[0].formatted_address;
                    console.log(fetchAddress, "=> Address");
                    getNearByShop(fetchAddress);
                })
            })
            .catch(error => {
                const { code, message } = error;
                console.warn(code, message);
            })
    }

    async function getNearByShop(address) {

        setLoading(true);

        const queryString = require("querystring");
        const params = queryString.stringify({
            email: "mohammes@gmail.com",//userData.user.email
            //apiToken: userData.user.token,
            address: address
        });

        const { data, status } = await axiosClient.post(GET_NEARBY_SHOPS, params);
        setLoading(false);
        if (status == 200) {
            if (data.status === "200") {
                setShopList(data.data);
                toastMessage("success" , data.message);                
            }
            else {
                toastMessage("error" , data.message);
            }
        }
        else {
            toastMessage("error" , "error in location");
        }
    }

    async function getUserData() {

        const userData = await getFromAsyncStorage("user");
        if (userData) {

            let userJson = JSON.parse(userData);
            setUserData(userJson);
        }
    };

    return (
        <SafeAreaView style={styles.theMain}>

            <AppLoaderSpinner visible={loading}/>

            {PGranted ?
               (
                <View style={styles.listView}>
                   {
                    shopList.length > 0 ? 
                    <FlatList data={shopList} keyExtractor={(item) => item.id.toString()}
                              renderItem={({item}) => <Shop item={item}/>}/>
                            : null
                   }
                </View>
               )
             :
                (
                    <View style={styles.container}>
                        <View style={styles.pleaseView}>
                            <Text style={styles.txt}>Please Allow Location Permission to continue...</Text>
                            <Button2 title={"Allow"} onPress={() => { checkLocationPermission() }} />
                        </View>
                    </View>
                )}

        </SafeAreaView>
    );
};


export default MyLocation;