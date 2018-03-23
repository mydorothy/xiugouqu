<template>
  <div id="app">
    <headers></headers>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="index">
        <img slot="icon" src="./images/ruyi_logo_patient.png" alt="">
        首页
      </mt-tab-item>
      <mt-tab-item id="cart">
        <img slot="icon" src="./images/ruyi_logo_patient.png" alt="">
        购物车
      </mt-tab-item>
      <mt-tab-item id="order">
        <img slot="icon" src="./images/ruyi_logo_patient.png" alt="">
        订单
      </mt-tab-item>
      <mt-tab-item id="user">
        <img slot="icon" src="./images/ruyi_logo_patient.png" alt="">
        我的
      </mt-tab-item>
    </mt-tabbar>
    <router-view/>
    <footers></footers>
  </div>
</template>

<script>
  import heads from '@component/common/header'
  import foots from '@component/common/footer'

  import {Tabbar,TabItem} from 'mint-ui'
export default {
  name: 'app',
  components: {
    headers: heads,
    footers:foots,
    "mt-tabbar": Tabbar,
    "mt-tab-item":TabItem
  },
  data() {
    return {
      selected: this.$route.name
    }
  },
  watch: {
    selected:function(val,oldval) {// 点击底部bar时，会触发
      //$route为当前router跳转对象里面可以获取name、path、query、params等
      //$router为VueRouter实例，想要导航到不同URL，则使用$router.push方法
      //返回上一个history也是使用$router.go(-1)方法$router.back(-1)
      console.log(this.$router,this.$route.name,location);
      this.$router.push({'name':this.selected,params:'{id:1}'})
    },
    '$route':function() {// 监听路由发生变化
      this.selected = this.$route.name; // 解决browser返回时底部bar样式不变问题
    }
  },
  mounted() {
    window.addEventListener('popstate',function() {// 原生浏览器前进后退事件
      //alert('3');
    })
    /*window.onbeforeunload = function() { // 网页结束前，会弹框让人确认一下是不是要离开这个页面
      return false;
    }*/
  }
}
</script>

<style lang="scss">
  @import "css/common/common.scss";
  @import "css/common/base.scss";
  @import "assets/css/my-mint.scss";
</style>
