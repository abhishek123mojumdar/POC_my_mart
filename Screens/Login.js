import React, {useState } from "react";
import { StyleSheet, Text, Button, TextInput, View,Image } from "react-native";
import { SocialIcon } from "react-native-elements";
import LoginImage from '../Components/LoginImage'
import LoginForm  from '../Components/LoginForm'

const LoginScreen = (props) => {
  return (
    <View style={styles.container}>
      <LoginImage/>
      <LoginForm property={props}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
}
});

export default LoginScreen;
