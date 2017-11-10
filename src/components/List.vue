<template>
    <div>
        <div class="component-item" @click="gotoDetail('/ElementUI')">
            <h2>ElementUI</h2>
            <div>Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库</div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){

        },
        methods:{
            gotoDetail:function (path) {
                this.$router.push({path:path});
            }
        }
    }
</script>

<style>
    .component-item{
        border:1px solid #ddd;
        border-radius: 8px;
        padding:10px;
        margin:20px;
    }
</style>
