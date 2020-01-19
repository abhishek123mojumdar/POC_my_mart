import React, {Component, useState} from 'react';
import {StyleSheet, Text, Button, TextInput, Image, View,TouchableOpacity,FlatList,ScrollView} from 'react-native';
import Card from '../Components/Common/CardContainer' 
import HeaderMenu from '../Components/Common/HeaderMenu.js';
import { SearchBar } from 'react-native-elements';

const CategoriesScreen=(props) => {

  const categories = [
 {
    name: 'Fruits & Vegetables',
    avatar: 'https://d2ebzu6go672f3.cloudfront.net/media/content/images/H0517_Veggies_TSk-512628780.jpg',
    id:"100D63"
 },
 {
    name: 'Foodgrains & Masala',
    avatar: 'http://www.fishmydeals.in/wp-content/uploads/2018/08/Foodgrains-Oil-Masala-Products.jpg',
    id:"101D63"
 },
 {
    name: 'Bakery, Cakes & Diary',
    avatar: 'data:image/jpeg;base64,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',
    id:"102D63"
 },
 {
    name: 'Hot & Cold Beverages',
    avatar: 'https://bsmedia.business-standard.com/_media/bs/img/article/2019-01/01/full/1546320860-9359.png',
    id:"103D63"
 },
 {
    name: 'Cleaning & HouseHold',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLf2Y3nrWmcimEjWgg2Be_NgZa0zCPZlDD7sFhnS8Dej1A36J_&s',
    id:"104D63"
 }

];

const renderedCatItems =(itemData)=>{
  return (
        
    <View key={itemData.item.id} >
      <TouchableOpacity onPress={()=>{
        props.navigation.navigate({routeName:'Products',params:{categoryID:itemData.item.id}})
      }} style={styles.category}>
      <Card style={styles.cardContainer}>
        <Text>{itemData.item.name}</Text>
        <Image
          style={styles.image}
          source={{uri: itemData.item.avatar}}
        />
      </Card>
    </TouchableOpacity>
    </View>
   
  );
}
  
return(
  <ScrollView>
    <FlatList keyExtractor={(item,index)=>String(index)} data={categories} renderItem={renderedCatItems} numColumns={2}>

    </FlatList>
  </ScrollView>
  
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
    margin:30,
    height:150
  },
  buttonContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:10,
    padding:5
  },
  cardContainer:{
    width:300,
    height:100,
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

export default CategoriesScreen;
