<template>
    <div class="detail-container">
        <h1>Less</h1>
        <h3>使用方法</h3>
        <div class="detail-item">
            <div>npm install less less-loader --save，在style中设置lang="less"</div>
            <div>
                <a href="http://lesscss.cn/" target="_blank">API</a>
            </div>
        </div>

        <h3>使用示例</h3>
        <div class="detail-item">
            <div>能够正常显示背景颜色即引入成功，具体less语言参考API</div>
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

            }
        },
        methods: {

            goBack: function () {
                this.$router.push({path: '/List'});
            }
        }
    }
</script>

<style scoped lang="less">
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
</style>
