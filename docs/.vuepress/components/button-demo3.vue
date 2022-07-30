<template>
    <div class="button-demos">
        <ez-button>默认按钮</ez-button>
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
            }
        }
    }
</script>
<style>
    .button-demos {
        margin-top: 20px;
    }
</style>
