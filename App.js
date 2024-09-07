import React , {useEffect}from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./src/navigation/MainNavigation";
import {messaging} from "@react-native-firebase/messaging";





function App () {

 /* useEffect(() => {

    pushNotification()
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('A new FCM message arrived! when app is open');
      console.log(JSON.stringify(remoteMessage));
      onDisplayNotification();
    });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });

    messaging().onNotificationOpenApp(remoteMessage => {
      console.log("=> app open by Clicking Notification");
      console.log( remoteMessage);
    });

    messaging().getInitialNotification().then(remoteMessage => {
      if (remoteMessage) {
        console.log('notification caused app open from quit state' , remoteMessage);
      }
    });

    return unsubscribe;
  } , []);

  async function pushNotification() {
    
    let fcmToken = await messaging().getToken();
    if (fcmToken) {
      console.log("token" , fcmToken);
    }
  }

  async function onDisplayNotification() {
    // Request permissions (required for iOS)
    await notifee.requestPermission()

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'Notification Title',
      body: 'Main body content of the notification',
      android: {
        channelId,
        smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
    });
  }*/

  return (
      <NavigationContainer>
        <MainNavigation/>
      </NavigationContainer>
  );
}


export default App;