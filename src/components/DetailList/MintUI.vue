<template>
    <div class="detail-container">
        <h1>Mint-UI</h1>
        <h3>使用方法</h3>
        <div class="detail-item">
            <div>npm install mint-ui --save，然后在main.js中引入</div>
            <div>
                <a href="http://mint-ui.github.io/#!/zh-cn" target="_blank">API</a>
            </div>
        </div>

        <h3>使用示例</h3>
        <div class="detail-item">
            <el-button @click="toast">点击弹出toast</el-button>
            <el-button @click="alert">打开alert提示框</el-button>

            <mt-switch v-model="value">Switch</mt-switch>

            <mt-field label="用户名" placeholder="请输入用户名" v-model="field"></mt-field>
            <mt-field label="email" placeholder="Input email" type="email" v-model="field"></mt-field>
            <mt-field label="password" placeholder="Input password" type="password" v-model="field"></mt-field>
            <mt-field label="phone" placeholder="Input tel" type="tel" v-model="field"></mt-field>
            <mt-field label="website" placeholder="Input website" type="url" v-model="field"></mt-field>
            <mt-field label="number" placeholder="Input number" type="number" v-model="field"></mt-field>
            <mt-field label="birthday" placeholder="Input birthday" type="date" v-model="field"></mt-field>
            <mt-field label="introduction" placeholder="introduction" type="textarea" rows="4"
                      v-model="field"></mt-field>

            <mt-badge size="small">30</mt-badge>
            <mt-badge size="normal" type="error">10</mt-badge>
            <mt-badge size="large" type="success">10</mt-badge>

            <mt-range
                v-model="rangeValue"
                :min="10"
                :max="90"
                :step="10"
                :bar-height="5">
            </mt-range>

            <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>

            <mt-search
                v-model="search"
                cancel-text="取消"
                placeholder="搜索" style="height: 200px;">
            </mt-search>
        </div>

        <div style="height: 200px;background-color: deepskyblue">
            <mt-swipe :auto="4000">
                <mt-swipe-item>1</mt-swipe-item>
                <mt-swipe-item>2</mt-swipe-item>
                <mt-swipe-item>3</mt-swipe-item>
            </mt-swipe>
        </div>

        <div>
            <el-button type="primary" @click="goBack()">返回列表</el-button>
        </div>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';

    import Vue from 'vue'
    import {Swipe, SwipeItem} from 'mint-ui';
    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);

    import {MessageBox} from 'mint-ui';

    import {Actionsheet} from 'mint-ui';
    Vue.component(Actionsheet.name, Actionsheet);

    import {Switch} from 'mint-ui';
    Vue.component(Switch.name, Switch);

    import {Field} from 'mint-ui';
    Vue.component(Field.name, Field);

    import {Badge} from 'mint-ui';
    Vue.component(Badge.name, Badge);

    import { Range } from 'mint-ui';
    Vue.component(Range.name, Range);

    import { Picker } from 'mint-ui';
    Vue.component(Picker.name, Picker);

    import { Search } from 'mint-ui';
    Vue.component(Search.name, Search);

    export default {
        data() {
            return {
                value: true,
                field: '',
                rangeValue: 20,
                search:'',
                slots: [
                    {
                        flex: 1,
                        values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
                        className: 'slot1',
                        textAlign: 'right'
                    }, {
                        divider: true,
                        content: '-',
                        className: 'slot2'
                    }, {
                        flex: 1,
                        values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
                        className: 'slot3',
                        textAlign: 'left'
                    }
                ],
            }
        },
        methods: {
            toast: function () {
                Toast('提示信息');
            },
            alert() {
                MessageBox({
                    title: '提示',
                    message: 'Are you sure?',
                    showCancelButton: true
                });
            },
            onValuesChange(picker, values) {
                if (values[0] > values[1]) {
                    picker.setSlotValue(1, values[0]);
                }
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
