<template>
  <div class="itemWrap" @click="fn()">
    <!--<slot name="normalImg"></slot>-->
    <!--<slot name="activeImg"></slot>-->
    <p>{{txt}}</p>
  </div>
</template>

<script>

    export default {
        name: "item",
        props:["txt","sel","mark"],
      computed:{
        bol: function () {
          if(this.mark==this.sel){
            return true;
          }
          return false;
        }
      },
      methods:{
          fn:function () {
            this.$emit("c",this.mark);
            this.$router.push('/'+this.mark)
          }
      }
    }
</script>

<style scoped>
.itemWrap{ width: 20%; height: 64px; line-height: 64px; float: left;}
</style>
