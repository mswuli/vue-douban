<template>
  <div :class="[{cellWrap:true},{hot:bol}]">
      <span><slot name="leftImg"></slot></span>
            <span >{{title}}</span>
      <span><slot name="rightImg"></slot></span>
  </div>
</template>
<script>
  export default {
    props:{
      title:{
        type:String,
        default:''
      },
      bol:{
        type:Boolean,
        default:false
      }
    }
  }
</script>
<style>
  .cellWrap{height: 40px; line-height: 40px;
  position: relative;padding-left: 25px;}
  .cellWrap img{position: absolute;width: 25px;top: 6px;}
  .leftImg{left: 0;}
  .rightImg{ right: 10px;}
  .hot{color: orange;}
  .hot:before{
    content:''; width: 5px; height: 20px;
    background: orange;
    position: absolute; left: 0;top:8px;bottom: 0;
  }
</style>
