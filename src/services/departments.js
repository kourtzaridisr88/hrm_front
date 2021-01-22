import axios from 'axios';

import { toast } from 'react-toastify';
const base = 'http://hr.dev.kourtzaridis.me/'

const fetchDepartments = async (token, params) => {
    const options = {
        headers: {
            'Authorization': 'Bearer ' + token
        },
        params: params
    }
    try {
        const response = await axios.get(`${base}departments`, options);
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

const createDepartment = async (token, params) => {
    const options = {
        headers: {
            'Authorization': 'Bearer ' + token
        } 
    }
    try {
        const response = await axios.post(`${base}departments`, params, options);
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

const fetchDepartment = async (token, id) => {
    const options = {
        headers: {
            'Authorization': 'Bearer ' + token
        } 
    }
    try {
        const response = await axios.get(`${base}departments/${id}`, options);

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

const updateDepartment = async (token, id, params) => {
    const options = {
        headers: {
            'Authorization': 'Bearer ' + token
        } 
    }
    try {
        const response = await axios.put(`${base}departments/${id}`, params, options);
        
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

const deleteDepartment = async (token, id) => {
    const options = {
        headers: {
            'Authorization': 'Bearer ' + token
        } 
    }
    try {
        const response = await axios.delete(`${base}departments/${id}`, options);
        toast('Department updated!');
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

export {
    fetchDepartments,
    createDepartment,
    fetchDepartment,
    updateDepartment,
    deleteDepartment
};