<template>
  <div class="tabbarWrap">
    <Item txt="首页" :sel="selected" mark="home" @c="getVal"></Item>
    <Item txt="书影音" :sel="selected" mark="broadcast" @c="getVal"></Item>
    <Item txt="广播" :sel="selected" mark="video"@c="getVal"></Item>
    <Item txt="小组" :sel="selected" mark="group" @c="getVal"></Item>
    <Item txt="我的" :sel="selected" mark="center" @c="getVal"></Item>
  </div>
</template>

<script>
  import Item from './item'
    export default {
        name: "navbar",
      data:function () {
        return {
          selected:"home"
        }
      },
      components:{
        Item
      },
      methods:{
        getVal:function(v){
          this.selected = v;
        }
      }
    }
</script>

<style scoped>
.tabbarWrap{ width:100%; position: fixed; bottom: 0; height: 64px;}
</style>
