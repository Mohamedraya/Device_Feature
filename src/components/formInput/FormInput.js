import React from "react";
import { View, TextInput } from "react-native";
import styles from "./styles";



const FormInput = ({ placeholder, onChangeText, keyboardType }) => {

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder={placeholder} onChangeText={(text) => {onChangeText(text)}}
                       keyboardType={keyboardType ? keyboardType : "default"}/>
        </View>
    );

};


export default FormInput;