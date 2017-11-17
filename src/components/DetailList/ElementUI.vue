<template>
    <div class="detail-container">
        <h1>ElementUI</h1>
        <h3>使用方法</h3>
        <div class="detail-item">
            <div>npm install element-ui --save-dev</div>
            <div><a href="http://element.eleme.io/#/zh-CN/component/quickstart">参考链接</a></div>
        </div>

        <h3>使用示例</h3>
        <div class="detail-item">
            <div style="margin: 10px;">
                <el-button round>圆形按钮</el-button>
                <el-button type="primary" round>主要按钮</el-button>
                <el-button type="success" round>成功按钮</el-button>
                <el-button type="info" round>信息按钮</el-button>
                <el-button type="warning" round>警告按钮</el-button>
                <el-button type="danger" round>危险按钮</el-button>
            </div>

            <div style="margin: 10px;">
                <el-slider
                    v-model="value8"
                    show-input>
                </el-slider>
            </div>

            <div style="margin: 10px;">
                <span class="demonstration">默认</span>
                <el-date-picker
                    v-model="value1"
                    type="datetime"
                    placeholder="选择日期时间">
                </el-date-picker>
            </div>

            <div style="margin: 10px;">
                <el-alert
                    title="成功提示的文案"
                    type="success"
                    show-icon>
                </el-alert>
                <el-alert
                    title="消息提示的文案"
                    type="info"
                    show-icon>
                </el-alert>
                <el-alert
                    title="警告提示的文案"
                    type="warning"
                    show-icon>
                </el-alert>
                <el-alert
                    title="错误提示的文案"
                    type="error"
                    show-icon>
                </el-alert>
            </div>

            <div style="margin: 10px;">
                <el-steps :space="200" :active="1" finish-status="success">
                    <el-step title="已完成"></el-step>
                    <el-step title="进行中"></el-step>
                    <el-step title="步骤 3"></el-step>
                </el-steps>
            </div>

            <div style="margin: 10px;">
                <el-carousel :interval="4000" type="card" height="200px">
                    <el-carousel-item v-for="item in 6" :key="item">
                        <h3>{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>

        <div>
            <el-button type="primary" @click="goBack()">返回列表</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value8: 8,
                value1: '',
            }
        },
        methods: {

            goBack: function () {
                this.$router.push({path: '/List'});
            }
        }
    }
</script>

<style scoped>
    .detail-container {
        padding: 20px 80px;
    }

    h3 {
        text-align: left;
        padding: 10px;
        border-bottom: 1px solid #ddd;
    }

    .detail-item {
        margin: 20px 0;
        padding: 10px;
        background-color: #f6f8fa;
        text-align: left;
    }

    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>
