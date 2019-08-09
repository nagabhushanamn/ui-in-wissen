

import { useState, useEffect } from 'react';
import zomoto from '../api/zomato';


export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const searchApi = async (term) => {
        try {
            const response = await zomoto.get("/search", {
                params: {
                    q: term,
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

    return [results, errorMessage, searchApi]

}