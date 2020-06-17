import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: 'https://ss-shops.firebaseio.com/'
})

export const axiosDatabase = axios.create({
    baseURL: 'http://localhost:4000/'
})

