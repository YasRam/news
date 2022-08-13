import React, { Component, useState } from 'react';
import {TouchableOpacity, Text, View, StyleSheet, Button, ScrollView, Image, Linking, ActivityIndicator } from 'react-native';
import Header from './Header';
import Footer from './footer';

export default class NewsCar extends React.Component {
    //  navigation = React.useContext(NavigationContext);

    state = { news: [], apiState: 0 };
    componentDidMount() {
        // console.log(this.navigation)

        fetch('https://mockend.com/HosamZewain/test/posts')
            .then((resp) => resp.json())
            .then((respJeson) => {
                this.setState({ news: respJeson })
            })
    }
    render() {
        return (
            <View style={{ backgroundColor: '#999999' }}>
                {/* header */}
                <Header title="Cars News" img = '../assets/home.png'/>
                {/* body */}
                <ScrollView>
                    {this.renderData()}
                </ScrollView>

                {/* footer */}
                <Footer />
            </View>
        )
    };

    renderData() {
        if (this.state.news.length > 0) {
            return (
                this.state.news.map((item) => {
                    return (
                        <View key={item.id}>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('theCar',{item}) }}>
                                <View style={{ backgroundColor: '#777', flexDirection: 'row', padding: 7, marginVertical: 5 , marginHorizontal:10 , borderRadius:20}}>
                                    <View>
                                        <Image
                                            style={{ width: 150, height: 150, borderRadius: 20 }}
                                            source={{ uri: item.image }}
                                        />
                                    </View>
                                    <View style={{ flexShrink: 1, padding: 10 }}>
                                        <Text style={{ fontSize: 25, fontWeight: 'bold', }}>{item.title}</Text>
                                        <Text style={{ fontSize: 20 }}>{(item.body).substring(0, 150) + "..."}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                })
            )
        } else {
            return (
                <ActivityIndicator size='large' color='red' />
            )
        }
    }
}