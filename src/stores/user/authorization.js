import {defineStore} from "pinia";
import axios from "axios";

export const useAuthorization = defineStore(
    'authorization', () => {
        function userAuth(data) {
            return new Promise((resolve, reject) => {
                axios.post('http://localhost:8081/api/users/auth', data)
                    .then(res => {
                        console.log('Token Olindi');
                        localStorage.setItem('token', res.data.token);
                        resolve()
                    })
                    .catch(error => {
                        console.log(error, 'Token olishda xatolik ')
                        reject()
                    })

            })
        }

        return {userAuth}
    })