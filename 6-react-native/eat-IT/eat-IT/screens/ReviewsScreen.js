//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

// create a component
const ReviewsScreen = ({ navigation }) => {
    const photos = navigation.getParam('photos')
    return (
        <View style={styles.container}>
            <FlatList
                data={photos}
                keyExtractor={item => item.photo.id}
                renderItem={({ item }) => {
                    return (
                        <>
                            <Image style={styles.image} source={{ uri: item.photo.thumb_url }} />
                        </>
                    )
                }}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
    },
    image: {
        height: 200,
        margin:4
    }
});

//make this component available to the app
export default ReviewsScreen;
