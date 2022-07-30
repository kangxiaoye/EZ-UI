<template>
    <div style="padding-top: 16px;">
        <p>
            <strong>预览</strong>
        </p>

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

    <ez-input v-model="xxx"></ez-input>
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
