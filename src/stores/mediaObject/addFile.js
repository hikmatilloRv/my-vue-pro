import {defineStore} from "pinia";
import {client} from "@/plugins/axios.js";


export const useAddFile = defineStore(
    'add-file', () => {
        function addFile(data) {
            let file = new FormData()
            file.append('file' , data)

            return new Promise((resolve, reject) => {
                client.post('media_objects', file)
                    .then((response) => {
                        console.log('File yuklandi');
                        resolve(response)
                    })
                    .catch((error) => {
                        console.log(error, 'Fale yuklashda xatolik')
                        reject(error)
                    })

            })
        }

        return { addFile }
    })