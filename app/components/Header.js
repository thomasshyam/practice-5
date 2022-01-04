import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
} from 'react-native';


export default class Header extends Component {

    render() {
        return (
            <View style={styles.header}>
                <Image source={require('../img/1.png')} style={styles.logo}/>
                <Text style={styles.title}> Order Cart</Text>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    header: {
        height:80,
        marginTop:20,
        backgroundColor:'#fff',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        padding:20,
        width:Dimensions.get('window').width,
        borderBottomWidth:4,
        
        
    },
    logo:{
        width:40,
        height:40,
        marginTop:20,
    },
    title:{
        marginTop:15,
        marginLeft:10,
        color:'#000',
        fontWeight:'bold',
        fontSize:16,
        fontStyle:'italic',
    },
});
