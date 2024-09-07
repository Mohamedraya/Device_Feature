import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, View, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button2 from "../button2/Button2";
import Input from "../input/Input";
import styles from "./styles";


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");


    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.theMain}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>

                <Text style={styles.welcomeTxt}>Welcome Back,</Text>

                <View style={styles.inputContainer}>
                    <Input label={"Email"} placeholder={"Enter Your Email..."} keyboardType={"email-address"}
                        onChangeText={value => setEmail(value)} />
                </View>

                <View style={styles.inputContainer}>
                    <Input label={'Password'} placeholder={'Enter your Password...'} secureTextEntry={true}
                        onChangeText={value => setPassword(value)} />
                </View>

                <View style={styles.btnContainer}>
                    <Button2 title={"Login"} onPress={() => { }} />
                </View>

                <Text style={styles.forgot}>Forgot Password ?</Text>

                <View style={styles.socialContainer}>
                    <Pressable>
                        <Image source={require("../../assets/images/facebook.png")} style={styles.socialImg} />
                    </Pressable>
                    <Pressable>
                        <Image source={require("../../assets/images/google.png")} style={styles.socialImg} />
                    </Pressable>
                    <Pressable>
                        <Image source={require("../../assets/images/in.png")} style={styles.socialImg} />
                    </Pressable>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};


export default Login;
