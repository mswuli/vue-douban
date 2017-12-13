<template>
  <div class="wrapper">
    <ul class="content">
      <li>...</li>
      <li>...</li>
      <li>...</li>
    </ul>
    <!-- you can put some other DOMs here, it won't affect the scrolling -->
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

    export default {
        name: "scroll",
        mounted:function(){
          const wrapper = document.querySelector('.wrapper')
          const scroll = new BScroll(wrapper)
        }
    }
</script>

<style scoped>
.wrapper{ width: 100%; height: 300px; background: skyblue}
.wrapper .content li{margin: 0 auto; width: 80%; height: 1500px; background: pink}
</style>
