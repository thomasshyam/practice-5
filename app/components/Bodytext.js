import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';


export default class  extends Component {

    render() {
        return (
            <View style={styles.bodytitle}>
                <Text style={styles.bodytext}>Buy Me</Text>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bodytext:{
        elevation:1,
        alignSelf:'center',
        fontSize:25,
        fontWeight:'bold',
        backgroundColor:'rgba(255,255,255,0.6)',
        padding:10,
        color:'#292929',
    },
});
