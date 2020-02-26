import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';



export default class HomeScreen extends Component {
    render() {

        const { navigation } = this.props;

        return (
            <View>
                <Text>Home Screen</Text>
                <Button onPress={() => navigation.navigate('Login')}
                 title="Move to Login"
                />
            </View>
        );
    }
} 