<template>
    <div class="detail-container">
        <h1>jQuery File Upload</h1>
        <h3>使用方法</h3>
        <div class="detail-item">
            <div>jQuery File Upload</div>
            <div>
                <a href="http://www.jq22.com/jquery-info230" target="_blank">参考博客</a>
            </div>
        </div>

        <h3>使用示例</h3>
        <div class="detail-item">
            <el-button @click="getInput">get input</el-button>
            <input id="fileupload" type="file" name="files[]" data-url="pay.bilibili.com/file/upload">
            <div id="progress">
                <div class="bar" style="width: 0%;"></div>
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
            return {}
        },
        mounted() {
            this.fileUploadEle = document.getElementById('fileUpload');

            this.fileUploadEle.addEventListener('change', () => {
                this.uploadFile();
            }, false);
        },
        methods: {
            getInput() {
                console.log($('#fileupload'));
            },

            uploadFile() {
                $('#fileupload').fileupload({
                    dataType: 'json',
                    done: function (e, data) {
                        $.each(data.result.files, function (index, file) {
                            $('<p/>').text(file.name).appendTo(document.body);
                        });
                    },
                    progressall: function (e, data) {
                        var progress = parseInt(data.loaded / data.total * 100, 10);
                        $('#progress .bar').css(
                            'width',
                            progress + '%'
                        );
                    }
                });
            },

            goBack: function () {
                this.$router.push({path: '/List'});
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../styles/common.scss";

    .bar {
        height: 18px;
        background: green;
    }
</style>
