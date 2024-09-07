import { StyleSheet } from "react-native";



const styles = StyleSheet.create({

    button: (backgroundColor) => ({
        width: "40%",
        height: 55,
        borderRadius: 50, 
        borderWidth: 1,
        borderColor: "black",   
        backgroundColor: backgroundColor,
        justifyContent: "center",
        alignItems: "center"
    }),

    title: (color) => ({
        color: color,
        fontSize: 19,
        fontWeight: "600"
    })
});


export default styles;