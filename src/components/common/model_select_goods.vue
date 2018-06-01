<template>
  <div class="select">
    <div class="model-bg hide" @click="close" v-show="show"></div>
    <div class="select_goods hide" v-show="show">
      <div class="border-b-1px goods-info">
        <div class="img-box">
          <img :src="goods.goodsListImg" alt="">
        </div>
        <div class="info">
          <p class="substr substr-2 name">{{goods.detail}}</p>
          <p>
            <span class="price">￥{{goods.price}}</span>
            <span class="small">库存：{{goods.buynumber}}</span>
          </p>
        </div>
      </div>
      <ul class="border-b-1px select">
        颜色：
        <li class="list">
          <input id="color" name="color" v-model="color" type="checkbox" />
          <label for="color">
            图片色
          </label>
        </li>
      </ul>
      <ul class="border-b-1px select">
        尺码：
        <li class="list">
          <input id="size" name="size" v-model="size" type="checkbox" />
          <label for="size">
            均码
          </label>
        </li>
      </ul>
      <div class="num">
        <span>购买数量</span>
        <numHandle :num="num*1" :handChangeNum="handChangeNum" :subCart="subCart" :addCart="addCart"></numHandle>

      </div>
      <div class="btn-box">
        <button :class="{disabled:selectSpec}" @click="btnAdd($event)">确定</button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import numHandle from '@component/common/num_handle'
  export default {
    name:'select_goods',
    components:{
      'numHandle':numHandle
    },
    props: {
      goods:{
        type: Object,
        defalut: {}
      }
    },
    data () {
      return {
        show:false,
        color:true,//颜色
        size:false, //尺码
        num:1, // 数量
        buynumber:this.goods.buynumber //库存
      }
    },
    methods: {

      hideModel() {
        $('.model-bg').fadeOut();
        $('.select_goods').slideUp(300);
      },
      close() {
        this.hideModel();
        console.log('布尔值',this.show)
      },
      btnAdd(event) {//加入购物车
        //获取登录信息
        if(!this.$store.state.userInfo) {
          this.$messagebox.confirm('您还未登录，请前往登录页面登录！').then(action => {
            console.log('action',action)
            if(action) {
              this.$router.push('/login');
            }
          });
          return false;
        }
        let data = {};
        data.userID = this.$store.state.userInfo.userID;
        data.goodsID = this.goods.goodsID;
        data.number = this.num;
        this.https.updatecar(data).then((data) => {
          this.$indicator.close();//关闭loading
          if(data.data == 0) {
            this.$toast({
              message: '加入购物车失败，请稍后重试！',
              position: 'middle',
              duration: 1000
            });
          } else if(data.data == 1) {
            this.$toast('加入购物车成功！')
          } else {
            alert('失败');
          }
        },(err) => {
          console.error(err);
        })
        this.hideModel();
      },
      addCart() {//加入购物车数量加
        if(this.num >= this.buynumber) {
          this.$toast({
            message: '数量超出库存哦~',
            position: 'bottom',
            duration: 2000
          });
        } else {
          this.num++;
        }
      },
      subCart() {//减少数量
        if(this.num >1) {
          this.num--;
        }
      },
      handChangeNum() {//手动修改数量
        if(!/\d/g.test(this.num)) {
          this.num = 1;
        }
        if(this.num >= this.buynumber) {
          this.$toast({
            message: '数量超出库存哦~',
            position: 'bottom',
            duration: 2000
          });
          this.num = this.buynumber;
        }
      }
    },
    computed: { //计算属性
      selectSpec() {//规格都选择时 确定按钮变为可点击状态
        if(!this.color || !this.size) {
          return true;
        } else {
          return false;
        }
      }
    },
    created () {

    }
  }
</script>
<style lang="scss">
    @import "../../css/common/model_select_goods.scss";
</style>
