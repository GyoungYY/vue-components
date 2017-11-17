<template>
    <div style="padding: 20px 60px;text-align: left;">

        <el-card>
            <div class="component-item" @click="gotoDetail('/ElementUI')">
                <img src="../images/element.png" alt="" class="item-img">
                <div class="item-title">ElementUI</div>
                <div>Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库</div>
            </div>
        </el-card>

        <el-card>
            <div class="component-item" @click="gotoDetail('/Sass')">
                <img src="../images/sass.png" alt="" class="item-img">
                <div class="item-title">Sass</div>
                <div>世界上最成熟、最稳定、最强大的专业级CSS扩展语言！</div>
            </div>
        </el-card>

        <el-card>
            <div class="component-item" @click="gotoDetail('/Bootstrap')">
                <img src="../images/bootstrap.png" alt="" class="item-img">
                <div class="item-title">Bootstrap</div>
                <div>简洁、直观、强悍的前端开发框架，让web开发更迅速、简单。</div>
            </div>
        </el-card>

        <el-card>
            <div class="component-item" @click="gotoDetail('/VueCropper')">
                <img src="../images/vueCropper.png" alt="" class="item-img">
                <div class="item-title">vue-cropper</div>
                <div>一个优雅的图片裁剪插件</div>
            </div>
        </el-card>

    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
            gotoDetail: function (path) {
                this.$router.push({path: path});
            },

        }
    }
</script>

<style scoped>
    .el-card {
        width: 1200px;
        margin: 10px auto;
    }

    .component-item {
        padding-left: 230px;
        height: 200px;
        position: relative;
    }

    .item-img {
        position: absolute;
        left: 0;
        width: 200px;
        height: 200px;
        border-radius: 8px;
    }

    .item-title {
        font-size: 30px;
        font-weight: bold;
        padding-bottom: 20px;
    }
</style>
