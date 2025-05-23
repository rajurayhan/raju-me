import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

// Portfolio API
export const portfolioApi = {
    getAll: async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/portfolio?limit=9`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    getById: async (id) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/portfolio/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};

// Blog API
export const blogApi = {
    getAll: async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/blogs?limit=9`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    getBySlug: async (slug) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/blogs/slug/${slug}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    getById: async (id) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/blog/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}; 