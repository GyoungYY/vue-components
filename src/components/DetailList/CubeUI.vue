<template>
    <div class="detail-container">
        <h1>cube-ui</h1>
        <h3>使用方法</h3>
        <div class="detail-item">
            <div>npm install cube-ui --save、修改package.json并安装依赖、修改.babelrc、修改webpack配置</div>
            <div>
                <a href="https://didi.github.io/cube-ui/#/zh-CN" target="_blank">API</a>
            </div>
        </div>

        <h3>使用示例</h3>
        <div class="detail-item">
            <cube-button @click="showDialog">show dialog</cube-button>
        </div>

        <div class="detail-item">
            <cube-button icon="cubeic-right">Button With Icon</cube-button>

            <cube-checkbox v-model="checked">
                Checkbox
            </cube-checkbox>

            <cube-loading :size="40"></cube-loading>

            <cube-popup type="my-popup" ref="myPopup">
                My Popup Content 1
            </cube-popup>
            <cube-button @click="showPopup('myPopup')">
                Show Popup
            </cube-button>
        </div>

        <div class="detail-item">
            <cube-button @click="showPicker">Picker</cube-button>

        </div>

        <div style="position: relative;">
            <cube-slide @change="changePage">
                <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
                    <a :href="item.url">
                        <img :src="item.image">
                    </a>
                </cube-slide-item>
            </cube-slide>
        </div>


        <div>
            <el-button type="primary" @click="goBack()">返回列表</el-button>
        </div>
    </div>
</template>

<script>
    const col1Data = [{ text: '剧毒', value: '剧毒'}, { text: '蚂蚁', value: '蚂蚁' }, { text: '幽鬼', value: '幽鬼' }]
    export default {
        data() {
            return {
                checked:true,
                items: [
                    {
                        url: 'http://www.didichuxing.com/',
                        image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
                    }, {
                        url: 'http://www.didichuxing.com/',
                        image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
                    }, {
                        url: 'http://www.didichuxing.com/',
                        image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
                    }
                ]
            }
        },
        methods: {
            showDialog() {
                this.$createDialog({
                    type: 'alert',
                    title: 'Alert',
                    content: 'dialog content'
                }).show()
            },
            showPopup(refId) {
                const component = this.$refs[refId]
                component.show()
                setTimeout(() => {
                    component.hide()
                }, 1000)
            },
            showPicker () {
                this.picker.show()
            },
            changePage(current) {
                console.log('当前轮播图序号为:' + current)
            },
            clickHandle(item, index) {
                console.log(item, index)
            },
            goBack: function () {
                this.$router.push({path: '/List'});
            }
        },
        mounted () {
            this.picker = this.$createPicker({
                title: 'Picker选择器-单列',
                data: [col1Data],
                onSelect: (selectedText, selectedIndex) => {
                    this.$createDialog({
                        type: 'warn',
                        content: `选中的内容是：${selectedText.join(',')} <br/> 选中的索引是 ${selectedIndex.join(',')}`,
                        icon: 'cubeic-alert'
                    }).show()
                },
                onCancel: () => {
                    this.$createToast({
                        type: 'correct',
                        txt: 'Picker canceled',
                        time: 1000
                    }).show()
                }
            })
        },
    }
</script>

<style scoped lang="scss">
    @import "../../styles/common.scss";
</style>
