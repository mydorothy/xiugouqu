<template>
    <div class="floor-box new-product">
      <div class="h">
        <h3>新品首发</h3>
        <p class="p">好货等你来抢</p>
      </div>
      <ul class="clear list">
        <li v-for="(item,index) in list" :key="item.goodsID" v-if="index != 1">
          <div class="img-box">
            <img :src="item.goodsBenUrl | getArrFirst" alt="">
          </div>
          <div class="text">
            <p class="substr name">{{item.goodsName}}</p>
            <mt-progress :value="item.saleVolume/(item.saleVolume+item.surplus)*100" :bar-height="1"></mt-progress>
            <p class="des">
              <span class="l">已售出：{{item.saleVolume}}件</span>
              <span class="r">仅剩：{{item.surplus}}件</span>
            </p>
            <p class="price">
              <span class="min-font">心动价：￥</span>{{item.price | tofixed}}
              <router-link :to="{name:'goods',params:{goodsID:item.goodsID}}" class="btn">去看看</router-link>
            </p>

          </div>
        </li>
      </ul>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:'new-product',
    props: {

    },
    data() {
      return {
        list:[]
      }
    },
    mounted() {
      this.https.getIndexBanner(this).then((data) => {//banner接口用作新品首发
        let arrPrice = [179,799,228,59];
        let arrSales = [92,15,84,184];//已售出n件 （随意）
        let arrSurplus = [7,90,17,66];//剩余n件（随意）
        arrPrice.forEach((val,index) => {
          data.data[index].price = arrPrice[index];//追加价格
          data.data[index].saleVolume = arrSales[index];//已售出n件 随意
          data.data[index].surplus = arrSurplus[index];//剩余n件 随意
        });
        this.list = data.data;
        console.log('data的值111',data)
      })
    }
  }
</script>

<style lang="scss">

</style>
