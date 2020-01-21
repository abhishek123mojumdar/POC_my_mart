import React from 'react';
import {View , StyleSheet } from 'react-native';

const Card = (props) =>{
    return (<View style={{...styles.cardStyle, ...props.styles}}>
        {props.children}
    </View>)
}

const styles = StyleSheet.create({
    cardStyle :{
        shadowColor : 'black',
        shadowOffset : {width : 0, height : 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation:12,
        backgroundColor : 'white',
        padding : 20,
        borderRadius : 20,
        height:200
    }
})

export default Card;