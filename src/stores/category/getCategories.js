import {defineStore} from "pinia";
import {client} from "@/plugins/axios.js";
import {reactive} from "vue";

export const useFetchCategories = defineStore(
    'fetchCategories', () => {
        const state = reactive({
            categories: [],
            count: 0
        })

        function categoriesGet() {
            return new Promise((resolve, reject) => {
                client.get('categories')
                    .then(res => {
                        console.log('Kategoriyalar Olindi');

                        state.categories = res.data['member']
                        state.count = res.data['totalItem']

                        resolve()
                    })
                    .catch(error => {
                        console.log(error, 'Kategoriyalarni olishda xatolik ')
                        reject()
                    })

            })
        }

        return { categoriesGet, state }
    })