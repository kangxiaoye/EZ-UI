<template>
    <div style="padding-top: 16px;">
        <h2>简单用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <ez-collapse :selected.sync="selected">
            <ez-collapse-item title="标题1" name="1">1</ez-collapse-item>
            <ez-collapse-item title="标题2" name="2">2</ez-collapse-item>
            <ez-collapse-item title="标题3" name="3">3</ez-collapse-item>
        </ez-collapse>

        <p>
            <strong>使用方法</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>

    import Collapse from '../../../src/collapse'
    import CollapseItem from '../../../src/collapse-item'
    export default {
        components: {
            'ez-collapse': Collapse,
            'ez-collapse-item': CollapseItem,
        },
        data () {
            return {
                selected : ['1'],
                content: `
          data:{
                selected: ['1']
    }
    <ez-collapse :selected.sync="selected">
            <ez-collapse-item title="标题1" name="1">1</ez-collapse-item>
            <ez-collapse-item title="标题2" name="2">2</ez-collapse-item>
            <ez-collapse-item title="标题3" name="3">3</ez-collapse-item>
    </ez-collapse>
      `.replace(/^ {8}/gm, '').trim()
            }
        }
    }
</script>
