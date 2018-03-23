import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@component/index'
import ActivityList from '@component/activity_list'
import Goods from '@component/goods'
import Cart from '@component/cart'
import Order from '@component/order'
import User from '@component/user'

import awesomeSwiper from '@component/test/vue-awesome-swiper'

Vue.use(Router)

export default new Router({
  routes: [
    /*{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },*/
    {
      path: '/',
      /*name: 'index',
      component: Index*/ //这样写会有警告，因为下面已经配置过一个index了，所以改成 redirect
      redirect: {
        name: 'index'
      }
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },

    {
      path:'/awesome-swiper',
      name:'awesome-swiper',
      component:awesomeSwiper
    },
    {
      path:'/activity-list',
      name:'activity-list',
      component:ActivityList
    },
    {
      path:'/goods',
      name:'goods',
      component:Goods
    },
    {
      path:'/cart',
      name:'cart',
      component:Cart
    },
    {
      path:'/order',
      name:'order',
      component:Order
    },
    {
      path:'/user',
      name:'user',
      component:User
    }
  ]
})
