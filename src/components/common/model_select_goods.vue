<template>
  <div class="select">
    <div class="model-bg hide" @click="close" v-show="show"></div>
    <div class="select_goods hide" v-show="show">
      <div class="border-b-1px goods-info">
        <div class="img-box">
          <img src="http://saastest.c-doctor.com/statics/attachment//store/63/goods/201709181403486232.jpg!310x310" alt="">
        </div>
        <div class="info">
          <p class="substr substr-2 name">商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称</p>
          <p>
            <span class="price">￥9.99</span>
            <span class="small">省￥10.00</span>
          </p>
        </div>
      </div>
      <ul class="border-b-1px select">
        <li class="list">
          <input id="name1" name="styl" type="radio" />
          <label for="name1">
            商品名称
          </label>
        </li>
        <li class="list">
          <input id="name2" name="styl" type="radio" />
          <label for="name2">
            商品名称商品名称
          </label>
        </li>
      </ul>
      <div class="num">
        <span>购买数量</span>
        <div class="right">
          <span><img src="../../images/ruyi_cart_minus.png" alt=""></span>
          <input type="text" value="1"/>
          <span><img src="../../images/ruyi_cart_add.png" alt=""></span>
        </div>

      </div>
      <div class="btn-box">
        <button @click="btnAdd($event)">确定</button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:'select_goods',
    props: {

    },
    data () {
      return {
        show:false
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
      btnAdd(event) {
        console.log(event);
        this.hideModel();
      }
    },
    computed: { //计算属性

    },
    created () {

    }
  }
</script>
<style lang="scss">
    @import "../../css/common/model_select_goods.scss";
</style>
