import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  Button,
  TextInput,
  Image,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
  ScrollView
} from "react-native";
import Card from "../Components/Common/CardContainer";
import HeaderMenu from "../Components/Common/HeaderMenu.js";
import { SearchBar } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";

const ProductScreen = props => {
  let categoryId = props.navigation.getParam("categoryID");
  let categoryName = props.navigation.getParam("categoryName");
  // this.handleClick = this.handleClick.bind(this) ;

  const products = {
    "100D63": [
      {
        name: "Mango",
        avatar:
          "https://images-na.ssl-images-amazon.com/images/I/31KSJIUe16L._SX425_.jpg",
        productID: "100Pr",
        price: 50,
        quantity:1
      },
      {
        name: "Grape",
        avatar:
          "https://i0.wp.com/ozfruitdirect.com.au/wp-content/uploads/2019/03/Grapes-Red.jpg?fit=800%2C600&ssl=1",
        productID: "101Pr",
        price: 40,
        quantity:1
      },
      {
        name: "Potato",
        avatar:
          "https://5.imimg.com/data5/TB/IF/MY-41399105/potato-500x500.jpg",
        productID: "102Pr",
        price: 30,
          quantity:1
      },
      {
        name: "Onion",
        avatar:
          "https://images-na.ssl-images-amazon.com/images/I/71fMF29i%2BgL._SX679_.jpg",
        productID: "103Pr",
        price: 85,
        quantity:1
      }
    ],
    "101D63": [
      {
        name: "Rice",
        avatar:
          "https://5.imimg.com/data5/FD/RD/MY-20704244/25-kg-rice-bag-500x500.jpg",
        productID: "104Pr",
        price: 60,
         quantity:1
      },
      {
        name: "Dal",
        avatar:
          "https://5.imimg.com/data5/HQ/KR/MY-5477230/toor-dal-500x500.jpg",
        productID: "105Pr",
        price: 48,
       quantity:1
      },
      {
        name: "Red Chilli",
        avatar:
          "https://4.imimg.com/data4/PL/RT/FUSIONI-14598517/prod-image-500x500.jpg",
        productID: "106Pr",
        price: 34,
       quantity:1
      },
      {
        name: "Mustard",
        avatar:
          "https://5.imimg.com/data5/JI/UF/MY-54869207/mustard-seed-500x500.jpg",
        productID: "107Pr",
        price: 41,
        quantity:1
      }
    ],
    "102D63": [
      {
        name: "Toned Milk",
        avatar:
          "https://5.imimg.com/data5/KH/EN/GLADMIN-56046954/mother-dairy-toned-milk-500x500.png",
        productID: "108pr",
        price: 24,
          quantity:1
      },
      {
        name: "Paneer (Fresh)",
        avatar:
          "https://4.imimg.com/data4/HC/HE/ANDROID-66812354/product-500x500.jpeg",
        productID: "109pr",
        price: 81,
        quantity:1
      },
      {
        name: "Whole Wheat Bread",
        avatar:
          "https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2013/12/whole-wheat-bread-recipe-1.jpg",
        productID: "110pr",
        price: 39,
        quantity:1
      },
      {
        name: "Butter",
        avatar:
          "https://5.imimg.com/data5/PU/UB/MY-19432744/amul-butter-100g-500x500.png",
        productID: "111pr",
        price: 90,
        quantity:1
      }
    ],
    "103D63": [
      {
        name: "Tea",
        avatar:
          "https://5.imimg.com/data5/VG/WW/MY-29964389/tata-tea-masala-chai-500x500.jpg",
        productID: "112pr",
        price: 49,
         quantity:1
      },
      {
        name: "Soft Drink",
        avatar:
          "https://wholesalesg.com/pub/media/catalog/product/cache/68accc69642f3f47c4a1a02683dc9dca/c/o/coca-cola-15-l-11562918045l6vhch4dma.jpg",
        productID: "113pr",
        price: 20,
        quantity:1
      },
      {
        name: "Club Soda",
        avatar:
          "http://supreme.brands2home.com/wp-content/uploads/2018/02/LEHAR-CLUB-SODA-2.jpg",
        productID: "114pr",
        price: 28,
         quantity:1
      },
      {
        name: "Fruit Juice (Orange)",
        avatar:
          "http://www.hspmart.in/wp-content/uploads/2017/03/REAL-ORANGE-JUICE-1-LTR..jpg",
        productID: "115pr",
        price: 80,
       quantity:1
      }
    ],
    "104D63": [
      {
        name: "Dishwash",
        avatar:
          "https://5.imimg.com/data5/VN/IQ/MY-6743710/vim-dishwash-liquid-500x500.jpg",
        productID: "116pr",
        price: 68,
          quantity:1
      },
      {
        name: "Fabric Conditioner",
        avatar:
          "https://5.imimg.com/data5/AT/NT/MY-47355059/fabric-conditioner-500x500.jpg",
        productID: "117pr",
        price: 51,
         quantity:1
      },
      {
        name: "Lizol Floor Cleaner",
        avatar:
          "https://5.imimg.com/data5/MN/LA/MY-39862581/lizol-floor-cleaner-500x500.jpg",
        productID: "118pr",
        price: 168,
          quantity:1
      },
      {
        name: "Kitchen Towel",
        avatar:
          "https://www.kitchenstuffplus.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/9/3/93186_20000_harman-combo-white-cotton-kitchen-towel-set-of-3.jpg",
        productID: "119pr",
        price: 430,
         quantity:1
      }
    ]
  };

  handleClick = productID => {
    // console.log("Add Clicked");
    console.log(productID);
    //console.log(currentProducts);

    let cartArray = [];

    for (let i = 0; i < currentProducts.length; i++) {
      if (currentProducts[i].productID == productID) {
       // currentProducts[i].quantity++;
        cartArray.push(currentProducts[i]);
      }
    }

    console.log(currentProducts);

    for (let i = 0; i < cartArray.length; i++) {
        let isPresent=false;
      for(let j=0;j<global.oCart.length;j++)
      {
        if(global.oCart[j].productID==cartArray[i].productID)
        {
         global.oCart[j].quantity++;
         isPresent=true;
        }
        
      }
      if(isPresent==false)
      {
       
            global.oCart.push(cartArray[i]);
        
      }
      
    }

    //forceUpdate();

   // console.log(global.oCart);
  };

  navToCart = () => {
    props.navigation.navigate({ routeName: "Cart" });
  };

  // console.log(categoryId);
  // console.log(categoryName);

  let currentProducts = products[categoryId];

  return (
    // <View>
    //   <HeaderMenu></HeaderMenu>
    //  <Text>akjbhb {categoryId}</Text>
    // </View>

    <View style={styles.container}>
      <HeaderMenu title={categoryName}></HeaderMenu>
      <ScrollView>
        {currentProducts.map((u, i) => {
          return (
            <View key={i} style={styles.category}>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate({
                    routeName: "Products",
                    params: { categoryID: u.categoryID }
                  });
                }}
              >
                <Card style={styles.cardContainer}>
                  <Text>{u.name}</Text>
                  <Image style={styles.image} source={{ uri: u.avatar }} />
                  <View>
                    {/* <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: 10
                      }}
                    >
                      <Button
                        title="-"
                        color="#8A8A8A"
                        onPress={() =>
                          Alert.alert("Button with adjusted color pressed")
                        }
                      />

                      <TextInput
                        style={{
                          borderColor: "gray",
                          borderWidth: 1,
                          padding: 10,
                          paddingVertical: 10
                        }}
                        onChangeText={text => onChangeText(text)}
                        defaultValue="1"
                        keyboardType={"numeric"}
                      />

                      <Button
                        style={{ marginLeft: 10, paddingLeft: 10 }}
                        title="+"
                        color="#8A8A8A"
                        onPress={() =>
                          Alert.alert("Button with adjusted color pressed")
                        }
                      />
                    </View> */}
                   
                    <Button
                      style={{ height: 10, marginLeft: 50 }}
                      title="Add"
                      color="#464140"
                      onPress={handleClick.bind(this, u.productID)}
                    />
                     <Text> Quanity: 0 </Text>
                  </View>
                </Card>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>

      {/* <FlatList
        data={currentProducts}
        renderItem={({ item }) => <Item title={item.name} />}
        keyExtractor={item => item.id}
      /> */}
      <View style={styles.bottomView}>
        <TouchableOpacity onPress={navToCart}>
          <View style={styles.item}>
            <MaterialIcons name="shopping-cart" size={18} color="#333" />
            <Text style={styles.itemtext}> Cart </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  category: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    padding: 5
  },
  cardContainer: {
    width: 400,
    maxWidth: "100%",
    alignItems: "center",
    justifyContent: "space-between"
  },
  image: {
    flexGrow: 1,
    height: 40,
    width: 90,
    alignItems: "center",
    justifyContent: "center"
  },
  bottomView: {
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
  }
});

export default ProductScreen;
