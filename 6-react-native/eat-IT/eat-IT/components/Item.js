//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
const Item = ({ item }) => {
    let { restaurant } = item;
    return (
        <View style={styles.container}>
            {restaurant.thumb ? <Image style={styles.image} source={{ uri: restaurant.thumb }} /> : null}
            <Text style={styles.name}>{restaurant.name}</Text>
            <Text>Rating - {restaurant.user_rating.aggregate_rating} , in {restaurant.location.city}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        margin:20,
    },
    image: {
        // width: 250,
        height: 220,
        borderRadius: 4
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
    }
});

//make this component available to the app
export default Item;
