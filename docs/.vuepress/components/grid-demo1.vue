<template>
    <div style="width: 100%; padding-top: 16px;">
        <h2>24格网格</h2>
        <p>
            <strong>预览</strong>
        </p>
        <ez-row class="demoRow">
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
        <ez-row class="demoRow">
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
        <ez-row class="demoRow">
            <ez-col span="4">
                <div class="demoCol">4</div>
            </ez-col>
            <ez-col span="4">
                <div class="demoCol">4</div>
            </ez-col>
            <ez-col span="4">
                <div class="demoCol">4</div>
            </ez-col>
            <ez-col span="4">
                <div class="demoCol">4</div>
            </ez-col>
            <ez-col span="4">
                <div class="demoCol">4</div>
            </ez-col>
            <ez-col span="4">
                <div class="demoCol">4</div>
            </ez-col>
        </ez-row>
        <ez-row class="demoRow">
            <ez-col span="2">
                <div class="demoCol">2</div>
            </ez-col>
            <ez-col span="2">
                <div class="demoCol">2</div>
            </ez-col>
            <ez-col span="2">
                <div class="demoCol">2</div>
            </ez-col>
            <ez-col span="2">
                <div class="demoCol">2</div>
            </ez-col>
            <ez-col span="2">
                <div class="demoCol">2</div>
            </ez-col>
            <ez-col span="2">
                <div class="demoCol">2</div>
            </ez-col>
            <ez-col span="2">
                <div class="demoCol">2</div>
            </ez-col>
            <ez-col span="2">
                <div class="demoCol">2</div>
            </ez-col>
            <ez-col span="2">
                <div class="demoCol">2</div>
            </ez-col>
            <ez-col span="2">
                <div class="demoCol">2</div>
            </ez-col>
            <ez-col span="2">
                <div class="demoCol">2</div>
            </ez-col>
            <ez-col span="2">
                <div class="demoCol">2</div>
            </ez-col>
        </ez-row>

        <p>
            <strong>使用方法</strong>
        </p>
        <p>
            <strong>选项：span </strong><br>
            网格系统中的列是指 1 到 24 的值来表示其跨越的范围。通过设置 <span class="light">span</span> 属性来实现。
            例如：三个等宽的列可以使用 <span class="light">&lt ez-col span="8"&gt列&lt/ez-col&gt </span> 来创建其中一个，其余两个再复制两份。
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<style >
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
          <ez-row class="demoRow">
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

  <ez-row class="demoRow">
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

  <ez-row class="demoRow">
            <ez-col span="4">
                <div class="demoCol">4</div>
            </ez-col>
            <ez-col span="4">
                <div class="demoCol">4</div>
            </ez-col>
            <ez-col span="4">
                <div class="demoCol">4</div>
            </ez-col>
            <ez-col span="4">
                <div class="demoCol">4</div>
            </ez-col>
            <ez-col span="4">
                <div class="demoCol">4</div>
            </ez-col>
            <ez-col span="4">
                <div class="demoCol">4</div>
            </ez-col>
  </ez-row>

  <ez-row class="demoRow">
            <ez-col span="2">
                <div class="demoCol">2</div>
            </ez-col>
            <ez-col span="2">
                <div class="demoCol">2</div>
            </ez-col>
            <ez-col span="2">
                <div class="demoCol">2</div>
            </ez-col>
            <ez-col span="2">
                <div class="demoCol">2</div>
            </ez-col>
            <ez-col span="2">
                <div class="demoCol">2</div>
            </ez-col>
            <ez-col span="2">
                <div class="demoCol">2</div>
            </ez-col>
            <ez-col span="2">
                <div class="demoCol">2</div>
            </ez-col>
            <ez-col span="2">
                <div class="demoCol">2</div>
            </ez-col>
            <ez-col span="2">
                <div class="demoCol">2</div>
            </ez-col>
            <ez-col span="2">
                <div class="demoCol">2</div>
            </ez-col>
            <ez-col span="2">
                <div class="demoCol">2</div>
            </ez-col>
            <ez-col span="2">
                <div class="demoCol">2</div>
            </ez-col>
  </ez-row>
      `.replace(/^ {8}/gm, '').trim()
            }
        }
    }
</script>
