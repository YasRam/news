import React, { Component, useState } from 'react';
import {TouchableOpacity, Text, View, StyleSheet, Button, ScrollView, Image, Linking } from 'react-native';

export default class Footer extends React.Component {

    render() {
        return (

            <View style={{ backgroundColor: '#262861', padding: 30, flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate("about") 
                }}>
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={require('../assets/info.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    Linking.openURL('whatsapp://send?text=hello&phone=+201202016943')
                }}>
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={require('../assets/whatsapp.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('newsCar')
                }}>
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={require('../assets/home.png')}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}