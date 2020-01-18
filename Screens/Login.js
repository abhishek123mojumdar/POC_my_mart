import React, {useState } from "react";
import { StyleSheet, Text, Button, TextInput, View,Image } from "react-native";
import { SocialIcon } from "react-native-elements";



const LoginScreen = (props) => {
  const [btnvalue, btnchangeValue] = useState("Login");

  const changeText = () => {
    props.navigation.navigate({routeName:'Categories'})
    btnchangeValue(btnvalue == "Login" ? "Logout" : "Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require('../Components/Images/Multi-Utility-Networks.png')} />
         </View>
      <TextInput style={{ height: 40 }} placeholder="Username" />
      <TextInput style={{ height: 40 }} placeholder="passowrd" />
      <Button title={btnvalue} onPress={changeText} />

      <View style={{flexDirection:"row"}}>
        <View>
          <SocialIcon type="facebook" />
        </View>
        <View>
           <SocialIcon type="google" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
},
loginContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
},
logo: {
    position: 'absolute',
    width: 300,
    height: 100
}
});

export default LoginScreen;
