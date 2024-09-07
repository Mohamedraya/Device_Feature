import { StyleSheet } from "react-native";



const styles = StyleSheet.create({

    img: {
        flex: 1
    },

    txt: {
        fontSize: 25,
        color: "white",
        fontWeight: "bold"
    },

    toastSuccess: {
            width: "90%",
            height: 70,
            borderLeftColor: "green",
            borderLeftWidth: 7,
            borderRightColor: "green",
            borderRightWidth: 7
    },

    toastContent: {
        paddingHorizontal: 15
    },

    text1: {
        fontSize: 17,
        fontWeight: "700"
    },

    text2: {
        fontSize: 14
    },
    
    toastError: {
            width: "90%",
            height: 70,
            borderLeftColor: "red",
            borderLeftWidth: 7,
            borderRightColor: "red",
            borderRightWidth: 7
    }
});



export default styles;