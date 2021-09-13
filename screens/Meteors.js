import React, { Component } from 'react';
import { Text, View,TouchableOpacity,StyleSheet } from 'react-native';

export default class MeteorScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <TouchableOpacity
                
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text>back</Text>
        </TouchableOpacity>
                <Text>Meteor Screen!</Text>
            </View>
        )
    }
}
