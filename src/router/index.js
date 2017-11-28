import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Index from '@/components/Index'
import List from '@/components/List'

import ElementUI from '@/components/DetailList/ElementUI'
import Sass from '@/components/DetailList/Sass'
import Bootstrap from '@/components/DetailList/Bootstrap'
import VueCropper from '@/components/DetailList/VueCropper'
import Less from '@/components/DetailList/Less'
import Xlsx from '@/components/DetailList/Xlsx'
import MintUI from '@/components/DetailList/MintUI'

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
        {
            path: '/Bootstrap',
            name: 'Bootstrap',
            component: Bootstrap
        },
        {
            path: '/VueCropper',
            name: 'VueCropper',
            component: VueCropper
        },
        {
            path: '/Less',
            name: 'Less',
            component: Less
        },
        {
            path: '/Xlsx',
            name: 'Xlsx',
            component: Xlsx
        },
        {
            path: '/MintUI',
            name: 'MintUI',
            component: MintUI
        },
    ]
})
