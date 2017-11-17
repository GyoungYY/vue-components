import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Index from '@/components/Index'
import List from '@/components/List'

import ElementUI from '@/components/DetailList/ElementUI'
import Sass from '@/components/DetailList/Sass'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: HelloWorld,
            redirect: '/index'
        },
        {
            path: '/index',
            name: 'index',
            component: Index
        },
        {
            path: '/List',
            name: 'List',
            component: List
        },
        {
            path: '/ElementUI',
            name: 'ElementUI',
            component: ElementUI
        },
        {
            path: '/Sass',
            name: 'Sass',
            component: Sass
        },
    ]
})
