

//import libraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Item from './Item';

import { withNavigation } from 'react-navigation'

// create a component
const List = ({ title, results, navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                data={results}
                keyExtractor={item => "" + item.restaurant.R.res_id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('reviews', { photos: item.restaurant.photos })}>
                            <Item item={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

//make this component available to the app
// export default List;
export default withNavigation(List)
