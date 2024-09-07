import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles";


const DropDown = ({ title, icon, onPress, checked = false }) => {

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Text>{title}</Text>
                <View style={styles.iconContainer}>
                    <FontAwesomeIcon icon={icon} size={20}/>
                    {checked ? <FontAwesomeIcon icon={faCheckCircle} color="green" size={20} style={{marginLeft: 10}}/>
                             : null}
                    
                </View>
            </View>
        </TouchableOpacity>
    );
};


export default DropDown;