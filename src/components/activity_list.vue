<template>
  <div class="goods-list">
    <div class="prompt">
      温馨提示：团购商品，成团后发货
    </div>
    <ul class="ul">
      <li class="border-b-1px" v-for="item in listImg" v-bind:key="item.id">
        <a href="#">
          <div class="img-box">
            <img class="img-v" v-bind:src="item.url" alt="">
          </div>
          <div class="content">
            <p class="substr">{{item.name}}</p>
            <p>
              <span class="price">￥9.98</span>
              <del class="mk-price">￥10.98</del>
              <button class="btn">马上抢</button>
            </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
  @import "../css/activity_list.scss";

</style>

<script>
  export default {
    name:'goods-list',
    data () {
      return {
        id:this.$route.query.id, // vuejs取得URL中参数的值
        listImg:[
          {
            id:'1',
            name:'2018秋季韩版打底裤',
            url:'http://saas.c-doctor.com/statics/attachment/adv/201710191150244728.png'
          },
          {
            id:'2',
            name:'2018秋季韩版打底裤',
            url:'http://saas.c-doctor.com/statics/attachment/adv/201712271400037137.png'
          },
          {
            id:'3',
            name:'2018秋季韩版打底裤',
            url:'http://saastest.c-doctor.com/statics/attachment//store/63/goods/201709221438246811.jpg!310x310'
          },
          {
            id:'4',
            name:'2018秋季韩版打底裤',
            url:'http://saastest.c-doctor.com/statics/attachment//store/63/goods/201709221438246811.jpg!310x310'
          },
          {
            id:'5',
            name:'2018秋季韩版打底裤',
            url:'http://saastest.c-doctor.com/statics/attachment//store/63/goods/201709121420563841.jpg!310x310'
          },
          {
            id:'6',
            name:'2018秋季韩版打底裤',
            url:'http://saastest.c-doctor.com/statics/attachment//store/63/goods/201709081058577366.jpg!310x310'
          }
        ],
      }
    },
    method:{

    }
  }
</script>
