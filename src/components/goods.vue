<template>
  <transition name="slide-fade">
  <div class="goods">
    <mt-header :title="$route.title">
      <router-link to="/" slot="left">
        <mt-button icon="back"> </mt-button>
      </router-link>
    </mt-header>
    <!--详情图-->
    <section class="border-b-1px goods-gallery">
      <swiper :options="swiperOption">
        <swiper-slide class="" v-for="(str,index) in goodsImg" style="text-align:center" v-bind:key="index" data-swiper-autoplay="3000">
          <div class="list">
            <a href="">
              <div class="img-box">
                <img :src="str" />
              </div>
            </a>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </section>
    <!--商品详情-->
    <section class="goods-info">
      <!--<div class="collect">
        <span class="iconfont icon-xingxing"></span>
        <span>收藏</span>
      </div>-->
      <h3 class="substr substr-2 goods-name">{{goods.detail}}</h3>
      <p>
        <span class="price">￥{{goods.price}}</span>
        <!--<span class="mk_price">建议零售价：￥66</span>-->
      </p>

      <div class="info">
        <span class="goods-sales">剩余库存：{{goods.buynumber}}</span>
      </div>
    </section>
    <!--买过商品的人还看过-->
    <!--<section class="floor-box">
      <div class="h">
        <h3>买过商品的人还看过</h3>
      </div>
      <swiper :options="alreadyBuyOption" ref="mySwiper">
        <swiper-slide class="" v-for="str in listImg" style="text-align:center" v-bind:key="str.id" data-swiper-autoplay="2000">
          <div class="border-r-1px list">
            <a href="#/goods">
              <div class="img-box">
                <img :src="str.url" />
              </div>
            </a>
            <div class="content">
              <p>商品名称</p>
              <div class="price-box">
                <p class="price">￥90.98</p>
                <p class="mk-price">￥100.99</p>
                <div class="add-cart">
                  <img class="btn-add-cart" goods_id="" src="../images/add_cart_icon.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </section>-->
    <!--服务-->
    <section class="border-t-1px serve">
      <ul>
        <li><span class="iconfont icon-zhengpinbaozhang"></span>正品保证</li>
        <li><span class="iconfont icon-tianmaoqitiantuihuo"></span>七天退换</li>
        <li><span class="iconfont icon-mianyunfei"></span>免运费</li>
      </ul>
    </section>
    <!--商品介绍-->
    <section class="border-t-1px border-b-1px goods-introduce">
      <ul class="border-b-1px title" @click="infoList($event)">
        <li data-content="1" class="active">图文详情</li>
        <!--<li data-content="2" class="border-r-1px">说明书</li>
        <li data-content="3">资质证明</li>-->
      </ul>
      <ul class="detail">
        <li data-content="1" class="active">
          <ul class="info">
            <li v-for="(ben,index) in goodsBenUrl" v-bind:key="index">
              <img :src="ben" alt="">
            </li>
          </ul>
          <!--<about></about>-->
        </li>
        <li data-content="2">
          <div>
            说明书
          </div>
        </li>
        <li data-content="3">
          资质证明
        </li>
      </ul>
    </section>
    <!--版权信息-->
    <!--<copyright></copyright>-->

    <section class="border-t-1px toolbar goods-tool">
      <router-link to="/index">
        <span class="iconfont icon-index"></span>
        <h4>首页</h4>
      </router-link>
      <a href="tel:15700000000">
        <span class="iconfont icon-dianhua"></span>
        <h4>客服</h4>
      </a>
      <router-link to="/cart" class="cart">
        <span class="iconfont icon-cart"></span>
        <h4>购物车</h4>
      </router-link>
      <button class="btn btn-cart" @click="showAddCartModel">加入购物车</button>
      <button class="btn btn-buy">立即购买</button>
    </section>

    <!--加入购物车弹框-->
    <section class="model">
      <model_select :goods="goods"></model_select>
    </section>
    <!--底部弹出框-->
    <!--<mt-actionsheet
      :actions="actions"
      v-model="sheetVisible">
    </mt-actionsheet>-->



  </div>
  </transition>
</template>

