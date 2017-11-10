<template>
    <div class="detail-container">
        <h1>ElementUI</h1>
        <h3>使用方法</h3>
        <div class="use-method">
            npm install element-ui --save-dev
        </div>

        <div>
            <el-button type="primary" @click="goBack()">返回列表</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        methods:{

            goBack:function () {
                this.$router.push({path:'/List'});
            }
        }
    }
</script>

<style scoped>
    .detail-container{
        padding:20px 80px;
    }
    h3 {
        text-align: left;
        padding:10px;
        border-bottom: 1px solid #ddd;
    }
    .use-method{
        margin: 20px 0;
        padding:10px;
        background-color: #f6f8fa;
        text-align: left;
    }
</style>
