import {createRouter, createWebHistory} from "vue-router";
import {defineAsyncComponent} from "vue";

const ifAuthorized = (to, from, next) => {
    if (localStorage.getItem('token') !== null) {
        next()
    } else  {
        next('/login')
    }
}

const ifNotAuthorized = (to, from, next) => {
    if (localStorage.getItem('token') === null) {
        next()
    } else  {
        next('/')
    }
}

const routes = [
    {
        path: '/',
        component: () => import('@/pages/HomePage.vue'),
        meta: {
            layout: defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'))
        },
        beforeEnter: ifAuthorized

    },
    {
        path: '/book-info',
        component: () => import('@/pages/BookInfoPage.vue'),
        meta: {
            layout: defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'))
        },
        beforeEnter: ifAuthorized
    },
    {
        path: '/login',
        component: () => import('@/pages/LoginPage.vue'),
        meta: {
            layout: defineAsyncComponent(() => import('@/layouts/BlankLayout.vue'))
        },
        beforeEnter: ifNotAuthorized
    },
    {
        path: '/edit-category',
        component: () => import('@/pages/EditCategory.vue'),
        meta: {
            layout: defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'))
        },
        beforeEnter: ifAuthorized
    },
    {
        path: '/add-category',
        component: () => import('@/pages/AddCategory.vue'),
        meta: {
            layout: defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'))
        },
        beforeEnter: ifAuthorized
    },
    {
        path: '/create-book',
        component: () => import('@/pages/CreateBook.vue'),
        meta: {
            layout: defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'))
        },
        beforeEnter: ifAuthorized
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
});
