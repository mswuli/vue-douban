<template>
    <div class="groupWrap">
      <MyHeader txt="小组"></MyHeader>
      <input type="text" v-model="msg">
    </div>
</template>

<script>
  import MyHeader from '../components/header'
    export default {
        name: "group",
      data:function(){
          return {
            msg:"aaa"
          }
      },
      components:{
        MyHeader
      },
      created:function(){
        console.log('created...');
        console.log("el:"+this.$el);//还未挂载
        console.log("data:"+this.$data);
        console.log("msg:"+this.msg);
        //el没有创建，data,msg已经创建
      },
      beforeUpdate:function(){
        console.log('beforeUpdate...');
        console.log("el:"+this.$el);
        console.log("data:"+this.$data);
        console.log("msg:"+this.msg);
        //数据发生变化的时候才会执行，如在控制台输入vm.msg="world"
      },
      updated:function(){
        console.log('update...');
        console.log("el:"+this.$el);
        console.log("data:"+this.$data);
        console.log("msg:"+this.msg);
        //数据发生变化的时候才会执行，如在控制台输入vm.msg="world"
        }
        //destroy()在实例销毁时执行，销毁后，其身上所有的数据和方法都会销毁，不会生效})
      }
</script>

<style scoped>

</style>
