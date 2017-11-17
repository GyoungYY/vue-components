<template>
    <div class="detail-container">
        <h1>vue-cropper</h1>
        <h3>使用方法</h3>
        <div class="detail-item">
            <div>npm install vue-cropper --save</div>
            <div>
                <a href="https://github.com/xyxiao001/vue-cropper" target="_blank">github地址</a>
            </div>
        </div>

        <h3>使用示例</h3>
        <div class="detail-item">
            <div style="height: 600px;">
                <vueCropper
                    ref="cropper2"
                    :img="example2.img"
                    :outputSize="example2.size"
                    :outputType="example2.outputType"
                    :info="example2.info"
                    :canScale="example2.canScale"
                    :autoCrop="example2.autoCrop"
                    :autoCropWidth="example2.width"
                    :autoCropHeight="example2.height"
                    :fixed="example2.fixed"
                    :fixedNumber="example2.fixedNumber"
                ></vueCropper>
            </div>
            <el-button type="primary" @click="preview()">预览(base64)</el-button>
            <img :src="url" style="width: 200px;height: 200px;">
        </div>

        <div>
            <el-button type="primary" @click="goBack()">返回列表</el-button>
        </div>
    </div>
</template>

<script>
    import vueCropper from 'vue-cropper'

    export default {
        components: {
            vueCropper,
        },
        data() {
            return {
                example2: {
                    img: 'http://ofyaji162.bkt.clouddn.com/bg1.jpg',
                    info: true,
                    size: 1,
                    outputType: 'jpeg',
                    canScale: false,
                    autoCrop: true,
                    // 只有自动截图开启 宽度高度才生效
                    autoCropWidth: 300,
                    autoCropHeight: 250,
                    // 开启宽度和高度比例
                    fixed: true,
                    fixedNumber: [4, 3]
                },
                url:'http://ofyaji162.bkt.clouddn.com/bg1.jpg',
            }
        },
        methods: {
            preview() {
                this.$refs.cropper2.getCropData((data) => {
                    this.url = data;
                })
            },
            goBack: function () {
                this.$router.push({path: '/List'});
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../styles/common.scss";
</style>
