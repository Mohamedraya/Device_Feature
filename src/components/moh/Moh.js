import React, { useEffect, useState } from "react";
import {View,Text,ImageBackground} from "react-native";
//import { getFromAsyncStorage } from "../../config/asyncStorage";
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import styles from "./styles";



const toastConfig = {
    
    success: (props) => (
      <BaseToast {...props} style={styles.toastSuccess} contentContainerStyle={styles.toastContent} text1Style={styles.text1}
                  text2Style={styles.text2}/>
    ),
    
    error: (props) => (
      <ErrorToast {...props} text2NumberOfLines={3} style={styles.toastError} text1Style={styles.text1}
                  text2Style={styles.text2}/>
    ),
    
  };



const Moh = () => {

    

    useEffect(() => {

        //checkUser();
        setTimeout(() => {
            Toast.show({
                type: "success",
                text1: "welcome",
                text2: "Hii Buddy",
                visibilityTime: 10000
            })
        } , 2000);
    } , []);

 /*  async function checkUser () {

        const value = await getFromAsyncStorage("user");

        if (!value) {
           // Navigation.replace("LoginScreen");
        }
        else {
           // Navigation.navigate("HomeScreen");
        }
    }*/

    return (
        <ImageBackground source={require('../../assets/images/bk.png')} style={styles.img}>
            <Text style={styles.txt}>E-commerce App</Text>
            <Toast config={toastConfig}/>
        </ImageBackground>
    );
};


export default Moh;