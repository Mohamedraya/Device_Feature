import { createStackNavigator } from "@react-navigation/stack";
import OnBoardingScreen from "../screens/OnBoardingScreen";
import SignInScreen from "../screens/SignInScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUPScreen from "../screens/SignUpScreen";
import MyShopScreen from "../screens/MyShopScreen";
import MyLocationScreen from "../screens/MyLocationScreen";



const Stack = createStackNavigator();


const MainNavigation = () => {

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            
            <Stack.Screen name="SignInScreen" component={SignInScreen}/>
            <Stack.Screen name="LoginScreen" component={LoginScreen}/>
            <Stack.Screen name="SignUPScreen" component={SignUPScreen}/>
            <Stack.Screen name="MyLocationScreen" component={MyLocationScreen}/>
            <Stack.Screen name="MyShopScreen"    component={MyShopScreen}/>
        </Stack.Navigator>
    );
}


export default MainNavigation;

//<Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen}/>
