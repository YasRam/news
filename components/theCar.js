import React, { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Button, ScrollView, Image } from 'react-native';
import Footer from './footer';
import Header from './Header';


export default function TheCar({ route }) {
    const { item } = route.params
    return (
        <View style={{ backgroundColor: '#999999' }}>
            <Header />
            <View style={{ backgroundColor: '#777', padding: 100, margin: 20, alignItems: 'center', justifyContent: "center", }}>
                <View>
                    <Image
                        style={{ width: 350, height: 350 }}
                        source={{ uri: item.image }}
                    />
                </View>
                <View style={{ flexShrink: 1, alignItems: 'center', justifyContent: "center", }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{item.title}</Text>
                    <Text style={{ fontSize: 20, textAlign: 'center' }}>{item.body}</Text>
                </View>
            </View>
            <Footer />
        </View>
    );
}
