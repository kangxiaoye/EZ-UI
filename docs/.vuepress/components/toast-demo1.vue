<template>
    <div style="padding-top: 16px;">
        <h2>预览</h2>

        <div>

            <ez-button @click="auto">会自动关闭</ez-button>
            <ez-button @click="auto">点击按钮才关闭</ez-button>
            <ez-button @click="auto">支持 HTML 语法</ez-button>
            <br>
            <br>
        </div>
        <div>
            <ez-button @click="$toast('点击弹出提示', {position:'top'})" >上方弹出</ez-button>
            <ez-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</ez-button>
            <ez-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</ez-button>
            <br><br>
            <ez-button @click="$toast('点击弹出提示', {position:'top'})" >设置z-index</ez-button>
        </div>

        <p>
            <strong>使用方法</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<style>
    .gulu-toast {
        z-index: 30 !important;
    }
</style>
<style scoped>
    * {
        box-sizing: border-box;
    }
    .cengji {
        z-index: 100;
    }
</style>
<script>
    import plugin from '../../../src/plugin'
    import GButton from '../../../src/button'
    import Vue from 'vue'

    Vue.use(plugin)
    export default {
        components: {
            'ez-button': GButton
        },
        data() {
            return {
                content: `
            <ez-button @click="auto">会自动关闭</ez-button>
            <ez-button @click="auto">点击按钮才关闭</ez-button>
            <ez-button @click="auto">支持 HTML 语法</ez-button>
    <ez-button @click="$toast('点击弹出提示')">上方弹出</ez-button>
    <ez-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</ez-button>
    <ez-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</ez-button>


      `.replace(/^ {8}/gm, '').trim()
            }
        },
        methods: {
            auto() {
                this.$toast('我是 toast 内容', {
                    autoClose: 5,
                    closeButton: {
                        text: '确定',
                        callback: () => {
                            console.log('回调的输出')
                        }
                    },
                    enableHTML: true
                })
            },
        }
    }
</script>
