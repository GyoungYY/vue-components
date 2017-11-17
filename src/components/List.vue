<template>
    <div style="padding: 20px 60px;text-align: left;">

        <el-card>
            <div class="component-item" @click="gotoDetail('/ElementUI')">
                <img src="../images/element.png" alt="" class="item-img">
                <div class="item-title">ElementUI</div>
                <div>Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库</div>
            </div>
        </el-card>

    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        methods:{
            gotoDetail:function (path) {
                this.$router.push({path:path});
            },

        }
    }
</script>

<style scoped>
    .el-card{
        width: 1200px;
        margin:auto;
    }
    .component-item{
        padding-left: 200px;
        height: 200px;
        position: relative;
    }

    .item-img{
        position: absolute;
        left: 0;
        width: 200px;
        height: 200px;
    }

    .item-title{
        font-size: 30px;
        font-weight: bold;
        padding-bottom:20px;
    }
</style>
