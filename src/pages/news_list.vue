<template>
  <div class="listWrap">
    <!--<div class="left">-->
    <!--<h4>《加勒比海盗》14年老粉给你带来所有菜单和深埋梗</h4>-->
    <!--<p>此影评送给那些不离不弃的老粉和船长</p>-->
    <!--<p class="author">作者：女神的秋裤</p>-->
    <!--</div>-->
    <!--<img src="../assets/images/banner/01.jpg" alt=""/>-->
    <div class="left">
      <h4>{{title}}</h4>
      <p>{{des}}</p>
      <p class="author">作者：{{author}}</p>
    </div>
    <slot name="banner"></slot>
  </div>
</template>
<script>
  export default{
    props:["title","des","author"]
  }
</script>
<style>
  .listWrap{  padding: 20px;  text-align: left;  height: 150px;  border-bottom: 1px solid #cccccc;  }
  .listWrap img{  width: 100px;  height: 100px;  float: right;  margin-top: 30px;  }
  .listWrap .left{  width: 60%;  float: left  }
  .listWrap p{  margin: 0;  color:#999;  font-size: 12px;  }
  .listWrap .author{  color: #ccc;  font-size: 12px;  }
</style>

