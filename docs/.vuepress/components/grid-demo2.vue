<template>
    <div style="padding-top: 16px;">
        <h2>设置 gutter</h2>
        <p>
            <strong>预览</strong>
        </p>
        <ez-row class="demoRow" gutter="10">
            <ez-col span="8">
                <div class="demoCol">8</div>
            </ez-col>
            <ez-col span="8">
                <div class="demoCol">8</div>
            </ez-col>
            <ez-col span="8">
                <div class="demoCol">8</div>
            </ez-col>
        </ez-row>
        <ez-row class="demoRow" gutter="10">
            <ez-col span="6">
                <div class="demoCol">6</div>
            </ez-col>
            <ez-col span="6">
                <div class="demoCol">6</div>
            </ez-col>
            <ez-col span="6">
                <div class="demoCol">6</div>
            </ez-col>
            <ez-col span="6">
                <div class="demoCol">6</div>
            </ez-col>
        </ez-row>

        <p>
            <strong>使用方法</strong>
        </p>
        <p>
            <strong>选项：gutter（排水沟；槽）</strong><br>
            通过给 <span class="light">Row</span> 设置 <span class="light">gutter</span> 属性, 可以让栅格有间隔。单位为 <span class="light">px</span> 。
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

    <ez-row class="demoRow" gutter="10">
              <ez-col span="8">
                  <div class="demoCol">8</div>
              </ez-col>
              <ez-col span="8">
                  <div class="demoCol">8</div>
              </ez-col>
              <ez-col span="8">
                  <div class="demoCol">8</div>
              </ez-col>
    </ez-row>

    <ez-row class="demoRow" gutter="10">
              <ez-col span="6">
                  <div class="demoCol">6</div>
              </ez-col>
              <ez-col span="6">
                  <div class="demoCol">6</div>
              </ez-col>
              <ez-col span="6">
                  <div class="demoCol">6</div>
              </ez-col>
              <ez-col span="6">
                  <div class="demoCol">6</div>
              </ez-col>
    </ez-row>
      `.replace(/^ {8}/gm, '').trim()
            }
        }
    }
</script>
