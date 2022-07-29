<template>
    <div class="button-demos">
        <h2>预览</h2>
        <ez-button>默认按钮</ez-button>
        <ez-button icon="settings">图标</ez-button>
        <ez-button icon="settings" icon-position="right">图标靠右</ez-button>
        <ez-button :loading="loading1" @click="loading1 = !loading1">loading切换</ez-button>
        <ez-button icon="settings" :loading="loading2" @click="loading2 = !loading2">图标切换</ez-button>
        <ez-button disabled>禁用</ez-button>
        <h2>使用方法</h2>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import Button from '../../../src/button'
    export default {
        components: {
            'ez-button': Button
        },
        data () {
            return {
                loading1: true,
                loading2: false,
                content: `
                  <ez-button>默认按钮</ez-button>
            <ez-button icon="settings">图标</ez-button>
            <ez-button icon="settings" icon-position="right">图标靠右</ez-button>
            <ez-button :loading="loading1" @click="loading1 = !loading1">loading切换</ez-button>
            <ez-button icon="settings" :loading="loading2" @click="loading2 = !loading2">
            图标切换
            </ez-button>
            <ez-button disabled>禁用</ez-button>
              `.replace(/^ {8}/gm, '').trim()
            }
        }
    }
</script>
<style>
    .button-demos {
        margin-top: 16px;
    }
</style>
