# vue-components

> 这是一个vue组件库，收集在vue中适用的实用组件

## 访问链接
[https://gyoungyy.github.io/vue-components-site/#/index](https://gyoungyy.github.io/vue-components-site/#/index)

## 开发
```bash
    # 克隆项目
    git clone git@github.com:GyoungYY/vue-components.git

    # 安装依赖
    npm install
    //or # 建议不要用cnpm  安装有各种诡异的bug 可以通过如下操作解决npm速度慢的问题
    npm install --registry=https://registry.npm.taobao.org

    # 本地开发 开启服务
    npm run dev
```


## 已录入组件
| 组件名      | 组件说明          |
| :----:     | :---------:      |
| Element    | Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库 |
| Sass       | 世界上最成熟、最稳定、最强大的专业级CSS扩展语言！|
| Bootstrap  | 简洁、直观、强悍的前端开发框架，让web开发更迅速、简单。 |
| vue-cropper | 一个优雅的图片裁剪插件 |
| Less       | Less 是一门 CSS 预处理语言，它扩展了 CSS 语言，增加了变量、Mixin、函数等特性，使 CSS 更易维护和扩展。 |
| xlsx       | js解析Excel数据 |
| Mint-UI | 基于 Vue.js 的移动端组件库 |
| cube-ui  | cube-ui 是滴滴开源的基于 Vue.js 实现的精致移动端组件库 |
| vue-quill-editor  | 基于 Quill、适用于 Vue 的富文本编辑器，支持服务端渲染和单页应用 |


## 效果图

#### 表格陈列所有组件

![表格陈列所有组件](https://github.com/GyoungYY/vue-components/blob/master/src/assets/index.png)

#### 带图片列表

![带图片列表](https://github.com/GyoungYY/vue-components/blob/master/src/assets/list.png)<br />

#### 组件使用详情

![组件使用详情](https://github.com/GyoungYY/vue-components/blob/master/src/assets/detail.png)<br />


## 如何在项目中增加一个component?
### 只需要在项目中5个地方更改
1. 在组件目录页面(src/components/Index.vue)的表格中添加一条你要增加的组件信息；
2. 在组件列表页面(src/components/List.vue)的列表中添加一条，样式参考其他组件；
3. 在路由文件中(src/router/index.js)中增加你的页面路由信息；
4. 添加你组件的详情页面(src/components/DetailList);
5. 在README.md文件中已录入组件处添加你增加的组件信息;
