import {defineStore} from "pinia";
import {client} from "@/plugins/axios.js";


export const useCreateBook = defineStore(
    'create-book', () => {
        function createBook(data) {
            return new Promise((resolve, reject) => {
                client.post('books', data)
                    .then(() => {
                        console.log('Kitob yaratildi');
                        resolve()
                    })
                    .catch(error => {
                        console.log(error, 'Kitob yaratishda xatolik')
                        reject()
                    })

            })
        }

        return { createBook }
    })