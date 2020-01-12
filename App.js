import React , {useState} from 'react';
import Login from './components/Login.js';

export default function App() {
 
  return (

     <View style={styles.container}>
  
   <Login/>
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
