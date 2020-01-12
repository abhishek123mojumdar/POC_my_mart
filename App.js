import React , {useState} from 'react';
import Login from './components/Login.js';
import HeaderMenu from './components/Common/HeaderMenu.js';
import {StyleSheet,View} from 'react-native';

export default function App() {
 
  return (

     <View style={styles.container}>
  
   <HeaderMenu/>
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
});
