import React  from 'react';
import {StyleSheet} from 'react-native';
import Navigator from './Navigation/Navigator'

export default function App() {

  global.oCart =[];
 
  return <Navigator />;

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
