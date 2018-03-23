<template>
  <transition name="slide-fade">
  <div class="goods">
    <!--详情图-->
    <section class="border-b-1px goods-gallery">
      <swiper :options="swiperOption">
        <swiper-slide class="" v-for="str in goodsImg" style="text-align:center" v-bind:key="str.id" data-swiper-autoplay="3000">
          <div class="list">
            <a href="">
              <div class="img-box">
                <img :src="str.url" />
              </div>
            </a>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </section>
    <!--商品详情-->
    <section class="goods-info">
      <div class="collect">
        <span class="iconfont icon-xingxing"></span>
        <span>收藏</span>
      </div>
      <p>
        <span class="price">￥39.99</span>
        <span class="mk_price">建议零售价：￥66</span>
      </p>
      <h3 class="goods-name">商品名称</h3>
      <div class="info">
        <p>生产厂家</p>
        <p>近效期：2020-04</p>
        <span>远效期：2022-10</span>
        <span class="goods-sales">909人买过</span>
      </div>
    </section>
    <!--买过商品的人还看过-->
    <section class="floor-box">
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
    </section>
    <!--商品介绍-->
    <section class="border-t-1px border-b-1px goods-introduce">
      <ul class="border-b-1px title" @click="infoList($event)">
        <li data-content="1" class="border-r-1px active">商品介绍</li>
        <li data-content="2" class="border-r-1px">说明书</li>
        <li data-content="3">资质证明</li>
      </ul>
      <ul class="detail">
        <li data-content="1" class="active">
          <div class="info">
            <p>商品名称：美女小吃ok很好吃</p>
            <p>通用名称：小吃很美</p>
            <p>计价单位：克</p>
            <p>规格：ml</p>
            <p>生产厂家：山东制药</p>
            <p>批准文号：z123456789</p>
            <p>包装：盒</p>
            <p>剂型：片剂</p>
            <p>温馨提示：请仔细阅读说明书并在医师指导下使用</p>
          </div>
          <about></about>
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
    <copyright></copyright>

    <section class="border-t-1px toolbar goods-tool">
      <a href="/">
        <span class="iconfont icon-index"></span>
        <h4>首页</h4>
      </a>
      <a href="tel:4008205360">
        <span class="iconfont icon-dianhua"></span>
        <h4>客服</h4>
      </a>
      <a href="/" class="cart">
        <span class="iconfont icon-cart"></span>
        <h4>购物车</h4>
      </a>
      <button class="btn btn-cart" @click="showAddCartModel">加入购物车</button>
      <button class="btn btn-buy">立即购买</button>
    </section>

    <!--加入购物车弹框-->
    <section class="model">
      <model_select></model_select>
    </section>
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
        showAddCart:'show',
        goodsImg: [
          {
            id:0,
            url:'http://saas.c-doctor.com/statics/attachment/adv/201710191150244728.png'
          },
          {
            id:1,
            url:'http://saas.c-doctor.com/statics/attachment/adv/201710191150244728.png'
          }
        ],
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
      console.log('router的值：',this.$route)
    },
    mounted() {

    }
  }
</script>
