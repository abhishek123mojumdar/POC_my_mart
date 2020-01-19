
import React, { Component } from 'react';
import { View, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const height = width * 0.4;

const Carousel = (props) => {
const Images = [
    'https://d1ilnltdtrvmj1.cloudfront.net/cb_images/super-sale--get-up-to-30-25-off-on-groceries-up-to-575-25-cashback-from-us-50510851.jpg',
    'http://grofers-prod-consumer-appimages.s3.amazonaws.com/images/baby-skin-hair-care.jpg',
    'http://www.dealnloot.com/wp-content/uploads/2018/04/Grofers-Summer-Saving-Days-300x155.png',
    'https://s3-ap-south-1.amazonaws.com/img.paisawapas/images/2019/03/01125413/amazonapp.jpg'
]
    return (
    <View
        style={styles.scrollContainer}
    >
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        >
          {Images.map(image => (
            <Image style={styles.image} source={{uri:image}} />
          ))}
        </ScrollView>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    scrollContainer: {
      height,
    },
    image: {
      width,
      height,
    },
  });
  
  export default Carousel;