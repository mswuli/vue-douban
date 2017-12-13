<template>
    <div class="newsWrap">
        <div class="left">
          <h4>{{title}}</h4>
          <p>{{des}}</p>
          <p>作者：{{author}}</p>
        </div>
      <div class="right">
        <slot name="banner"></slot>
      </div>
    </div>
</template>

<script>
    export default {
        name: "news",
      props:["title","des","author"],
      created:function(){
      }
    }
</script>

<style scoped>
.newsWrap{ width: 100%; height: 150px; display: flex;}
.newsWrap .left{ flex: 2}
.newsWrap .right{ flex: 1}
.newsWrap .right img{ width: 100%;}
</style>
