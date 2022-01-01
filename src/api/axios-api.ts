import {Configuration, PetApi} from "../ts-axios";
import axios from "axios";


const axiosInstance = axios.create({
    baseURL: `https://petstore3.swagger.io/api/v3`,
    headers: {
        'accept': 'application/json'
    }
})
axios.interceptors.request.use(function (config) {
    if(config.headers) config.headers.token = 'this is token'
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});


export const petApi = new PetApi(new Configuration({}), '', axiosInstance);