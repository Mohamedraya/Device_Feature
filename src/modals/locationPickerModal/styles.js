import { StyleSheet } from "react-native";
import { COLOR } from "../../assets/colors";



const styles = StyleSheet.create({

    modalContainer: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },

    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },

      mapHeaderContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        marginVertical: 15,
        marginHorizontal: 10,
        padding: 15
      },

      headerTxt: {
        color: "#000",
        fontSize: 20,
        fontWeight: "bold"
      },

      confirmContainer: {
        position: "absolute",
        backgroundColor: COLOR.blue,
        bottom: 5,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        alignSelf: "center",
        padding: 10
      },

      confirmTxt: {
        color: "#FFFFFF",
        fontSize: 22,
        fontWeight: "bold"
      }
});


export default styles;