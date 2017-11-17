<template>
    <div class="detail-container">
        <h1>Sass</h1>
        <h3>使用方法</h3>
        <div class="detail-item">
            <div>npm install node-sass --save、npm install sass-loader --save，设置style的lang="scss"</div>
            <div>
                <a href="http://blog.csdn.net/lily2016n/article/details/75309492" target="_blank">参考博客</a>
                <a href="https://www.sass.hk/" target="_blank">API</a>
            </div>
        </div>

        <h3>使用示例</h3>
        <div class="detail-item">
            <div>能够正常显示背景颜色即引入成功，具体sass语言参考API</div>
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

<style scoped lang="scss">
    @import "../../styles/common.scss";
</style>
