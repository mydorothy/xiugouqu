
<!-- vue中使用swiper.js 实现轮播-->

<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in bannerList" v-bind:key="item.id">
        <img :src="item.img_url" alt="">
      </div>
    </div>
  </div>
</template>

<script>

  import Swiper from 'swiper';
  import './swiper/dist/css/swiper.min.css';

  export default {
    name:'swiper',
    data () {
      return {
        bannerList:[
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
      }
    },
    mounted() {
      console.log('mounted', this);
      //this.swiper.slideTo(2, 1000, false)
      var swiper = new Swiper('.swiper-container', {

       observer:true, //修改swiper自己或子元素时，自动初始化swiper
       observeParents:true,//修改swiper的父元素时，自动初始化swiper
       speed:600,//slider自动滑动开始到结束的时间（单位ms）。
       slidesPerView: 'auto',//设置slider容器能够同时显示的slides数量(carousel模式)。可设置number/ 'auto'
       //centeredSlides: false,//设定为true时，活动块会居中，而不是默认状态下的居左。
       spaceBetween: 10,//slide之间的距离（单位px）。
       autoplay: true, // 此处设置为具体的毫秒数时，不生效，只有设置为true 才生效
       autoplayDisableOnInteraction : false,//用户操作swiper之后，是否禁止autoplay。默认为true：停止。
       loop:true,//循环，加上以后滑到最后一张会继续显示第一张
       pagination: '.swiper-pagination',
       preventLinksPropagation: true,
       //loopedSlides :idElement.length,
       onSlideChangeEnd: function(swiper){
       swiper.update()
       },
       onTouchStart: function(swiper,even){//开始拖动

       },
       onTouchEnd: function(swiper){//拖动
       swiper.startAutoplay();
       },
       onInit: function(swiper){//swiper 初始化后执行
       }
       });

    }
  }
</script>
