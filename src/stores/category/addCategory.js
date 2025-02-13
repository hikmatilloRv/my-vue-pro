import {defineStore} from "pinia";
import {client} from "@/plugins/axios.js";


export const useAddCategory = defineStore(
    'addCategory', () => {
        function categoryAdd(data) {
            return new Promise((resolve, reject) => {
                client.post('categories', data)
                    .then(() => {
                        console.log('Kategoriya Qo\'shildi');
                        resolve()
                    })
                    .catch(error => {
                        console.log(error, 'Kategoriya Qo\'shishda xatolik ')
                        reject()
                    })

            })
        }

        return {categoryAdd}
    })