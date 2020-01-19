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




  return (
      <View>
    
        <Text> Payment Screen </Text>

      </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
     paddingTop: 15,
     paddingBottom:200
    
}, image: {
      flexGrow:1,
      height:null,
      width:null,
      alignItems: 'center',
      justifyContent:'center'
    },
     cardContainer:{
    width:400,
    height:100,
    maxWidth:'80%',
    alignItems:'center'
  }, bottomView: {
    width: "100%",
    padding: 10,
    backgroundColor: "#17C2DF",
    justifyContent: "center",
    alignItems: "flex-end",
    position: "absolute", //Here is the trick
    bottom: 0 //Here is the trick
  },
  
  item: {
    padding: 7,
    marginTop: 2,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    flexDirection: "row"
  }
});

export default PaymentScreen;
