import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';


export default class  extends Component {

    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.headertext}>Football Club</Text>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    headertext: {
        elevation:1,
        alignSelf:'center',
        fontSize:25,
        color:'#292929',
        backgroundColor:'rgba(255,255,255,0.6)',
        padding:10,
        fontWeight:'bold',

    },
});
