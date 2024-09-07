import { StyleSheet } from "react-native";



const styles = StyleSheet.create({

    theMain: {
        flex: 1,
        backgroundColor: "#FFFFFF",       
    },

    scrollContainer: {
        flex: 1,
        marginHorizontal: 15
    },

    bottomSheetContainer: {
        padding: 15
    },

    txtBottomSheet: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000"
    },

    itemContainer: {
        margin: 10,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#D5D8DC"
    },

    profileContainer: {
        flex: 1
    },

    coverView: {
        flex: 0.3,
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center",
        
    },

    profileView: {
        position: "absolute",
        width: 100,
        height: 100,
        backgroundColor: "yellow",
        borderRadius: 50,
        bottom: -50
    },

    profileImg: {
        width: 100,
        height: 100,
        borderRadius: 50
    },

    infoView: {
        flex: 0.7
    },

    nameTxt: {
        marginTop: 60,
        textAlign: "center",
        color: "#000",
        fontWeight: "bold",
        fontSize: 24
    },

    dataContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#F2F4F4",
        marginTop: 10,
        elevation: 8,
        padding: 10
    },

    ordersTxt: {
        fontSize: 20,
        color: "#000",
        fontWeight: "bold"
    },

    numTxt: {
        textAlign :"center"
    }
});



export default styles;