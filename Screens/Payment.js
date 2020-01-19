import React, {useState } from "react";
import { StyleSheet, Text, Button, TextInput, View,Image,FlatList,TouchableOpacity } from "react-native";
import { SocialIcon,ListItem  } from "react-native-elements";
import LoginImage from '../Components/LoginImage'
import LoginForm  from '../Components/LoginForm'
import Card from '../Components/Common/CardContainer' 
import { MaterialIcons } from "@expo/vector-icons";

const PaymentScreen = (props) => {

//console.log(global.oCart);

// let currentCartContent=global.oCart;

// console.log(currentCartContent);

 let paymentAmount = props.navigation.getParam("finalAmount");


  return (
        <View style={styles.container}>
          <Text>{paymentAmount}</Text>
          <TouchableOpacity style={styles.button} onPress={()=>{
            props.navigation.navigate({routeName:'Success', params:{amount:paymentAmount}})}}>
            <Text style={styles.buttonText}>Make Payment</Text>
          </TouchableOpacity>
        </View>
     
    
  );
};

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#F7F7F7',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center'
  },
  buttonText:{
      fontSize:16,
      fontWeight:'500',
      color:'white',
      marginTop:5,
      textAlign:'center'
  },
  button:{
  backgroundColor : '#696c66',
  width:300,
  height:30,
  borderRadius:25,
  marginVertical:10
  }
  }
);

export default PaymentScreen;
