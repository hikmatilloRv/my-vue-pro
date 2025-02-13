<script setup>
import {useRouter} from "vue-router";

const router = useRouter()

function logOut() {
    localStorage.removeItem('token')
    router.push('/login')
}
</script>

<template>

    <div class="row">

        <div class="col">
            <header>
                <nav class="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                    <div class="container-fluid">
                        <router-link class="navbar-brand" to="/">Kitoblar</router-link>
                        <button
                            class="navbar-toggler" type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                       aria-expanded="false">
                                        Kitob
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><router-link class="dropdown-item" to="/create-book">
                                            Yaratish
                                        </router-link></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                       aria-expanded="false">
                                        Kategoriya
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><router-link class="dropdown-item" to="/edit-category">
                                            Update & Delete
                                        </router-link></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <span @click="logOut()" class="nav-link cursor">Chiqish</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>

    </div>
</template>

<style scoped>

.cursor {
    cursor: pointer;
    padding-top: 8px;
}
</style>