import axios from 'axios'

export const CRequest = axios.create({
    baseURL: 'http://localhost:9090/celebrity',
})

CRequest.interceptors.request.use(function (config) {
    if (localStorage.getItem('token')) {
        config.headers = {
            'Authorization': 'Bearer' + localStorage.getItem('token'), //携带权限参数
            'Content-Type': 'multipart/form-data'
        };
    }
    return config
}, function (error) {
    return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
    return response
}, function (error) {
    console.log(error)
    return Promise.reject(error)
})
export default CRequest
