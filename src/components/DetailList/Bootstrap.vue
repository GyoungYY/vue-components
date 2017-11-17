<template>
    <div class="detail-container">
        <h1>Bootstrap</h1>
        <h3>使用方法</h3>
        <div class="detail-item">
            <div>npm install jquery --save、npm install bootstrap --save，在webpack.base.conf.js中配置， 然后在main.js中引入</div>
            <div>
                <a href="http://blog.csdn.net/wild46cat/article/details/77662555" target="_blank">参考博客</a>
                <a href="http://www.bootcss.com/" target="_blank">API</a>
            </div>
        </div>

        <h3>使用示例</h3>
        <div class="detail-item">
            <div style="margin: 10px;">
                <ul class="nav nav-pills">
                    <li role="presentation" class="active"><a href="#">Home</a></li>
                    <li role="presentation"><a href="#">Profile</a></li>
                    <li role="presentation"><a href="#">Messages</a></li>
                </ul>
            </div>

            <div style="margin: 10px;">
                <span class="label label-default">Default</span>
                <span class="label label-primary">Primary</span>
                <span class="label label-success">Success</span>
                <span class="label label-info">Info</span>
                <span class="label label-warning">Warning</span>
                <span class="label label-danger">Danger</span>
            </div>

            <div style="margin: 10px;">
                <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                         aria-valuemax="100" style="width: 60%;">
                        60%
                    </div>
                </div>
            </div>

            <div style="margin: 10px;">
                <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="left"
                        title="Tooltip on left">Tooltip on left
                </button>
                <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="top"
                        title="Tooltip on top">Tooltip on top
                </button>
                <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="bottom"
                        title="Tooltip on bottom">Tooltip on bottom
                </button>
                <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="right"
                        title="Tooltip on right">Tooltip on right
                </button>
            </div>

            <div style="margin: 10px;">
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
                    Launch demo modal
                </button>

                <!-- Modal -->
                <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                    aria-hidden="true">&times;</span></button>
                                <h4 class="modal-title" id="myModalLabel">Modal title</h4>
                            </div>
                            <div class="modal-body">
                                modal-bodymodal-bodymodal-bodymodal-bodymodal-body
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <el-button type="primary" @click="goBack()">返回列表</el-button>
        </div>
    </div>
</template>

<script>
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
    export default {
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
