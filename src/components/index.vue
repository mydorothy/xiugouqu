<template>
  <div class="index-box">
    <div ref="indexScroll" v-if="loadStatus" class="indexScroll">
      <div>
        <div class="down-update" v-html="downText"></div>
        <!--头部搜索-->
        <section class="clear search-box">
          <div class="search-box-cover"></div>
          <div class="search">
            <div class="logo">
              <img src="../images/ruyi_logo_patient.png" alt="">
            </div>
            <div class="input-search">
              <input type="text" value="搜索关键字···">
            </div>
            <div class="btn">
              <a href="">登录</a>
            </div>
          </div>
        </section>
        <!--banner-->
        <section class="clear banner">
          <swiper :options="bannerOption" ref="mySwiper">
            <swiper-slide data-swiper-autoplay="2000" v-for="item in bannerList" v-bind:key="item.id">
              <a href="">
                <div class="img-box" v-bind:style="{backgroundImage:'url(' + item.url + ')'}">
                  <img :src="item.url" :alt="item.url">
                </div>
              </a>
            </swiper-slide>

            <!--以下内容是走接口获取的banner-->
            <!--<swiper-slide class="" v-for="item in bannerList" v-bind:key="item.goodsID" data-swiper-autoplay="2000">
              &lt;!&ndash;:to 参数是对象的话 要加冒号，如果是普通的字符串就不用加了&ndash;&gt;
              &lt;!&ndash;query写法会拼到url里?a=b&c=d ，params 的键值对在请求头header中可以查看到，不放在url中。&ndash;&gt;
              <router-link :to="{ name: 'goods', params: { id: item.goodsID }}"> &lt;!&ndash;在url中参数不会显示出来,除非在路由配置里加上 path:'/goods：id'&ndash;&gt;
              &lt;!&ndash;<router-link :to="{path:'/goods',query:{id:item.goodsID}}" >&ndash;&gt;  &lt;!&ndash;在url中会参数会显示出来&ndash;&gt;

                <div class="img-box" v-bind:style="{backgroundImage:'url(' + bannerBg(item.goodsBenUrl) + ')'}">
                  <img v-bind:src="item.goodsBenUrl | bannerImgFirst" :alt="item.goodsName">
                </div>
              </router-link>
            </swiper-slide>-->
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </section>
        <!--快速导航-->
        <!--<adv></adv>-->
        <!--新品首发-->
        <newPro></newPro>
        <!--品牌促销-->
        <section class="border-t-1px border-b-1px floor-box brand-box" style="background-color:#fff;">
          <div class="h">
            <h3>品牌促销</h3>
            <p class="p">品牌打折到剁手</p>
            <!--<span class="iconfont icon-jiantou arrow-right"></span>
            <router-link to="/activity-list?id=2">更多商品</router-link>-->
            <!--<a v-bind:href="#/activity-list?id=2">更多商品</a>-->
          </div>
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide class="" v-for="str in listImg" style="text-align:center" v-bind:key="str.goodsID" data-swiper-autoplay="2000">
              <div class="list">
                <router-link :to="{name:'goods',params:{ goodsID:str.goodsID } }">
                  <div class="img-box">
                    <img :src="str.goodsListImg" />
                  </div>
                </router-link>
                <div class="content">
                  <p class="substr substr-2 name">{{str.goodsName}}</p>
                  <div class="price-box">
                    <p class="price">{{str.price}}</p>
                    <!--<p class="mk-price">￥</p>-->
                    <!--<div class="add-cart">
                      <img class="btn-add-cart" goods_id="" src="../images/add_cart_icon.png" alt="">
                    </div>-->
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </section>
        <!--热销爆款-->
        <section class="floor-box array-box">
          <div class="h">
            <h3>热销爆款</h3>
            <p class="p">总有一款适合你</p>
          </div>
          <ul class="clear array">
            <li class="" v-for="item in hotSell" v-bind:key="item.goodsID">
              <div class="item">
                <router-link :to="{name:'goods',params:{goodsID:item.goodsID}}">
                  <div class="count-height" v-bind:style="">
                    <img :src="item.goodsListImg" />
                  </div>
                </router-link>
                <div class="content">
                  <p class="substr">{{item.goodsName}}</p>
                  <div class="price-box">
                    <p class="price">{{item.price}}</p>
                    <p class="mk-price" v-if="(item.discount*1) > 0">￥{{(item.price*1)/(item.discount*0.1) | tofixed}}</p>
                    <p class="mk-price" v-else>￥{{item.price}}</p>
                    <span v-show="item.discount*1 >0">{{item.discount}}折</span>
                    <div class="add-cart">
                      <img class="btn-add-cart" goods_id="" src="../images/add_cart_icon.png" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </section>

        <!--科室列表-->
        <!--<section class="border-t-1px border-b-1px floor-box array-box section-list">
          <div class="list">
            <swiper :options="sectionOption" ref="mySwiper">
              <swiper-slide  v-for="str in listImg" style="text-align:center" v-bind:key="str.id" data-swiper-autoplay="2000">
                <div>
                  <a class="active" href="javascript:void(0);">妇科用药</a>
                </div>
              </swiper-slide>
            </swiper>
          </div>

          <ul class="clear array">
            <li class="border-r-1px border-t-1px" v-for="str in listImg" v-bind:key="str.id">
              <a href="">
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
            </li>
          </ul>
        </section>-->

        <!--药师咨询-->
        <!--<section class="phone">
          <div class="phone-row">
            <div class="h">药师咨询</div>
            <div class="content">
              <a href="tel:15737124615" class="iconfont icon-dianhua">15737124615</a>
            </div>
          </div>
        </section>-->

        <div class="up-updata" v-html="upText"></div>
      </div>
    </div>
    <div class="loading" v-else>正在进入……</div>
  </div>
