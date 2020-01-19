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

 let amount = props.navigation.getParam("finalAmount");

 let deliveryCharge = 25 * (Number((amount/100).toFixed(0)));

 let grandTotal = amount+deliveryCharge;

 let discount = Number((0.1 * amount).toFixed(2));

 let amountPayable = grandTotal-discount;


  return (

    <View style={styles.container}>
      <View style={styles.group2}>
        <View style={styles.group}>
          <View style={styles.basketValueRow}>
            <Text style={styles.basketValue}>Basket value</Text>
            <Text style={styles.loremIpsum}>{amount}</Text>
          </View>
        </View>
        <View style={styles.group1}>
          <View style={styles.deliveryChargesRow}>
            <Text style={styles.deliveryCharges}>Delivery Charges</Text>
            <Text style={styles.loremIpsum2}>{deliveryCharge}</Text>
          </View>
        </View>
        <View style={styles.group3}>
          <View style={styles.grandTotalRow}>
            <Text style={styles.grandTotal}>Grand Total</Text>
            <Text style={styles.loremIpsum3}>{grandTotal}</Text>
          </View>
        </View>
        <View style={styles.group4}>
          <View style={styles.promoCodeRow}>
            <Text style={styles.promoCode}>Promo Code</Text>
            <Text style={styles.get10}>GET10</Text>
          </View>
        </View>
        <View style={styles.group5}>
          <View style={styles.codeDiscountRow}>
            <Text style={styles.codeDiscount}>Code Discount</Text>
            <Text style={styles.loremIpsum4}>{discount}</Text>
          </View>
        </View>
        <View style={styles.group6}>
          <View style={styles.amountPayableRow}>
            <Text style={styles.amountPayable}>Amount Payable</Text>
            <Text style={styles.loremIpsum5}>{amountPayable}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={()=>{global.oCart = []
            props.navigation.navigate({routeName:'Success', params:{amount:amountPayable}})}}>
            <Text style={styles.continueShopping}>Make Payment</Text>
      </TouchableOpacity>
    </View>

        // <View style={styles.container}>
        //   <Text>{paymentAmount}</Text>
        //   <TouchableOpacity style={styles.button} onPress={()=>{
        //     props.navigation.navigate({routeName:'Success', params:{amount:paymentAmount}})}}>
        //     <Text style={styles.buttonText}>Make Payment</Text>
        //   </TouchableOpacity>
        // </View>
     
    
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "rgba(230, 230, 230,1)"
  },
  group2: {
    width: 357,
    height: 267,
    marginTop: 139,
    alignSelf: "center"
  },
  group: {
    width: 357,
    height: 16,
    flexDirection: "row"
  },
  basketValue: {
    color: "#121212",
    fontSize: 16,
    flex: 1
  },
  loremIpsum: {
    color: "#121212",
    fontSize: 16,
    textAlign: "right",
    flex: 1
  },
  basketValueRow: {
    height: 16,
    flexDirection: "row",
    flex: 1,
    marginRight: -1
  },
  group1: {
    width: 357,
    height: 16,
    flexDirection: "row",
    marginTop: 20
  },
  deliveryCharges: {
    color: "#121212",
    fontSize: 16,
    flex: 1,
    marginTop: 1
  },
  loremIpsum2: {
    color: "#121212",
    fontSize: 16,
    textAlign: "right",
    flex: 1
  },
  deliveryChargesRow: {
    height: 17,
    flexDirection: "row",
    flex: 1,
    marginRight: -1
  },
  group3: {
    width: 356,
    height: 29,
    borderColor: "#000000",
    borderWidth: 0,
    borderTopWidth: 3,
    borderStyle: "dotted",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    flexDirection: "row",
    marginTop: 45,
    marginLeft: 1
  },
  grandTotal: {
    width: 178,
    color: "#121212",
    fontSize: 16,
    height: 17
  },
  loremIpsum3: {
    width: 178,
    color: "#121212",
    fontSize: 16,
    textAlign: "right",
    height: 17
  },
  grandTotalRow: {
    height: 25,
    flexDirection: "row",
    alignItems: "flex-end",
    flex: 1,
    marginBottom: 1
  },
  group4: {
    width: 356,
    height: 16,
    flexDirection: "row",
    marginTop: 13
  },
  promoCode: {
    color: "#121212",
    fontSize: 16,
    width: 178,
    height:17
  },
  get10: {
    color: "#121212",
    width:178,
    height:17,
    fontSize: 16,
    textAlign: "right"
  },
  promoCodeRow: {
    height: 16,
    flexDirection: "row",
    flex: 1
  },
  group5: {
    width: 356,
    height: 16,
    flexDirection: "row",
    marginTop: 14
  },
  codeDiscount: {
    color: "#121212",
    fontSize: 16,
    width:178,
    height:17
  },
  loremIpsum4: {
    color: "#121212",
    fontSize: 16,
    textAlign: "right",
    width:178,
    height:17
  },
  codeDiscountRow: {
    height: 16,
    flexDirection: "row",
    flex: 1
  },
  group6: {
    width: 356,
    height: 41,
    borderColor: "#000000",
    borderWidth: 0,
    borderTopWidth: 4,
    borderStyle: "dotted",
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 1
  },
  amountPayable: {
    width: 178,
    color: "#121212",
    fontSize: 16,
    height: 17
  },
  loremIpsum5: {
    width: 178,
    color: "#121212",
    fontSize: 16,
    textAlign: "right",
    height: 17
  },
  amountPayableRow: {
    height: 25,
    flexDirection: "row",
    alignItems: "flex-end",
    flex: 1
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
  }


  // {
  //   container: {
  //     flex: 1,
  //     backgroundColor: '#F7F7F7',
  //     flexDirection:'column',
  //     alignItems:'center',
  //     justifyContent:'center'
  // },
  // buttonText:{
  //     fontSize:16,
  //     fontWeight:'500',
  //     color:'white',
  //     marginTop:5,
  //     textAlign:'center'
  // },
  // button:{
  // backgroundColor : '#696c66',
  // width:300,
  // height:30,
  // borderRadius:25,
  // marginVertical:10
  // }
  // }
});

export default PaymentScreen;
