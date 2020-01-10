import React , {useState} from 'react';
import { StyleSheet, Text, View , Button,TextInput} from 'react-native';

export default function App() {
  const [value , changeValue]  = useState ('Loggedout');
  const [btnvalue , btnchangeValue]  = useState ('Login');

  const changeText = ()=>{changeValue(value == 'Loggedout' ? 'LoggedIn' : 'Loggedout');
  btnchangeValue(btnvalue == 'Login' ? 'Logout' : 'Login') }
  return (
    <View style={styles.container}>
      <Text>{value}</Text>
      <TextInput
          style={{height: 40}}
          placeholder="Username"
        />
         <TextInput
          style={{height: 40}}
          placeholder="passowrd"
        />
      <Button title={btnvalue} onPress={changeText}/>
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
