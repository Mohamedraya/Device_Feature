import { StyleSheet } from "react-native";



const styles = StyleSheet.create({

    theMain: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },

    container: {
        flex: 1,
        marginHorizontal: 24,
        justifyContent: "center"
    },

    welcomeTxt: {
        color: "#000",
        fontSize: 26,
        fontWeight: "600",
        marginBottom: 15
    },

    inputContainer: {
        marginBottom: 20
    },

    btnContainer: {
        marginTop: 50
    },

    forgot: {
        textAlign: "center"
    },

    socialContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 50
    },

    socialImg: {
        width: 50,
        height: 50,
        borderRadius: 25
    }
});


export default styles;