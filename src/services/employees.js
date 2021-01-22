import axios from 'axios';

import { toast } from 'react-toastify';
const base = 'http://hr.dev.kourtzaridis.me/'

const fetchEmployees = async (token) => {
    const options = {
        headers: {
            'Authorization': 'Bearer ' + token
        } 
    }
    try {
        const response = await axios.get(`${base}employees`, options);
        console.log(response);
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

const createEmployee = async (token, params) => {
    const options = {
        headers: {
            'Authorization': 'Bearer ' + token
        } 
    }
    try {
        const response = await axios.post(`${base}employees`, params, options);
        toast(response.data.message);
        return response.data.data;
    } catch (error) {
        if (error.response) {
            const message = error.response.data.message;
            const errors = error.response.data.errors; 

            toast(message);

            Array.from(Object.values(errors)).forEach(error => {
                toast(error);
            });
        }
    } 
} 

const fetchEmployee = async (token, id) => {
    const options = {
        headers: {
            'Authorization': 'Bearer ' + token
        } 
    }
    try {
        const response = await axios.get(`${base}employees/${id}`, options);

        return response.data.data;
    } catch (error) {
        if (error.response) {
            const message = error.response.data.message;
            const errors = error.response.data.errors; 

            toast(message);

            Array.from(Object.values(errors)).forEach(error => {
                toast(error);
            });
        }
    } 
} 

const updateEmployee = async (token, id, params) => {
    const options = {
        headers: {
            'Authorization': 'Bearer ' + token
        } 
    }
    try {
        const response = await axios.put(`${base}employees/${id}`, params, options);
        toast(response.data.message);
        return 'ok';
    } catch (error) {
        if (error.response) {
            const message = error.response.data.message;
            const errors = error.response.data.errors; 

            toast(message);

            Array.from(Object.values(errors)).forEach(error => {
                toast(error);
            });
        }
    } 
} 

const deleteEmployee = async (token, id) => {
    const options = {
        headers: {
            'Authorization': 'Bearer ' + token
        } 
    }
    try {
        const response = await axios.delete(`${base}employees/${id}`, options);
        toast(response.data.message);
        return response.data.data;
    } catch (error) {
        if (error.response) {
            const message = error.response.data.message;
            const errors = error.response.data.errors; 

            toast(message);

            Array.from(Object.values(errors)).forEach(error => {
                toast(error);
            });
        }
    } 
} 

export {
    fetchEmployees,
    createEmployee,
    fetchEmployee,
    updateEmployee,
    deleteEmployee
};