import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '../pages/home'
import Video from '../pages/video'
import Broadcast from '../pages/broadcast'
import Center from '../pages/center'
import Group from '../pages/group'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/video',
      component: Video
    },
    {
      path: '/broadcast',
      component: Broadcast
    },
    {
      path: '/group',
      component: Group
    },
    {
      path: '/center',
      component: Center
    }
  ]
})
