<template>
    <div class="headerWrap">
      <slot name='left'></slot>
      <slot name='center'></slot>
      <slot name='right'></slot>
      <span>{{txt}}</span>
    </div>
</template>

<script>
    export default {
        name: "header",
      props:["txt"]
    }
</script>

<style scoped>

</style>
