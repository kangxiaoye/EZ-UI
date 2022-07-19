<template>
    <svg class="iconpark-icon">
        <use :href="`#i-${name}`"></use>
    </svg>
</template>
<script>
    export default {
        props: ['name']
    }
</script>
<style lang="scss">
    .iconpark-icon {width: 1em; height: 1em; }
</style>
