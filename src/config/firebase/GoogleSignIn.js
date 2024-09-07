import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";


export const _signInWithGoogle = async () => {

    try {
        GoogleSignin.configure({
            offlineAccess: false,
            webClientId: "778313499684-as6c4of8otldkvkq3o1lar7vqbhca36n.apps.googleusercontent.com",
            scopes: ["profile" , "email"]
        });

        await GoogleSignin.hasPlayServices();
        const userInfo = GoogleSignin.signIn();

        const {idToken} = GoogleSignin.signIn();
        const googleCredentials = auth.GoogleAuthProvider.credential(idToken);
        
        auth().signInWithCredential(googleCredentials);

        return userInfo;
    } 
    catch (error) {
        console.log("error =>" , error);
    }
} 