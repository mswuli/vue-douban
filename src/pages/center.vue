<template>
  <div class="centerWrap">
    <MyHeader txt="个人中心"></MyHeader>
    <Cell title="提醒">
      <img src="../assets/images/ic_mine_notification.png" alt="" slot="leftImg" class="leftImg">
      <img src="../assets/images/ic_arrow_gray_small.png" alt="" slot="rightImg" class="rightImg">
    </Cell>
    <List></List>
  </div>
</template>

<script>
  import Banner from '../components/swiper'
  import MyHeader from '../components/header'
  import  List from '../components/list'
  import Cell from '../components/cell'
    export default {
        name: "center",
        components:{
          MyHeader,
          List,
          Cell
      }
    }
</script>

<style scoped>

</style>
