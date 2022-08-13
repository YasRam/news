import React, { useState } from 'react';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Splash extends React.Component {
    render() {

        return (
            <View style={{ backgroundColor: '#5555ff', flex: 1, alignItems: 'center', justifyContent: "center", padding: 50 }}>
                <Image
                    source={require("../assets/wings-2053515__340.webp")}
                    style={{ height: 300, width: 300 }} />
                <ActivityIndicator size={'large'} color="#fff" />
                {this.mynavigator()}
            </View>
        )
    }

    mynavigator() {
        // AsyncStorage.removeItem('login')
        AsyncStorage.getItem('login').then((val)=>{
            if(val){
                setTimeout(() => { this.props.navigation.navigate("newsCar") }, 1000);
            }else{
                setTimeout(() => { this.props.navigation.navigate("frist") }, 1000);
            }

        })
    }
}