<style lang="scss">
  @import "../css/goods.scss";
</style>

<script type="text/ecmascript-6">

  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import About from '@component/about'
  import Copyright from '@component/common/copyright'
  import ModelSelectGoods from '@component/common/model_select_goods'
  export default {
    name:'goods',
    components: {
      swiper,
      swiperSlide,
      about: About,
      copyright: Copyright,
      model_select:ModelSelectGoods
    },
    data() {
      return {
        /*sheetVisible:true,//底部弹出框测试
        actions:[{
          name: '拍照',
          method:this.test // 点击时触发的函数
        },{
          name: '从相册中选择',
          method:this.test // 点击时触发的函数
        }],*/
        showAddCart:'show',
        goods:{},
        goodsImg: [],//商品图集
        goodsBenUrl:[],//图文详情
        listImg:[
          {
            id:'1',
            url:'http://saas.c-doctor.com/statics/attachment/adv/201710191150244728.png'
          },
          {
            id:'2',
            url:'http://saas.c-doctor.com/statics/attachment/adv/201712271400037137.png'
          },
          {
            id:'3',
            url:'http://saastest.c-doctor.com/statics/attachment//store/63/goods/201709221438246811.jpg!310x310'
          },
          {
            id:'4',
            url:'http://saastest.c-doctor.com/statics/attachment//store/63/goods/201709221438246811.jpg!310x310'
          },
          {
            id:'5',
            url:'http://saastest.c-doctor.com/statics/attachment//store/63/goods/201709121420563841.jpg!310x310'
          },
          {
            id:'6',
            url:'http://saastest.c-doctor.com/statics/attachment//store/63/goods/201709081058577366.jpg!310x310'
          }
        ],
//        图片相册轮播
        swiperOption: { //swiper-pagination
          initialSlide :0,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          loop: false,
          speed: 400,
          autoplay: true,
          autoplayDisableOnInteraction: false,
//          slidesPerView: 'auto',//设置slider容器能够同时显示的slides数量(carousel模式)。可设置number/ 'auto'
//          spaceBetween: 0,//slide之间的距离（单位px）。
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents:true//修改swiper的父元素时，自动初始化swiper
        },
//        买过的人还看过
        alreadyBuyOption: {
          initialSlide:0,
          loop:false,
          speed:400,
          autoplay:true,
          autoplayDisableOnInteraction: false,
          slidesPerView: 'auto',//设置slider容器能够同时显示的slides数量(carousel模式)。可设置number/ 'auto'
          spaceBetween: 0,//slide之间的距离（单位px）。
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents:true//修改swiper的父元素时，自动初始化swiper
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    methods:{
      test() {
        alert(1);
      },
      // 方法 函数
      infoList(event) {
        const target = event.target;
        if(target.tagName.toLocaleUpperCase() == 'LI') {
          $(target).addClass('active').siblings().removeClass('active');
          const content = $(target).data('content');
          $(target).closest('.goods-introduce').find('.detail li[data-content="'+content+'"]').addClass('active').siblings().removeClass('active');
        }
      },
      showAddCartModel() {
        this.showAddCart = true;
        this.showModel();
        console.info('hehe',$('.select'));
      },
      showModel() {
        $('.model-bg').fadeIn();
        $('.select_goods').slideDown(300);
      },
    },
    created() {
      let goodsId = this.$route.params.goodsID;
      console.log('router的值：',this.$route,goodsId);
      //通过goodsID获取商品
      this.https.getGoods({goodsID:goodsId}).then((data) => {
        this.$indicator.close();//关闭loading
        let datas = data.data[0];
        console.log('商品详情',datas);
        if(datas) {
          this.goods = datas;//商品详情
          this.goodsImg = JSON.parse(datas.imgsUrl);//商品图集
          this.goodsBenUrl= JSON.parse(datas.goodsBenUrl);//图文详情
        }
      },(err) => {
        console.error(err);
      })
    },
    mounted() {
      console.log('store:',this.$store);

      setTimeout(() => {
        $('.goods').addClass('goods-no-transform');//显示底部bar
      },600)

    }
  }
</script>
