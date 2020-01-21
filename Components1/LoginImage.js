import React from "react";
import { StyleSheet, Text, View,Image } from "react-native";



const LoginImage = (props) => {

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Image resizeMode="contain" style={styles.logo} source={require('../Components/Images/myMart.png')} ></Image>
        <Text style={styles.title}>My Mart</Text>
      </View>
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
},
loginContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
},
logo: {
    position: 'absolute',
    width: 150,
    height: 150
},
title:{
  color:'black',
  fontSize:20,
  textAlign:'center',
  marginTop:'40%',
  opacity:0.9
}
});

export default LoginImage;
