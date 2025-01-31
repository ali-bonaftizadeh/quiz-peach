import axios from 'axios';

axios.defaults.withCredentials = true; // Set globally for all requests

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api';

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem("token")
    },
});

// Function for GET requests with query parameters
export const fetchData = async (endpoint, queryParams = {}) => {
    try {
        const response = await apiClient.get(endpoint, { params: queryParams });
        return response.data;
    } catch (error) {
        handleApiError(error);
        throw error;
    }
};

// Function for POST requests
export const postData = async (endpoint, body) => {
    try {
        const response = await apiClient.post(endpoint, body);
        return response.data;
    } catch (error) {
        handleApiError(error);
        throw error;
    }
};

const handleApiError = (error) => {
    if (error.response) {
        console.error('API Error:', error.response.status, error.response.data);
    } else if (error.request) {
        console.error('Network Error:', error.request);
    } else {
        console.error('Error:', error.message);
    }
};

export default apiClient;
