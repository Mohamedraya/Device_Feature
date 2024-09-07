import React, { useRef } from "react";
import { Text, View,FlatList } from "react-native";
import { OnBoardingData } from "../../config/LocalAppData";
import OnBoardingItem from "../onBoardingItem/OnBoardingItem";
import styles from "./styles";
import Animated from "react-native-reanimated";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";


const OnBoarding = () => {

    /*const scrollX = useRef(new Animated.Value(0)).current;

    const Indicator = ({scrollX}) => {

        return (
            <View style={styles.indicatoirContainer}>
                {
                    OnBoardingData.map((_, i) => {
                        const inputRange = [(i-1)*width, i*width, (i+1)*width];
                        const scale = scrollX.interpolate({
                            inputRange, outputRange: [0.8,1.4,0.8], extrapolate: "clamp"
                        })
                        return (
                            <Animated.View key={`indicator_${i}`} style={{
                                height: 10,
                                width: 10,
                                borderRadius: 5,
                                backgroundColor: "#333",
                                margin: 10
                            }}/>
                        )
                    })
                }
            </View>
        );
    }*/

    return (
        <View style={styles.mainContainer}>

           <FlatList data={OnBoardingData} keyExtractor={item => item.id} 
               renderItem={({item}) => <OnBoardingItem item={item}/>}/>
           
          
        </View>
    );
};


export default OnBoarding;