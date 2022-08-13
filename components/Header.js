import React, { Component, useState } from 'react';
import { TouchableOpacity,Text, View, StyleSheet, Button, ScrollView, Image, Linking } from 'react-native';

export default class Header extends React.Component {

    render() {
        return (

            <View style={{ backgroundColor: '#262861', padding: 30, flexDirection: 'row', justifyContent: 'space-between', }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={{ width: 50, height: 50, }}
                            source={require('../assets/home.png')}
                        />
                        <Text style={{ fontSize: 25, fontWeight: 'bold', padding: 5 }}>{this.props.title}</Text>
                    </View>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('web')
                    }}>
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={require('../assets/Google_Chrome_icon_(September_2014).svg.png')}
                        />
                    </TouchableOpacity>
                </View>
        )}
}