</template>

<script type="text/ecmascript-6">


  import Copyright from '@component/common/copyright'
  import Adv from '@component/common/adv'
  import NewProduct from '@component/common/new_product'

  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import {https} from '../resource/https.js'
  import BScroll from 'better-scroll'

  var downTextObj = {
    start:'下拉刷新',
    end: '释放刷新',
    release:'正在加载......'
  };
  var upTextObj = {
    start:'上拉加载',
    release:'加载中'
  };
  export default {
    name: 'index',
    components: {
      copyright:Copyright,
      'adv': Adv,
      'newPro': NewProduct,
      swiper,
      swiperSlide,
      https
    },
    data() {
      return {
        /*value3: 0,
        setting: { //走马灯（轮播）配置
          loop:true, //是否开启循环
          autoplay: true,//自动切换
          autoplaySpeed: 3000,//自动切换速度
          dots: 'inside', //指示器位置 inside轮播内部、outside轮播外部、none不显示
          radiusDot: true,//圆形指示器是否显示
          trigger: 'click', //指示分页器触发方式：click、hover
          arrow: 'never' // 左右箭头 hover悬停时显示 、always 一直显示、never 不显示
        },*/
        bannerList: [{
          url: "./src/images/banner1.jpg",
          id:1
        },{
          url: './src/images/banner2.jpg',
          id:2
        },{
          url:'./src/images/banner3.jpg',
          id:3
        },{
          url:'./src/images/banner_default.jpg',
          id:4
        }], // banner
        bannerImg:'http://o.c-doctor.com/themes/wap/salesCenter/images/ruyi_title_background.png',//banner图片
        hotSell:[], // 热销爆款
        listImg:[],//品牌促销
        bannerOption: { //vue-awesome-swiper
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
        swiperOption: { //vue-awesome-swiper
          initialSlide :0,
          loop: false,
          speed: 400,
          autoplay: true,
          autoplayDisableOnInteraction: false,
          slidesPerView: 'auto',//设置slider容器能够同时显示的slides数量(carousel模式)。可设置number/ 'auto'
          spaceBetween: 0,//slide之间的距离（单位px）。
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents:true//修改swiper的父元素时，自动初始化swiper
        },
        sectionOption: {
          initialSlide :0,
          loop: false,
          slidesPerView: 'auto',//设置slider容器能够同时显示的slides数量(carousel模式)。可设置number/ 'auto'
          spaceBetween: 0,//slide之间的距离（单位px）。
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents:true//修改swiper的父元素时，自动初始化swiper
        },
        downText:downTextObj.start,// 下拉刷新提示文字
        upText:upTextObj.start,// 上拉加载提示文字
        downStatus:false, // 下拉刷新的状态：true刷新中
        loadStatus:false,// 加载状态
        listImgHeight: 100 // 爆款的高度
      }
    },
    methods: {
      _initScroll() {// 初始化iscroll
        this.$nextTick(() => {
          //let headHeight = this.$refs.headTime.$el.clientHeight;
          // bscroll盒子要指定高度，这个是动态获取的，不设置高度有时候可能会获取不到
          this.$refs.indexScroll.style.height = window.innerHeight + 'px';// 高度设为与文档高度一致,否则可能
          if(!this.scroll) {
            console.log(this.$refs.indexScroll);
            this.scroll = new BScroll(this.$refs.indexScroll,{
              click:true,
              probeType: 3,
              pullDownRefresh: {// 下拉刷新配置
                threshold:50,
                stop:40
              },
              pullUpLoad: {// 上拉加载配置
                threshold:-10
              }
            });
            this.scroll.on('scroll',(pos) => {//滚动监听
              let $body = $('body');
              /*$body.find('.search-box-cover').css({
                opacity: ((Math.abs(pos.y) / 200) > 0.8) ? 0.8 : (Math.abs(pos.y) / 200)
              });*/
              if(pos.y > 50 && !this.downStatus) {
                this.downText = downTextObj.end;
              }
            });
            this.scroll.on('pullingDown',() => {// 下拉刷新
              this.downText = downTextObj.release;
              this.downStatus = true;
              let _this = this;
              setTimeout(() => {
                _this.scroll.finishPullDown();//下拉结束
                _this.downText = downTextObj.start;
                this.downStatus = false;
              },2000)
            });
            this.scroll.on('pullingUp',() => {// 上拉加载
              this.upText = upTextObj.release;
              let _this = this;
              setTimeout(() => {
                _this.scroll.finishPullUp();//当上拉加载数据加载完毕后，需要调用此方法告诉 better-scroll 数据已加载。
                this.upText = upTextObj.start
              },2000)
            })
          } else {
            this.scroll.refresh();
          }
        });
      },
      bannerBg(imgArr) {//banner图以背景的形式显示
        imgArr = JSON.parse(imgArr);
        return imgArr[0];
      }
    },
    // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    watch: {
      listImgHeight (val) { // 处理因为 频繁 触发 resize 函数，导致页面很卡的 问题
        if (!this.timer) {
          this.listImgHeight = val
          this.timer = true
          let that = this
          setTimeout(function () {
            that.timer = false
          }, 1000)
        }
      }
    },
    filters: {

    },
  // props: ['listImg'],
    mounted() {// 载入之后执行 在这里调不到 methods里的方法
      this.$store.commit('upTabbarState',true)//显示底部 tabbar
      let _this = this;
      /*window.onresize = function() {
        console.log($('.count-height').width())
        _this.listImgHeight = $('.count-height').width();
      }*/
    },
    created() {
      this.$store.commit('upTabbarState',true);
      //首页banner图
      /*https.getIndexBanner(this).then((data) => {
        console.log('data的值',data.data);// 用data.data || data.body都可以取到参数值
        this.bannerList = data.data;
        this.loadStatus = true;
        //初始化iscroll
        this._initScroll();
      },(err) => {
        console.log('失败',err);
      });*/
      //品牌促销
      this.https.getSelectGoodes({selectText:encodeURI('棉服')}).then((data) => {
        if(data.data) {
          this.listImg = data.data;
        }
      },(err) => {
        console.error(err);
      })
      //热销爆款
      https.getGoods({pageCode:0,linenumber:20}).then((data) => {
        this.$indicator.close();//关闭loading
        console.log('热销爆款',data.data);
        this.hotSell = data.data;
        this.loadStatus = true;
        //初始化iscroll
        this._initScroll();
        this.$nextTick(() => {
          let el = $('.count-height');
          this.listImgHeight = el.width();
        });
      },(err) => {
        console.error(err);
      })


    }

  }
</script>

<style lang="scss">
  @import "../css/index.scss";

</style>
