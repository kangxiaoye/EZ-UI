<template>
    <div style="padding-top: 16px;">
        <h2>简单用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <ez-input class="bottom" value="默认"></ez-input>
        <ez-input class="bottom" disabled value="disabled"></ez-input>
        <ez-input class="bottom" readonly value="readonly"></ez-input>
        <ez-input class="bottom" error="错误信息" value="error"></ez-input>
        <br>
        <ez-input class="bottom" v-model="name"></ez-input>
        <br>
        <span>value:&nbsp;{{this.name}}</span>

        <p class="top">
            <strong>使用方法</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import GInput from '../../../src/input'
    export default {
        components: {
            'ez-input': GInput
        },
        data () {
            return {
                name: '双向绑定',
                selected: '1',
                content: `
    <ez-input value="默认"></ez-input>
    <ez-input disabled value="disabled"></ez-input>
    <ez-input readonly value="readonly"></ez-input>
    <ez-input error="错误信息" value="error"></ez-input>
    <br>
    <ez-input v-model="xxx"></ez-input>
    <br>
    <span>value:{{xxx}}</span>
      `.replace(/^ {8}/gm, '').trim()
            }
        }
    }
</script>
<style>
    .top {
        margin-top: 20px;
    }
    .bottom {
        margin-bottom: 10px;
    }
</style>
