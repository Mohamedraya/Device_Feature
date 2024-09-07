import { StyleSheet } from "react-native";



const styles = StyleSheet.create({

    theMain: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },

    img: {
        width: "100%",
        height: 300,
        resizeMode: "contain"
    },

    helloTxt: {
        color: "#000",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 15
    },

    welTxt: {
        textAlign: "center"
    },

    btnContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20
    },

    socialTxt: {
        textAlign: "center",
        marginTop: 80
    },

    socialContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 90
    },

    socialImg: {
        width: 50,
        height: 50,
        borderRadius: 50
    }

});


export default styles;