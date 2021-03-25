import axios from 'axios';

// 创建axios实例
const instance = axios.create({
    timeout: 8000,
    withCredentials: false,
    responseType: 'json',
    headers: {
        "Content-Type": 'application/json;charset=utf-8'
    }
});

export default instance;
