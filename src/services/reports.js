import axios from 'axios';

import { toast } from 'react-toastify';
const base = 'http://hr.dev.kourtzaridis.me/'

const fetchReports = async (token) => {
    const options = {
        headers: {
            'Authorization': 'Bearer ' + token
        } 
    }
    try {
        const response = await axios.get(`${base}reports`, options);
        return response.data.data;
    } catch (error) {
        if (error.response) {
            const message = error.response.data.message;
            const errors = error.response.data.errors; 
            
            toast(message);

            errors.forEach(error => {
                toast(error);
            });
        }
    } 
} 

export {
    fetchReports
};