<script setup>
import FormInput from "@/components/tags/FormInput.vue";
import FormButton from "@/components/tags/FormButton.vue";
import {ref} from "vue";
import {useRouter} from "vue-router";
import {useAddCategory} from "@/stores/category/addCategory.js";

let newCategoryName = ref('')
const router = useRouter()

function addCategory() {
    useAddCategory().categoryAdd({name: newCategoryName.value})
        .then(() => {
            router.push('/edit-category')
        })
}

function backToEditCategory() {
    router.back()
}
</script>

<template>
    <h1>Heyy !!</h1>
    <div class="row">
        <div class="col-12 col-md-6">
            <FormInput v-model="newCategoryName" props-id="add-category" label-name="Add New Category Name"/>
            <FormButton @click="addCategory()" button-name="Add" class="btn btn-success"/>
            <FormButton @click="backToEditCategory" button-name="Cancel" class="btn btn-secondary  m-3"/>
        </div>
    </div>
</template>

<style scoped>

</style>