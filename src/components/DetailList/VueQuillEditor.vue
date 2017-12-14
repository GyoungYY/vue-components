<template>
    <div style="width: 1200px;margin: 20px auto;">
        <h1 style="padding: 10px;margin:10px 0;background-color: red;">
            由于引入了cube-ui污染了全局样式，要使该页面正常，先在main.js中把引入cube-ui的两行代码注释掉</h1>
        <div class="detail-item">
            <div>npm install vue-quill-editor --save</div>
            <div>
                <a href="https://github.com/surmon-china/vue-quill-editor" target="_blank">github地址</a>
                <a href="http://www.cnblogs.com/zhengweijie/p/7305903.html" target="_blank">参考博客</a>
            </div>
        </div>
        <quill-editor v-model="content"
                      ref="myQuillEditor"
                      :options="options">
        </quill-editor>

        <h1>下面预览</h1>
        <div v-html="content" style="text-align: left;"></div>

        <div>
            <el-button type="primary" @click="goBack()">返回列表</el-button>
        </div>
    </div>
</template>

<script>
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'

    import {quillEditor} from 'vue-quill-editor'

    const toolbarOptions = [
        ['bold', 'italic', 'underline'],
        [{'color': []}],
        [{'size': ['small', 'large', 'huge']}],
        [{'align': []}],
    ];

    export default {
        components: {
            quillEditor
        },
        data() {
            return {
                content: '<h2>I am Example</h2>',
                options: {},
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
