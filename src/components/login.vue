<template>
    <div class="login">
      <div class="icon">
        <span class="iconfont icon-weixin"></span>
        <span class="iconfont icon-qq"></span>
      </div>
      <ul class="field">
        <li class="border-b-1px">
          <mt-field label="用户名" placeholder="请输入您的用户名" v-model="userID"></mt-field>
        </li>
        <li>
          <mt-field label="密码" placeholder="请输入您的密码" type="password" v-model="password"></mt-field>
        </li>
        <li class="btn-box">
          <mt-button type="default" :class="{disabled:btnDisabled}" size="large" @click="login">登录</mt-button>
        </li>
      </ul>
      <div class="a-register">
        <router-link to="/register">立即注册</router-link>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:'login',
    data() {
      return {
        userID:'',
        password:'',
        status:'login',//登录
      }
    },
    computed: {
      btnDisabled() {// 用户名输入值是否满足
        let userReg = /^[a-zA-Z0-9_]{6,16}$/;//用户名由6-16位字母，数字，下划线组成
        let passwordReg = /^\w{6,16}$/;//密码由6-16位的数字、字母、下划线组成
        if(this.userID.length >16) {
          this.$toast({
            message: '用户名由6-16位字母、数字、下划线组成',
            position: 'middle',
            duration: 1000
          });
          //bug todo 写成15后页面的input就不会随着userID的值不跟着变
          this.userID = this.userID.slice(0,15);
          console.log('截取后的值：',this.userID)
          return true;
        }
        if(this.password.length >16) {
          this.$toast({
            message: '密码由6-16位的数字、字母、下划线组成',
            position: 'middle',
            duration: 1000
          });
          return true;
        }
        if(!userReg.test(this.userID)) {
          return true;
        }
        if(!passwordReg.test(this.password)) {
          return true;
        }
        return false;
      }
    },
    methods:{
      login() {
        //参数
        let data = {};
        data.userID = this.userID;
        data.password = this.password;
        data.status = this.status;
        this.https.userinfo(data).then((data) => {
          let datas = data.data;
          console.log(datas);
          if(datas == 2) {
            this.$messagebox.alert('用户名或密码不正确！').then(action => {
            });
          } else if(datas == 0) {
            this.$messagebox.alert('用户名不存在！').then(action => {
            });
          } else {
            //登录成功 返回个人中心
            console.log('登录成功',datas);
            //保存 用户的登录信息
            this.$store.commit('upUserInfo',datas);
            localStorage.setItem('user',JSON.stringify(datas));
            this.$router.push('/user');
          }
        },(err) => {
          console.error(err);
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../css/loginRegister.scss";
</style>
