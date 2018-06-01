
<template>
  <div class="floor-box cart">
    <ul class="list-box">
      <li v-for="item in cart" class="border-b-1px">
        <label class="select">
          <input type="checkbox" class="input" v-model="selectArr" :value="item.goodsID" @change="select"/>
          <span class="checkbox-core"></span>
        </label>
        <div class="img-box">
          <router-link :to="{name:'goods',params:{goodsID:item.goodsID}}">
            <div class="d">
              <img :src="item.goodsListImg" alt="">
            </div>
          </router-link>
        </div>
        <div class="content">
          <p class="substr substr-2">{{item.goodsName}}</p>
          <div class="num-box">
            <span class="price">{{item.price}}</span>
            <numHandle :num="item.number*1" :handChangeNum="handChangeNum" :subCart="subCart" :addCart="addCart"></numHandle>
          </div>
        </div>
      </li>
    </ul>
    <div class="toolbar cart-tool">
      <div class="select-all">
        <label class="select">
          <input type="checkbox" class="input" @change="allSelect" v-model="allSelectState" value="all"/>
          <span class="checkbox-core"></span>
        </label>
        全选
      </div>
      <div class="btn-box">
        <button class="btn" @click="createOrder">结算</button>
      </div>
      <div class="total">
        合计:
        <span class="price">￥150</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import numHandle from '@component/common/num_handle'
  export default {
    name:'cart',
    data() {
      return {
        userID:'',
        cart:[],
        selectArr:[],//被选中的商品id
        allSelectState: ''
      }
    },
    components:{
      numHandle
    },
    methods:{
      select(event) { //选择
        let target = event.target;
        if(target.checked == false) {//选择框 ，非全选状态
          this.allSelectState = '';
        } else {
          if(this.selectArr.length == this.cart.length) {//商品全部选择时
            this.allSelectState = 'all';
          }
        }
      },
      allSelect(event) {//全选按钮
        let target = event.target;
        if(target.checked == true) {//为true时，全选
          this.cart.forEach((val,index) => {
            this.selectArr.push(val.goodsID);
          });
        } else {
          this.selectArr = [];
        }
      },
      createOrder() {//去结算
        if(this.selectArr.length <= 0) {
          this.$toast('请选择需要结算的商品！');
          return false;
        }
        this.$messagebox.alert('去结算正在开发中！').then(action => {
        });
      },
      updatecar(number,goodsID) {//购物车更新
        let datas = {};
        datas.number = number;
        datas.goodsID = goodsID;
        datas.userID = this.$store.state.userInfo.userID;
        this.https.updatecar(datas).then((data) => {
          if(data.data == 0) {
            this.$toast('购物车更新失败！');
          } else {//成功

          }
        },(err) => {
          console.error(err);
        })
      },
      handChangeNum() {

      },
      addCart() {//该函数传递给子组件，自己件可以调用，todo 子组件如何向父组件传递参数?? $emit  vuex
        alert('购物车加');
      },
      subCart() {
        alert('购物车减');
      }
    },
    created() {
      console.log(this.$router,this.$route);
    },
    mounted() {
      this.$store.commit('upTabbarState',true)//显示底部 tabbar
      if(!this.$store.state.userInfo) {//未登录
        this.$router.push('/login');
        return false;
      } else {
        this.userID = this.$store.state.userInfo.userID
        this.https.getCar({userID:this.userID}).then((data) => {
          let datas = data.data;
          if(datas == 0) {
            //购物车中没有商品
          } else {
            this.cart = datas;
          }
        },(err) => {
          console.error(err);
        })
      }
    }
  }
</script>

<style lang="scss">
  @import "../css/cart.scss";
</style>
