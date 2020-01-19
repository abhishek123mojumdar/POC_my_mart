import React, {Component, useState} from 'react';
import {StyleSheet, View,Text} from 'react-native';
import { Header, ThemeProvider } from 'react-native-elements';

const HeaderMenu=(props) => {

        return(
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>

        );
       
    }

const styles = StyleSheet.create({
  header:{
    width: '100%',
    height: 50,
    paddingTop: 30,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center'
  },
  headerTitle:{
    color:'black',
    fontSize:20,
    paddingBottom:25
  }
});

export default HeaderMenu;
