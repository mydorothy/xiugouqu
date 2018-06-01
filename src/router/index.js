import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@component/index'
import search from '@component/modules/search'
import ActivityList from '@component/activity_list'
import Goods from '@component/goods'
import Cart from '@component/cart'
import Order from '@component/order'
import User from '@component/user'
import Login from '@component/login'
import Register from '@component/register'

import awesomeSwiper from '@component/test/vue-awesome-swiper'

Vue.use(Router)

export default new Router({
  mode:'history',
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
        name: 'index',
        title:'商城首页',
      }
    },
    {
      path: '/index',
      name: 'index',
      title:'商城首页',
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
      path:'/goods:goodsID',
      name:'goods',
      title:'商品详情页',
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
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/register',
      name:'register',
      component:Register
    }
  ]
})
