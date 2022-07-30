<template>
    <div style="padding-top: 16px;">
        <h2>布局</h2>
        <p>
            <strong>预览</strong>
        </p>

        <ez-layout style="color: white; overflow:hidden; margin-bottom:50px;">
            <ez-sider style=" background:#6ecca1; width:200px; color: black;">
                sider
            </ez-sider>
            <ez-layout>
                <ez-header style="height: 50px; background:#3eaf7c;">
                    header
                </ez-header>
                <ez-content class="cn">
                    content
                </ez-content>
                <ez-footer style="height: 50px; background:#3eaf7c;">
                    footer
                </ez-footer>
            </ez-layout>
        </ez-layout>
        <p>
            <strong>使用方法</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<style scoped>
    * {
        box-sizing: border-box;
    }
    .cn {
        width: 100%;
        height: 100px;
        background:#ccedde;
        padding: 0;
    }
</style>
<script>
    import GLayout from '../../../src/layout'
    import GHeader from '../../../src/header'
    import GFooter from '../../../src/footer'
    import GContent from '../../../src/content'
    import GSider from '../../../src/sider'
    export default {
        components: {
            'ez-layout': GLayout,
            'ez-header': GHeader,
            'ez-footer': GFooter,
            'ez-content': GContent,
            'ez-sider': GSider},
        data () {
            return {
                content: `
          <ez-layout style="color: white; overflow:hidden; margin-bottom:50px;">
              <ez-sider style=" background:#6ecca1; width:200px; color: black;">
                  sider
              </ez-sider>
              <ez-layout>
                  <ez-header style="height: 50px; background:#3eaf7c;">
                      header
                  </ez-header>
                  <ez-content style="height: 100px; background:#ccedde;">
                      content
                  </ez-content>
                  <ez-footer style="height: 50px; background:#3eaf7c;">
                      footer
                  </ez-footer>
              </ez-layout>
            </ez-layout>
      `.replace(/^ {8}/gm, '').trim()
            }
        }
    }
</script>
