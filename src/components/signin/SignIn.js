import React, { useState } from "react";
import { View, Text, SafeAreaView, Image, StatusBar, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { _signInWithGoogle } from "../../config/firebase/GoogleSignIn";
import Button from "../button/Button";
import styles from "./styles";
import { axiosClient, SIGN_IN } from "../../config/api";
import { storeIntoAsyncStorage } from "../../config/asyncStorage";



const SignIn = () => {

    const navigation = useNavigation();

    const [loading, setLoading] = useState(false);

    async function googleSignIn() {

        _signInWithGoogle().then(data => {
            if (!data) {
                console.log("no data");
                return;
            }

            console.log("success", data);
            _signInApi(data);

        })
    }

    async function _signInApi(googleData) {

        setLoading(true);

        const apiParams = {
            loginSource: "google",
            sId: "",//googleData.user.id,
            name: "user_111222",//googleData.user.name
            email: "mohammes@gmail.com",//googleData.user.email
            profileImage: "https://d326fntlu7tb1e.cloudfront.net/uploads/b1f6d96d-3297-4270-ba65-657dc2bc0236-fn2.jpg",////googleData.user.photo
            fcmToken: "fcm_110220"
        }
        const { data, status } = await axiosClient.post(SIGN_IN, apiParams);
        setLoading(false);
        if (status == 200) {
            if (data.status === "200") {
                //toastMessage("success" , data.message);
                storeIntoAsyncStorage("user", JSON.stringify(data));
                //navigation.navigate("HomeScreen");
            }
            else {
                //toastMessage("error" , data.message);
            }
        }
        else {
            //toastMessage("error" , "error in sign in");
        }


    }

    return (
        <SafeAreaView style={styles.theMain}>

            <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />

            <Image source={require("../../assets/images/bk.png")} style={styles.img} />

            <Text style={styles.helloTxt}>Hello</Text>

            <Text style={styles.welTxt}>Welcome to our e-commerce</Text>

            <View style={styles.btnContainer}>
                <Button title={"Login"} onPress={() => { navigation.navigate("LoginScreen") }} backgroundColor />

                <Button title={"Sign Up"} onPress={() => {navigation.navigate("MyShopScreen")}} />
            </View>

            <Text style={styles.socialTxt}>Or Via Social Media Account</Text>

            <View style={styles.socialContainer}>
                <Pressable>
                    <Image source={require("../../assets/images/facebook.png")} style={styles.socialImg} />
                </Pressable>
                <Pressable onPress={() => googleSignIn()}>
                    <Image source={require("../../assets/images/google.png")} style={styles.socialImg} />
                </Pressable>
                <Pressable onPress={() => {navigation.navigate("MyLocationScreen")}}>
                    <Image source={require("../../assets/images/in.png")} style={styles.socialImg} />
                </Pressable>
            </View>
        </SafeAreaView>
    );
};


export default SignIn;