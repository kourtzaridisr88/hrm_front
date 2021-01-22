import axios from 'axios';

import { toast } from 'react-toastify';
const base = 'http://hr.dev.kourtzaridis.me/'

const login = async (params) => {
    try {
        const response = await axios.post(`${base}auth/login`, params);
        toast(response.data.message);
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
    login
};