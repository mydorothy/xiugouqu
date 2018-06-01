<template>
    <div class="register">
      <ul class="field">
        <li class="border-b-1px">
          <mt-field label="用户名" placeholder="请输入您的用户名" v-model="userID"></mt-field>
        </li>
        <li>
          <mt-field label="密码" placeholder="请输入您的密码" type="password" v-model="password"></mt-field>
        </li>
        <li class="select">
          <mt-radio
            title=" "
            v-model="selectAgreement"
            :options="['我已阅读并同意 《用户协议》']">
          </mt-radio>
        </li>
        <li class="btn-box">
          <mt-button type="default" :class="{disabled:btnDisabled}" size="large" @click="register">注册</mt-button>
        </li>

      </ul>
      <div class="a-register">
        <router-link to="/login">立即登录</router-link>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:'register',
    data() {
      return {
        userID:'',
        password:'',
        status:'register',//注册
        selectAgreement:'1'
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
    methods: {
      register() {
        if(this.selectAgreement == 0) {
          this.$messagebox.alert('请阅读用户协议！').then(action => {
          });
          return false;
        }
        //参数
        let data = {};
        data.userID = this.userID;
        data.password = this.password;
        data.status = this.status;
        this.https.userinfo(data).then((data) => {
          let datas = data.data;
          if(datas == 0) {
            this.$messagebox.alert('该用户名已经注册！').then(action => {
            });
          } else if(datas == 2) {
            this.$messagebox.alert('数据库出错，请稍后重试！').then(action => {
            });
          } else {
            //注册成功,跳转登录页面
            this.$route.go('/login');
          }
        },(err) => {
          console.error(err);
        })
      }
    },
    mounted() {

    }
  }
</script>

<style lang="scss">
  @import "../css/loginRegister.scss";
</style>
