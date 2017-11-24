<template>
    <div class="detail-container">
        <h1>js-xlsx</h1>
        <h3>使用方法</h3>
        <div class="detail-item">
            <div>
                npm install xlsx --save
            </div>
            <div>
                第1种方式：在static下新建lib目录，将node_modules/xlsx/dist/jszip.js、node_modules/xlsx/dist/xlsx.js
                两个文件拷贝进去，并在index.html文件中引用
            </div>
            <div>
                第2种方式：在webpack.dev.conf.js中配置
            </div>
            <div>
                <a href="http://www.deanhan.cn/js-excel.html" target="_blank">参考博客</a>
                <a href="https://github.com/SheetJS/js-xlsx" target="_blank">github</a>
            </div>
        </div>

        <h3>使用示例</h3>
        <div class="detail-item">
            <import-excel></import-excel>
        </div>

        <div>
            <el-button type="primary" @click="goBack()">返回列表</el-button>
        </div>
    </div>
</template>

<script>
    import ImportExcel from './ImportExcel.vue'

    export default {
        components: {
            ImportExcel
        },
        data() {
            return {}
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
