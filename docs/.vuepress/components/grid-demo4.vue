<template>
    <div style="padding-top: 16px;">
        <h2>设置排版</h2>
        <p>
            <strong>预览</strong>
        </p>
        <ez-row class="demoRow" align="left">
            <ez-col span="8">
                <div class="demoCol">left</div>
            </ez-col>
            <ez-col span="8" >
                <div class="demoCol">left</div>
            </ez-col>
        </ez-row>
        <ez-row class="demoRow" align="center">
            <ez-col span="8" >
                <div class="demoCol">center</div>
            </ez-col>
            <ez-col span="8" >
                <div class="demoCol">center</div>
            </ez-col>
        </ez-row>
        <ez-row class="demoRow" align="right">
            <ez-col span="8">
                <div class="demoCol">right</div>
            </ez-col>
            <ez-col span="8" >
                <div class="demoCol">right</div>
            </ez-col>
        </ez-row>

        <p>
            <strong>使用方法</strong>
        </p>
        <p>
            <strong>选项：align</strong><br>
            通过给 Row 设置 <span class="light">align</span> 属性, 可以定义其子组件在该节点里面的排版方式。
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<style scoped>
    * {
        box-sizing: border-box;
    }
    .demoRow{
        margin: 10px 0;
    }
    .demoCol {
        height: 50px;
        border: 1px solid #3eaf7c;
        background: #6ecca1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .light {
        color: #3eaf7c;
    }
</style>
<script>
    import GRow from '../../../src/row'
    import GCol from '../../../src/col'
    export default {
        components: {
            'ez-row': GRow,
            'ez-col': GCol
        },
        data () {
            return {
                content: `
          * {
              box-sizing: border-box;
      }

  <ez-row class="demoRow" align="left">
            <ez-col span="8">
                <div class="demoCol">left</div>
            </ez-col>
            <ez-col span="8" >
                <div class="demoCol">left</div>
            </ez-col>
  </ez-row>

  <ez-row class="demoRow" align="center">
            <ez-col span="8" >
                <div class="demoCol">center</div>
            </ez-col>
            <ez-col span="8" >
                <div class="demoCol">center</div>
            </ez-col>
  </ez-row>

  <ez-row class="demoRow" align="right">
            <ez-col span="8">
                <div class="demoCol">right</div>
            </ez-col>
            <ez-col span="8" >
                <div class="demoCol">right</div>
            </ez-col>
  </ez-row>
      `.replace(/^ {8}/gm, '').trim()
            }
        }
    }
</script>
