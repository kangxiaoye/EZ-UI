<template>
    <div>
        <ez-button>默认按钮</ez-button>
        <ez-button icon="settings">默认按钮</ez-button>
        <ez-button :loading="true">默认按钮</ez-button>
        <ez-button disabled>默认按钮</ez-button>

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
                content: `
          <ez-button>默认按钮</ez-button>
          <ez-button icon="settings">默认按钮</g-button>
          <ez-button :loading="true">默认按钮</g-button>
          <ez-button disabled>默认按钮</g-button>
      `.replace(/\t+| +/g, '').trim()
            }
        }
    }
</script>
