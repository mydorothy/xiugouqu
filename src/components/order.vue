
<template>
  <div class="order">
    我是订单
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:'order',
    data() {
      return {

      }
    },
    mounted() {
      this.$store.commit('upTabbarState',true)//显示底部 tabbar
    }
  }
</script>

<style lang="scss">

</style>
