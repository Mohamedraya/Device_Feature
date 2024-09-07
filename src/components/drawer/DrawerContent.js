import React, {useState,useEffect} from "react";
import { getFromAsyncStorage } from "../../config/asyncStorage";
import { Text } from "react-native";
import Toast from "react-native-toast-message";



const DrawerContent = () => {

    const [user, setUser] = useState("");


    useEffect(() => {
        getUserData();
    } , []);

    async function getUserData () {

        const userData = await getFromAsyncStorage("user");

        if(userData) {
            let userJson = JSON.parse(userData);
            setUser(userJson);
        }
    }

    return (
        <Text>{user.user.name}</Text>
       
    ); 
    
}