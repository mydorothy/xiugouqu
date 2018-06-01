
<template>
  <div class="user">
    <section class="user-info">
      <img :src="user.userimg_url" alt="">
      <div class="dd">
        <p v-show="user">欢迎您 {{user.userID}}</p>
        <router-link to="/login" v-show="!user">
          <button class="btn-login">立即登录</button>
          <!--<mt-button type="default btn-login">立即登录</mt-button>-->
        </router-link>
      </div>
    </section>
    <div class="order">
      <div class="border-b-1px">
        <mt-cell title="我的订单" label="" is-link>

        </mt-cell>
      </div>
      <ul>
        <li>
          <p class="iconfont icon-daifukuan"></p>
          <span>待付款</span>
        </li>
        <li>
          <p class="iconfont icon-daifahuo"></p>
          <span>待发货</span>
        </li>
        <li>
          <p class="iconfont icon-daishouhuoicon"></p>
          <span>待收货</span>
        </li>
        <li>
          <p class="iconfont icon-yiwancheng"></p>
          <span>已完成</span>
        </li>
      </ul>
    </div>
    <ul class="list">
      <li class="border-b-1px">
        <mt-cell title="每日签到" label="" is-link>
          <!--<span>icon 是图片</span>-->
          <span slot="icon" class="iconfont icon-qiandao"></span>
        </mt-cell>
      </li>
      <li class="border-b-1px">
        <mt-cell title="地址管理" label="" is-link>
          <span slot="icon" class="iconfont icon-dizhi"></span>
        </mt-cell>
      </li>
      <li class="border-b-1px">
        <mt-cell title="在线客服" label="" is-link>
          <span slot="icon" class="iconfont icon-2zaixiankefubai"></span>
        </mt-cell>
      </li>
      <li>
        <mt-cell title="设置" label="" is-link>
          <span slot="icon" class="iconfont icon-shezhi"></span>
        </mt-cell>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:'user',
    data() {
      return {
        user:''
      }
    },
    mounted() {
      this.$store.commit('upTabbarState',true)//显示底部 tabbar
      //获取用户cookies信息
      this.user = this.$store.state.userInfo;
      if(!this.user) {
        let cookieUser = localStorage.getItem('user');
        console.log('cookie',cookieUser)
        if(cookieUser) {
          this.$store.commit('upUserInfo',JSON.parse(cookieUser))
          this.user = this.$store.state.userInfo;
        }
      }
      if(this.user) {//已登录，获取登录信息
        this.https.getuser({userID:this.user.userID}).then((data) => {
          console.log('11',data);
          if(data.data.construct == Object) {//是一个对象时 登录成功
            this.user = data.data;
          }
        },(err) => {
          console.error(err);
        });
      }

    }
  }
</script>

<style lang="scss" scoped>
  @import "../css/user.scss";

</style>
