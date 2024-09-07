import AsyncStorage from "@react-native-async-storage/async-storage";



export const storeIntoAsyncStorage = async (key,value) => {

    try {
        await AsyncStorage.setItem(key,value);
    } 
    catch (error) {
        console.log("Error" , "storing data");    
    }
};


export const getFromAsyncStorage = async (key) => {

    try {
        const value = AsyncStorage.getItem(key);
        
        if(value) {
            return value;
        }
        else {
            return null;
        }
    } catch (error) {
        console.log("Error" , "storing data"); 
        return null;
    }
}