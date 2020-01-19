import React, {useState } from "react";
import { StyleSheet, Text, Button, TextInput, View,Image,FlatList,TouchableOpacity } from "react-native";
import { SocialIcon,ListItem, Divider,PricingCard } from "react-native-elements";
import LoginImage from '../Components/LoginImage'
import LoginForm  from '../Components/LoginForm'
import Card from '../Components/Common/CardContainer' 
import { MaterialIcons } from "@expo/vector-icons";

const CartScreen = (props) => {

//console.log(global.oCart);

let currentCartContent=global.oCart;

console.log(currentCartContent);

let sum=0;

for(let i=0;i<global.oCart.length;i++)
{
    global.oCart[i].finalAmount= global.oCart[i].quantity*global.oCart[i].price
    sum+=global.oCart[i].finalAmount;
}

let tax= 0.15*sum;

let oFinalAmount=tax+sum;
console.log(global.oCart);

navToPayment = () => {
    props.navigation.navigate({ routeName: "Payment",params:{finalAmount:oFinalAmount} });
  };


  return (
      <View>
    <View style={styles.container} >
          {/* <FlatList
            data={currentCartContent}
            renderItem={({ item }) => (
                <View>
                   <Card style={styles.cardContainer}>
                <Image
          style={styles.image}
          source={{uri: item.avatar}}
        />
            <Text> {item.name} </Text>
            <Text> {item.quantity} </Text>
            </Card>
            </View>
            )}
          /> */}

            {
    currentCartContent.map((l, i) => (
      <ListItem
        key={i}
        leftAvatar={{ source: { uri: l.avatar } }}
        title={l.name}
        rightSubtitle={'Rs' + l.finalAmount}

        subtitle={'Quantity: ' + l.quantity}
     
        bottomDivider
        
      />
    ))
  }
  <View style={styles.shiftDown}>
  <Divider style={{ backgroundColor: 'black',marginTop:20 }} />
  <View style={styles.showRight}>
    <Text style={{marginTop:10}}> { 'Net Payable: Rs '+sum} </Text>
    <Text> { 'Taxes: Rs '+tax} </Text>
    </View>
  <Divider style={{ backgroundColor: 'black',marginTop:10 }} />
  </View>

    <View style={styles.showRight}>
    <Text> { 'Final Amount: Rs '+oFinalAmount} </Text>
    </View>
    </View>

  

 <View style={styles.bottomView}>
 
        <TouchableOpacity onPress={navToPayment}>
          <View style={styles.item}>
            <MaterialIcons name="navigate-next" size={18} color="#333" />
            <Text style={styles.itemtext}> Proceed </Text>
          </View>
        </TouchableOpacity>
      </View>


      </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
     paddingTop: 15,
     paddingBottom:200
    
},
showRight:{
     alignItems: 'flex-end',
},
 image: {
      flexGrow:1,
      height:null,
      width:null,
      alignItems: 'center',
      justifyContent:'center'
    },
     cardContainer:{
    width:400,
    height:100,
    maxWidth:'80%',
    alignItems:'center'
  }, bottomView: {
    width: "100%",
    padding: 10,
    backgroundColor: "#17C2DF",
    justifyContent: "center",
    alignItems: "flex-end",
    position: "absolute", //Here is the trick
    bottom: 0 //Here is the trick
  },
  
  item: {
    padding: 7,
    marginTop: 2,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    flexDirection: "row"
  },
  buttonText:{
    fontSize:16,
    fontWeight:'500',
    color:'white',
    marginTop:5,
    textAlign:'center'
},
  shiftDown:{
marginTop:100
  }
});

export default CartScreen;
