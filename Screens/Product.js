import React, {Component, useState} from 'react';
import {StyleSheet, Text, Button, TextInput, Image, View,TouchableOpacity} from 'react-native';
import Card from '../Components/Common/CardContainer' 
import HeaderMenu from '../Components/Common/HeaderMenu.js';
import { SearchBar } from 'react-native-elements';

const ProductScreen=(props) => {
  let categoryId = props.navigation.getParam('categoryID');
  const products = [
 {
   "100D63":
   [
   {
   name: 'Mango',
   avatar: 'https://d2ebzu6go672f3.cloudfront.net/media/content/images/H0517_Veggies_TSk-512628780.jpg',
   productID:"100Pr",
   price: 50
   } ,
   {
    name: 'Grape',
    avatar: 'https://d2ebzu6go672f3.cloudfront.net/media/content/images/H0517_Veggies_TSk-512628780.jpg',
    productID:"101Pr",
    price: 40
    } ,
    {
      name: 'Potatoe',
      avatar: 'https://d2ebzu6go672f3.cloudfront.net/media/content/images/H0517_Veggies_TSk-512628780.jpg',
      productID:"102Pr",
      price: 30
    } ,
    {
      name: 'Onion',
      avatar: 'https://d2ebzu6go672f3.cloudfront.net/media/content/images/H0517_Veggies_TSk-512628780.jpg',
      productID:"103Pr",
      price: 85
    } 
   ],
   "101D63":
   [
   {
   name: 'Rice',
   avatar: 'https://d2ebzu6go672f3.cloudfront.net/media/content/images/H0517_Veggies_TSk-512628780.jpg',
   productID:"104Pr",
   price: 60
   } ,
   {
    name: 'Dal',
    avatar: 'https://d2ebzu6go672f3.cloudfront.net/media/content/images/H0517_Veggies_TSk-512628780.jpg',
    productID:"105Pr",
    price: 48
    } ,
    {
      name: 'Red Chilli',
      avatar: 'https://d2ebzu6go672f3.cloudfront.net/media/content/images/H0517_Veggies_TSk-512628780.jpg',
      productID:"106Pr",
      price:34
    } ,
    {
      name: 'Mustard',
      avatar: 'https://d2ebzu6go672f3.cloudfront.net/media/content/images/H0517_Veggies_TSk-512628780.jpg',
      productID:"107Pr",
      price:41
    } 
   ]
}

];
  
return(
  <View>
    <HeaderMenu></HeaderMenu>
   <Text>{categoryId}</Text>
  </View>
  
);
       
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  category:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:10
  },
  buttonContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:10,
    padding:5
  },
  cardContainer:{
    width:300,
    maxWidth:'80%',
    alignItems:'center'
  },
    image: {
      flexGrow:1,
      height:null,
      width:null,
      alignItems: 'center',
      justifyContent:'center'
    }
});

export default ProductScreen;
