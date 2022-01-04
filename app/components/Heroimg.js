import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
} from 'react-native';
import Herotext from './Herotext';

export default class  extends Component {

    render() {
        return (
           <ImageBackground source={require('../img/2.png')} style={ styles.hero }>
               <Herotext />
           </ImageBackground>
           
        );
    }
    
}

const styles = StyleSheet.create({
    hero: {
        height:330,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',

    },
});
