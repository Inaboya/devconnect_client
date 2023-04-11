import axios from 'axios';

const baseUrl = process.env.BACKEND_API as string;

export const useAxios = axios.create({
    baseURL: baseUrl,
})


export const useAxios2 = axios.create({
    baseURL: baseUrl,
    headers: {
        // Authorization: 
    }
})