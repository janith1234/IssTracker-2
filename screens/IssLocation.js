import React, { Component } from 'react';
import { Text, View, TouchableOpacity,StyleSheet } from 'react-native';

export default class IssLocationScreen extends Component {
  render() {
    return ( 
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center', borderRadius:50,
        }}>
        <TouchableOpacity  
        style={{
          backgroundColor:"red",alignItems:"center",width:50,height:50,
  justifyContent:"center",borderColor:"black",borderWidth:1.7,borderRadius:50, marginBottom:"100%",marginRight:"80%" 
  
        }} 
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text>back</Text>
        </TouchableOpacity>
        <Text>ISS Location Screen!</Text>
      </View>
    );
  }
}


