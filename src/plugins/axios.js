import axios from "axios";

axios.interceptors.request.use( (config) => {
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('token')

    if (config.method.toLowerCase() === 'patch') {

        config.headers['Content-Type'] = 'application/merge-patch+json'
    } else {
        config.headers['Content-Type'] = 'application/ld+json'
    }

    config.baseURL = 'http://localhost:8081/api/'

    return config
})

export {axios as client}

