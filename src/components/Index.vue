<template>
    <div>
        <h1 style="margin: 20px;font-size: 36px;">组件目录</h1>
        <el-table :data="componentList" style="width: 1200px;text-align:left;margin: auto;">
            <el-table-column type="index" width="100">
            </el-table-column>
            <el-table-column prop="name" label="名称" width="200">
            </el-table-column>
            <el-table-column prop="introduce" label="简介" width="900">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                componentList: [{
                    name: 'element',
                    introduce: 'Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库'
                }, {
                    name: 'sass',
                    introduce: '世界上最成熟、最稳定、最强大的专业级CSS扩展语言！'
                }, {
                    name: 'bootstrap',
                    introduce: '简洁、直观、强悍的前端开发框架，让web开发更迅速、简单。'
                }, {
                    name: 'vue-cropper',
                    introduce: '一个优雅的图片裁剪插件'
                }, {
                    name: 'less',
                    introduce: 'Less 是一门 CSS 预处理语言，它扩展了 CSS 语言，增加了变量、Mixin、函数等特性，使 CSS 更易维护和扩展。'
                }, {
                    name: 'xlsx',
                    introduce: 'js解析Excel数据'
                }, {
                    name: 'Mint-UI',
                    introduce: '基于 Vue.js 的移动端组件库'
                }, {
                    name: 'cube-ui',
                    introduce: 'cube-ui 是滴滴开源的基于 Vue.js 实现的精致移动端组件库'
                }, {
                    name: 'vue-quill-editor',
                    introduce: '基于 Quill、适用于 Vue 的富文本编辑器，支持服务端渲染和单页应用'
                }],
            }
        }
    }
</script>

<style scoped>
    h3 {
        background-color: #ddd;
        padding: 10px;
    }
</style>
