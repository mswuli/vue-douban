<template>
  <div class="homeWrap">
    <MyHeader txt="首页"></MyHeader>
    <Banner swiperid='go' :paginationshow="true">
      <div slot='swiper-con' class='swiper-slide'>
        <img src='../assets/images/banner/01.jpg'/>
      </div>
      <div slot='swiper-con' class='swiper-slide'>
        <img src='../assets/images/banner/02.jpg'/>
      </div>
      <div slot='swiper-con' class='swiper-slide'>
        <img src='../assets/images/banner/03.jpg'/>
      </div>
    </Banner>
    <Cell title="热点" :bol="true"></Cell>
    <button @click="getUser()">获取用户列表</button>
    <ul v-for="item in users">
      {{item.index}}
      <li v-for="i in item.list">
        {{i.name}}
      </li>
    </ul>
    <News v-for="item in arr" :title="item.title" :des="item.des" :author="item.author">
      <img :src="item.src" alt="" slot="banner">
    </News>
  </div>
</template>

<script>
  import axios from 'axios';
  import MyHeader from '../components/header'
  import Banner from '../components/swiper'
  import News from '../pages/news'
  import { news ,userlist} from '../api/api';
  import Cell from '../components/cell'
    export default {
      name: "home",
      components:{
        MyHeader,
        Banner,
        News,
        Cell
      },
      data:function () {
        return {
          arr:[],
          users:[]
        }
      },
      created:function(){
        var This = this;
        news().then(function(res){
          This.arr = res
        })
        // var This = this;
        // axios.get('src/data/newslist.json')
        //   .then(function(response){//response就是返回的信息，response.data是 返回的数据
        //     //遍历response.data  v-for  ==>vue实例中定义的变量，所以在data中定义数组接收
        //     This.arr = response.data
        //   })
        //   .catch(function(){})
      },
      methods:{
        getUser:function () {
          let para = {};
          var This = this;
          userlist(para).then((data)=>{
            This.users = data
            console.log(This.users)
          })
        }
      }
    }

</script>

<style scoped>

</style>
