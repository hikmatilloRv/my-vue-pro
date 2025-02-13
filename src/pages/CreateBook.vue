<script setup>
import FormInput from "@/components/tags/FormInput.vue";
import FormButton from "@/components/tags/FormButton.vue";
import {reactive, ref} from "vue";
import {useRouter} from "vue-router";
import {useFetchCategories} from "@/stores/category/getCategories.js";
import {useAddFile} from "@/stores/mediaObject/addFile.js";
import {useCreateBook} from "@/stores/book/createBook.js";

const router = useRouter()

let isLoading = ref(false)
let file = ref(null)
let image = ref(null)
let book = reactive({
    name: "",
    description: "",
    text: "",
    category: "",
    image: ""
})

function selectImage(event) {
    console.log(event)
    file = event.target.files[0]
    image.value = URL.createObjectURL(event.target.files[0])
}

function create() {
    isLoading.value = true
    useAddFile().addFile(file)
        .then((res) => {
            book.image = res.data['@id']

            useCreateBook().createBook(book)
                .then(() => {
                    router.push('/')
                })
                .finally(() =>{
                    isLoading.value = false
                })
        })
}

</script>

<template>
    <div class="row md-3" style="min-height: 75vh">
        <div class="col-12 col-md-6">
            <h1>Kitob Yaratish</h1>
            <FormInput v-model="book.name" props-id="bookName" label-name="Kitob nomi"/>
            <FormInput v-model="book.description" props-id="bookDescription" label-name="Kitob tarifi"/>

            <textarea v-model="book.text" class="form-control" rows="10" placeholder="Kitob matni"/>

            <select v-model="book.category" class="form-select mt-3">
                <option
                    v-for="category in useFetchCategories().state.categories"
                    :key="category.id"
                    :value="category['@id']"
                >
                    {{ category.name }}
                </option>

            </select>

            <input @change="selectImage($event)" type="file" class="form-control mt-3">

            <div class="text-end">
                <FormButton @click="create()" v-bind:loading="isLoading" class="btn-success mt-3"
                            button-name="Yaratish"/>
            </div>

        </div>
        <div v-if="image" class="col-12 col-md-6">
            <img :src="image" alt="...." style="max-width: 200px">
        </div>
    </div>
</template>

<style scoped>

</style>