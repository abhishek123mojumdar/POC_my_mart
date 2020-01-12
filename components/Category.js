import React, {Component, useState} from 'react';
import {StyleSheet, Text, Button, TextInput, Image, View} from 'react-native';
import HeaderMenu from './Common/HeaderMenu.js';
import { Card, ListItem, Icon, SearchBar } from 'react-native-elements';

const Category=() => {

  const products = [
 {
    name: 'Fruits & Vegetables',
   categoryID:"100"
 },
 {
    name: 'Foodgrains & Masala',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
   categoryID:"101"
 },
 {
    name: 'Bakery, Cakes & Diary',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
   categoryID:"102"
 },
 {
    name: 'Beverages',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
   categoryID:"103"
 },
 {
    name: 'Cleaning & HouseHold',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
   categoryID:"104"
 }

];

 


  
        return(
    <View style={styles.container}>
      <HeaderMenu/>

      <SearchBar
        placeholder="Type Here..."
    
      />
 
  {
    products.map((u, i) => {
      return (
        <View key={i} style={styles.user}>
         <Card title={u.name}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: u.avatar }}
          />
          <Text style={styles.name}>{u.categoryID}</Text>
          </Card>
        </View>
      );
    })
  }

      
    </View>

        );
       
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  user:{
      flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Category;
