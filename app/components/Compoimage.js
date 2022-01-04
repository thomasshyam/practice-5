import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
} from 'react-native';
import Bodytext from './Bodytext';

export default class Compoimage extends Component {

    render() {
        return (
            <ImageBackground source={this.props.ImageSource} style={styles.image}>
                <Bodytext />
                </ImageBackground>
            
        );
    }
    
}

const styles = StyleSheet.create({
    image:{
        height:300,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
});
