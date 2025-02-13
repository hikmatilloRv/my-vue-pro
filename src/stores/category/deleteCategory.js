import {defineStore} from "pinia";
import {client} from "@/plugins/axios.js";


export const useDeleteCategory = defineStore(
    'deleteCategory', () => {
        function categoryDelete(id) {
            return new Promise((resolve, reject) => {
                client.delete('categories/' + id)
                    .then(() => {
                        console.log('Kategoriya O\'chirildi');
                        resolve()
                    })
                    .catch(error => {
                        console.log(error, 'Kategoriya o\'chirishda xatolik ')
                        reject()
                    })

            })
        }

        return {categoryDelete}
    })