import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://ss-shops.firebaseio.com/'
})

export default axiosInstance