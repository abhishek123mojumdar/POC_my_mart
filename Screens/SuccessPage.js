import React, {useState } from "react";
import { StyleSheet, Text, Button, TextInput, View,Image,FlatList,TouchableOpacity } from "react-native";
import { SocialIcon,ListItem  } from "react-native-elements";
import LoginImage from '../Components/LoginImage'
import LoginForm  from '../Components/LoginForm'
import Card from '../Components/Common/CardContainer' 
import { MaterialIcons } from "@expo/vector-icons";

const SuccessScreen = (props) => {

//console.log(global.oCart);

// let currentCartContent=global.oCart;

// console.log(currentCartContent);

 let amount = props.navigation.getParam("amount");

 let successImage = "https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Circle-512.png";




  return (

    <View style={styles.container}>
      <View style={styles.group}>
        <Image
          source={{uri:successImage}}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Text style={styles.paymentSuccessful}>Payment Successful</Text>
        <Text style={styles.loremIpsum}>
          Your payment of Rs. {amount} was successful.{"\n"}
          {"\n"}Thank you for shopping with us.
        </Text>
          <TouchableOpacity style={styles.button} onPress={()=>{global.oCart = []
            props.navigation.navigate({routeName:'Categories'})}}>
            <Text style={styles.continueShopping}>Continue Shopping</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create(
  {
    container: {
        flex: 1,
        backgroundColor: "rgba(230, 230, 230,1)"
      },
      group: {
        height: 344,
        backgroundColor: "rgba(230, 230, 230,1)",
        marginTop: 149
      },
      image: {
        height: 151,
        marginTop: 6
      },
      paymentSuccessful: {
        color: "#121212",
        fontSize: 20,
        textAlign: "center"
      },
      loremIpsum: {
        color: "#121212",
        fontSize: 14,
        textAlign: "center",
        marginTop: 30
      },
      button: {

        backgroundColor : '#696c66',
        width:300,
        height:30,
        height: 37,
        marginTop:40,
        marginLeft: 115,
        marginRight: 115,
        borderRadius:25,
        alignSelf:"center"
      },

      continueShopping: {
        fontSize: 14,
        textAlign: "center",
        fontWeight:'500',
        color:'white',
        marginTop: 10,
        alignSelf: "center"
      },
  }
);



export default SuccessScreen;
