<template>
    <div id="app">
        <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                 @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="index">组件目录</el-menu-item>
            <el-menu-item index="componentsList">组件列表</el-menu-item>
        </el-menu>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                activeIndex: sessionStorage.getItem('tabActive') || 'index',
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                sessionStorage.setItem('tabActive', key);
                if(key === 'index'){
                    this.$router.push({path:'/index'});
                }else if(key === 'componentsList'){
                    this.$router.push({path:'/List'});
                }
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    body {
        margin: 0;
    }
</style>
