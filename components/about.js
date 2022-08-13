import React, { useState } from 'react';
import {TouchableOpacity, Text, View, StyleSheet, Button, ScrollView, Image } from 'react-native';


export default function About() {

    return (
        <View style={{ backgroundColor: '#999999' }}>

            <View style={{ backgroundColor: '#777', padding: 100, margin: 20, alignItems: 'center', justifyContent: "center",flex: 1}}>
            <Text style={{ fontSize: 50, fontWeight: 'bold',paddingBottom:80 }}>About Us</Text>
                <View>
                    <Image
                        style={{ width: 350, height: 350 }}
                        source={require('../assets/wings-2053515__340.webp')}
                    />
                </View>
                <View style={{ flexShrink: 1 ,alignItems: 'center', justifyContent: "center",}}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>no Way</Text>
                    <Text style={{ fontSize: 20 ,textAlign:'center'}}>no Way du ajsao  daso sdj er rh sof rehus df dsl fdfjds fjd no Way du ajsao  daso sdj er rh sof rehus df dsl fdfjds fjd no Way du ajsao  daso sdj er rh sof rehus df dsl fdfjds fjd no Way du ajsao  daso sdj er rh sof rehus df dsl fdfjds fjdno Way du ajsao  daso sdj er rh sof rehus df dsl fdfjds fjd no Way du ajsao  daso sdj er rh sof rehus df dsl fdfjds fjd no Way du ajsao  daso sdj er rh sof rehus df dsl fdfjds fjd no Way du ajsao  daso sdj er rh sof rehus df dsl fdfjds fjd no Way du ajsao  daso sdj er rh sof rehus df dsl fdfjds fjd no Way du ajsao  daso sdj er rh sof rehus df dsl fdfjds fjd no Way du ajsao  daso sdj er rh sof rehus df dsl fdfjds fjd no Way du ajsao  daso sdj er rh sof rehus df dsl fdfjds fjdno Way du ajsao  daso sdj er rh sof rehus df dsl fdfjds fjd no Way du ajsao  daso sdj er rh sof rehus df dsl fdfjds fjd no Way du ajsao  daso sdj er rh sof rehus df dsl fdfjds fjd no Way du ajsao  daso sdj er rh sof rehus df dsl fdfjds fjd</Text>
                </View>
            </View>

        </View>
    );
}
