import React, {Component, useState} from 'react';
import {StyleSheet, Text, Button, TextInput, Image, View,TouchableOpacity} from 'react-native';
import Card from '../Components/Common/CardContainer' 
import HeaderMenu from '../Components/Common/HeaderMenu.js';
import { SearchBar } from 'react-native-elements';

const ProductScreen=() => {

  const products = [
 {
   "100D63":
   [
   {
   name: 'Mango',
   avatar: 'https://d2ebzu6go672f3.cloudfront.net/media/content/images/H0517_Veggies_TSk-512628780.jpg',
   categoryID:"100Pr"
   } ,
   {
    name: 'Fruits & Vegetables',
    avatar: 'https://d2ebzu6go672f3.cloudfront.net/media/content/images/H0517_Veggies_TSk-512628780.jpg',
    categoryID:"101Pr"
    } ,
    {
      name: 'Potatoe',
      avatar: 'https://d2ebzu6go672f3.cloudfront.net/media/content/images/H0517_Veggies_TSk-512628780.jpg',
      categoryID:"102Pr"
    } ,
    {
      name: 'Onion',
      avatar: 'https://d2ebzu6go672f3.cloudfront.net/media/content/images/H0517_Veggies_TSk-512628780.jpg',
      categoryID:"103Pr"
    } 
   ],
   "101D63":
   [
   {
   name: 'Rice',
   avatar: 'https://d2ebzu6go672f3.cloudfront.net/media/content/images/H0517_Veggies_TSk-512628780.jpg',
   categoryID:"104Pr"
   } ,
   {
    name: 'Dal',
    avatar: 'https://d2ebzu6go672f3.cloudfront.net/media/content/images/H0517_Veggies_TSk-512628780.jpg',
    categoryID:"105Pr"
    } ,
    {
      name: 'Red Chilli',
      avatar: 'https://d2ebzu6go672f3.cloudfront.net/media/content/images/H0517_Veggies_TSk-512628780.jpg',
      categoryID:"106Pr"
    } ,
    {
      name: 'Mustard',
      avatar: 'https://d2ebzu6go672f3.cloudfront.net/media/content/images/H0517_Veggies_TSk-512628780.jpg',
      categoryID:"107Pr"
    } 
   ]
}

];
  
return(
  <HeaderMenu></HeaderMenu>

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
