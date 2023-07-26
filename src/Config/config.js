
import axios from 'axios';
const axiosInstance = axios.create({
    baseURL:process.env.REACT_APP_BASE_URL,
    params: {
     api_key: 'd2788777ce7fd3a494757d0aaaaa4faf',

    }
})
export default axiosInstance;

