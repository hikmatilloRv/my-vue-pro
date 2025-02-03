<script setup>

import CategoriesCol from "@/components/CategoriesCol.vue";
import FooterRow from "@/components/FooterRow.vue";
import HeaderRow from "@/components/HeaderRow.vue";
</script>

<template>
    <div class="container-fluid">
        <HeaderRow/>

        <div class="row m-3">
            <CategoriesCol/>

            <div class="col-12 col-md-9 mt-3 mt-md-0">
                <router-view/>
            </div>
        </div>

        <FooterRow/>
    </div>
</template>

<style scoped>

</style>