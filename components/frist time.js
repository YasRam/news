import React, { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Button, ScrollView, Image, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function FristTime() {

    AsyncStorage.setItem("login", "yes")

    return (
        <View style={{ backgroundColor: '#555', flex: 1 }}>
            <View style={{ backgroundColor: '#777', padding: 100, margin: 20, alignItems: 'center', justifyContent: "center", flex: 1 }}>
                <Text style={{ fontSize: 50, fontWeight: 'bold', paddingBottom: 80 }}>Its Frist Time</Text>
                <View style={{ flexShrink: 1, alignItems: 'center', justifyContent: "center", }}>
                    <TouchableOpacity onPress={() => { () => this.props.navigation.navigate("newsCar") }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>go to my app</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, textAlign: 'center' }}>Its Frist Time Its Frist Time Its Frist Time Its Frist Time Its Frist Time
                        Its Frist Time Its Frist Time Its Frist Time Its Frist Time Its Frist Time </Text>
                </View>
                <View>
                    <Image
                        style={{ width: 350, height: 350 }}
                        source={require('../assets/wings-2053515__340.webp')}
                    />
                </View>
            </View>
        </View>
    );
}