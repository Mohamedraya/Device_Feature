import React from "react";
import { Text,TouchableOpacity } from "react-native";
import styles from "./styles";



const Button = ({title,onPress,backgroundColor}) => {

    return (
        <TouchableOpacity style={styles.button(backgroundColor ? "#2979F2" : '#FAFAFA')} onPress={onPress}>
            <Text style={styles.title(backgroundColor ? "#FFFFFF" : "#000")}>{title}</Text>
        </TouchableOpacity>
    );
};


export default Button;