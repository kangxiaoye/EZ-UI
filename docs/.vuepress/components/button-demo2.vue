<template>
    <div class="button-demo2">
        <h2>按钮组</h2>
        <h4 class="see">预览</h4>
        <ez-button-group>
            <ez-button>默认按钮</ez-button>
            <ez-button>默认按钮</ez-button>
            <ez-button>默认按钮</ez-button>
        </ez-button-group>
        <h4 class="use">使用方法</h4>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import Button from '../../../src/button'
    import ButtonGroup from '../../../src/button-group'
    export default {
        components: {
            'ez-button': Button,
            'ez-button-group': ButtonGroup
        },
        data () {
            return {
                loading1: true,
                loading2: false,
                content: `
                  <ez-button-group>
              <ez-button>默认按钮</ez-button>
              <ez-button>默认按钮</ez-button>
              <ez-button>默认按钮</ez-button>
            </ez-button-group>
              `.replace(/^ {8}/gm, '').trim()
            }
        }
    }
</script>
<style >
    .button-demo2 {
        margin-top: 30px;
    }
    .see {
        margin-bottom: 20px;
    }
    .use {
        margin: 20px 0;
    }
</style>
