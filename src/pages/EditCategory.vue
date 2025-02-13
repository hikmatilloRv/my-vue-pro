<script setup>
import FormInput from "@/components/tags/FormInput.vue";
import FormButton from "@/components/tags/FormButton.vue";
import {useFetchCategories} from "@/stores/category/getCategories.js";
import {useDeleteCategory} from "@/stores/category/deleteCategory.js";
import {useChangeCategory} from "@/stores/category/changeCategory.js";
import {computed, ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();
const categories = computed(() => useFetchCategories().state.categories);
let isChange = ref(false);
let id = ref();
let name = ref('');

function goToAddCategory() {
    router.push('/add-category');
}

function goToEditCategory() {
    // router.push('/category-edit');
    isChange.value = false
}

function select(category) {
    isChange.value = true;
    id.value = category.id;
    name.value = category.name
}

function changeCategory() {
    useChangeCategory().categoryChange(id.value, {name: name.value})
        .then(() => {
            useFetchCategories().categoriesGet()
            isChange.value = false
        })
}

function remove(id) {
    useDeleteCategory().categoryDelete(id)
        .then(() => {
            useFetchCategories().categoriesGet()
        })
}
</script>

<template>
    <div>
        <div v-if="isChange" class="row">
            <div class="col-12 col-md-6">
                <FormInput v-model="name" props-id="category" label-name="Kategoriya Nomi"/>
                <FormButton @click="changeCategory()" class="btn-success" button-name="O'zgartirish"/>
                <FormButton @click="goToEditCategory()" class="btn-secondary m-3" button-name="Qaytish"/>

            </div>
        </div>

        <table v-else class="table border">
            <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Kategoriya Nomi</th>
                <th scope="col">O'zgartirish</th>
                <th scope="col">O'chirish</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="category in categories" :key="category.id">
                <th>{{ category.id }}</th>
                <td>{{ category.name }}</td>
                <td><span @click="select(category)" class="cursor text-success">O'zgartirish</span></td>
                <td><span @click="remove(category.id)" class="cursor text-danger">O'chirish</span></td>
            </tr>
            </tbody>
        </table>
        <div class="mt-3" v-if="!isChange">
            <FormButton
                @click="goToAddCategory()"
                button-name="Yangi Kategoriya Qo'shish"
                class="btn-primary"
            />
        </div>
    </div>

</template>

<style scoped>
.cursor {
    cursor: pointer;
}
</style>