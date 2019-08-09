


//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';

import zomoto from '../api/zomato';
import List from '../components/List';
// import useResults from '../hooks/useResults';



// create a component
const HomeScreen = ({navigation}) => {
    const [term, setTerm] = useState('')
    // const [searchApi, results, errorMessage] = useResults()

    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (term) => {
        try {
            const response = await zomoto.get("/search", {
                params: {
                    q: term,
                    entity_type:'city'
                }
            })
            setResults(response.data.restaurants)
        } catch (err) {
            setErrorMessage(err.message)
        }
    }

    useEffect(() => {
        searchApi('veg')
    }, [])


    return (
        <>
            <SearchBar
                term={term}
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>we have found {results.length} results</Text>

            <ScrollView>
                <List title="Restaurants" results={results} />
            </ScrollView>

        </>
    );
};


// define your styles
const styles = StyleSheet.create({
    container: {
        flex:1
    },
});

//make this component available to the app
export default HomeScreen;
