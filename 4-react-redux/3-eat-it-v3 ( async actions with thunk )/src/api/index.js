
import axios from 'axios';

const baseUrl = 'http://localhost:8181/api'

const api = {
    loadItems(cat, size) {
        return axios.get(`${baseUrl}/items`)
    },
    loadReviews(itemId) {
        return axios.get(`${baseUrl}/items/${itemId}/reviews`)
    },
    addNewReview(itemId, review) {
        return axios.post(`${baseUrl}/items/${itemId}/reviews`, review)
    },
    doLogin(email, password) {
        return axios.post(`${baseUrl}/Users/login`, { email, password })
    }
}

export default api;

