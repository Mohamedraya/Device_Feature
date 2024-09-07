import React from "react";
import { View, Text,Image, Dimensions } from "react-native";
import styles from "./styles";
 



const OnBoardingItem = ({item}) => {

    const {width,height} = Dimensions.get("screen");

    return (
         <View style={{width, height, backgroundColor: item.color, justifyContent: "center"}}>
            <Image source={item.image} style={styles.img}/>
            <Text>{item.heading}</Text>
            <Text>{item.subHeading}</Text>
         </View>
    );
};


export default OnBoardingItem;