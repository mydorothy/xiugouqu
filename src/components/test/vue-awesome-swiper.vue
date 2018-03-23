<template>
  <div>
    <swiper :options="swiperOption"  ref="mySwiper">
      <!-- 这部分放你要渲染的那些内容 -->
      <swiper-slide v-for="item in items" v-bind:key="item.id" data-swiper-autoplay="2000">
        <div>
          <img v-bind:src="item.img_url" alt="">
        </div>
      </swiper-slide>
      <!-- 这是轮播的小圆点 -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script type="text/ecmascript-6">
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        items:[
          {
            id:'1',
            img_url:'http://saas.c-doctor.com/statics/attachment/adv/201710191150244728.png',
            name:'热销排行榜',
            href:'http://wapsaas.c-doctor.com/goods_list_floor.html?floor_title=%E7%83%AD%E9%94%80%E6%8E%92%E8%A1%8C%E6%A6%9C&floor_name=tag&tag_id=566&image1=http://saas.c-doctor.com/statics/attachment/store/201705191759198903.png',
          },
          {
            id:'2',
            img_url:'http://saas.c-doctor.com/statics/attachment/adv/201712271400037137.png',
            name:'不发货',
            href:'#'
          }
        ],
        swiperOption: {
          //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          autoplay: true,// 此处设置为具体的毫秒数时，不生效，只有设置为true 才生效, 为true时，无法控制其播放间隔，在html这里写：<swiper-slide data-swiper-autoplay="2000">
          autoplayDisableOnInteraction: false,
          speed: 400,
          pagination: '.swiper-pagination',
          slidesPerView: 'auto',
          centeredSlides: true,
          paginationClickable: true,
          spaceBetween: 30,
          onSlideChangeEnd: swiper => {
            //这个位置放swiper的回调方法
            this.page = swiper.realIndex+1;
            this.index = swiper.realIndex;
          }
        }
      }
    },
    //定义这个sweiper对象
    computed: {

      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
    mounted () {
      //这边就可以使用swiper这个对象去使用swiper官网中的那些方法
      this.swiper.slideTo(0, 0, false);
    }

  }
</script>
<style>
</style>
