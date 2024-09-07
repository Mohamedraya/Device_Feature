import React from "react";
import { View, Text, Modal } from "react-native";
import { Chase } from "react-native-animated-spinkit";
import styles from "./styles";



const AppLoaderSpinner = ({visible}) => {

    return (
        <Modal visible={visible} transparent={true}>
           <View style={styles.mainContainer}>
                <Chase size={48} color="white"/>
                <Text style={styles.txt}>Loading...</Text>
           </View>
        </Modal>
    );
}

export default AppLoaderSpinner;