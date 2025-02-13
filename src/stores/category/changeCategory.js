import {defineStore} from "pinia";
import {client} from "@/plugins/axios.js";


export const useChangeCategory = defineStore(
    'changeCategory', () => {
        function categoryChange(id, data) {
            return new Promise((resolve, reject) => {
                client.patch('categories/' + id, data)
                    .then(() => {
                        console.log('Kategoriya O\'zgartirildi');
                        resolve()
                    })
                    .catch(error => {
                        console.log(error, 'Kategoriya o\'zgartirishda xatolik ')
                        reject()
                    })

            })
        }

        return { categoryChange }
    })