import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import Compoimage from './Compoimage';
import Bodytext from './Bodytext';

export default class Body extends Component {
  
    render() {
        return (
            <View style={styles.container} >
                <View style={styles.column1}>
                   <Compoimage ImageSource={require('../img/2.png')}/>
                </View>
                <View style={styles.column2}>
                <Compoimage ImageSource={require('../img/3.png')}>
                    <Bodytext />
                </Compoimage>
                </View>
                <View style={styles.columnfull}>
                <Compoimage ImageSource={require('../img/3.png')}/>
                </View>
                <View style={styles.column2}>
                   <Compoimage ImageSource={require('../img/3.png')}/>
                </View>
                <View style={styles.column1}>
                <Compoimage ImageSource={require('../img/2.png')}/>
                </View>
                <View style={styles.columnfull}>
                <Compoimage ImageSource={require('../img/2.png')}/>
                </View>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        padding:5,
        backgroundColor:'violet',
    },
    column1:{
        flex:1,
        padding:5,

    },
    column2:{
        flex:2,
        padding:5,
    },
    columnfull:{
        width:'100%',
        alignContent:'center',
        justifyContent:'center',
        padding:5,
    },
});
