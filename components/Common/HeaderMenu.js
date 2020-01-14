import React, {Component, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import { Header, ThemeProvider } from 'react-native-elements';

const HeaderMenu=() => {

  

  
        return(
    <View style={styles.Header}>
      <Header
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'My Mart', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>
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
  Header:{
    flex: 1,
    backgroundColor: '#fff',
        alignItems: 'center'
  }
});

export default HeaderMenu;
