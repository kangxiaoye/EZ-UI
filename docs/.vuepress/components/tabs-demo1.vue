<template>
    <div style="padding-top: 16px;">
        <h2>简单用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <ez-tabs :selected.sync="selectedTab">
            <ez-tabs-head>
                <ez-tabs-item name='1'>
                    <ez-icon name="settings"></ez-icon>
                    Tab1
                </ez-tabs-item>
                <ez-tabs-item name='2'>Tab2</ez-tabs-item>
                <ez-tabs-item name='3'>Tab3</ez-tabs-item>
                <ez-tabs-item name='4' disabled>Tab4</ez-tabs-item>
            </ez-tabs-head>
            <ez-tabs-body>
                <ez-tabs-pane name='1'>内容1</ez-tabs-pane>
                <ez-tabs-pane name='2'>内容2</ez-tabs-pane>
                <ez-tabs-pane name='3'>内容3</ez-tabs-pane>
                <ez-tabs-pane name='4'>内容4</ez-tabs-pane>
            </ez-tabs-body>
        </ez-tabs>

        <p>
            <strong>使用方法</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import GTabs from '../../../src/tabs'
    import GTabsBody from '../../../src/tabs-body'
    import GTabsHead from '../../../src/tabs-head'
    import GTabsItem from '../../../src/tabs-item'
    import GTabsPane from '../../../src/tabs-pane'
    import EZIcon from '../../../src/icon'
    export default {
        components: {
            'ez-tabs': GTabs,
            'ez-tabs-body': GTabsBody,
            'ez-tabs-head': GTabsHead,
            'ez-tabs-item': GTabsItem,
            'ez-tabs-pane': GTabsPane,
            'ez-icon': EZIcon
        },
        data () {
            return {
                selectedTab: '1',
                content: `
          data:{
                selectedTab: '1'
      }
    <ez-tabs :selected.sync="selectedTab">
              <ez-tabs-head>
                <ez-tabs-item name='1'>
                    <ez-icon name="settings"></ez-icon>
                    Tab1
                </ez-tabs-item>
                <ez-tabs-item name='2'>Tab2</ez-tabs-item>
                <ez-tabs-item name='3'>Tab3</ez-tabs-item>
                <ez-tabs-item name='4' disabled>Tab4</ez-tabs-item>
              </ez-tabs-head>
              <ez-tabs-body>
                <ez-tabs-pane name='1'>内容1</ez-tabs-pane>
                <ez-tabs-pane name='2'>内容2</ez-tabs-pane>
                <ez-tabs-pane name='3'>内容3</ez-tabs-pane>
                <ez-tabs-pane name='4'>内容4</ez-tabs-pane>
              </ez-tabs-body>
    </ez-tabs>
      `.replace(/^ {8}/gm, '').trim()
            }
        }
    }
</script>
