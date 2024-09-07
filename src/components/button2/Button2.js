import React from "react";
import { Text,TouchableOpacity } from "react-native";
import styles from "./styles";



const Button2 = ({title,onPress}) => {

    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}


export default Button2;