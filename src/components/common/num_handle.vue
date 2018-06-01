<template>
    <div class="number">
      <span @click="subCart">-</span>
      <input type="tel" v-model="num" onkeyup="if(this.value.length ==1) {this.value=this.value.replace(/[^1-9]+/g,1)} else {this.value=this.value.replace(/[^\d]+/g,'')}" value="num" @change="handChangeNum"/>
      <span @click="addCart">+</span>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:'number',
    data() {
      return {

      }
    },
    props:{
      num: {
        type:Number,
        default:1
      },
      handChangeNum: {
        type:Function,
        default:() =>{}
      },
      subCart: {
        type:Function,
        default:() =>{}
      },
      addCart: {
        type:Function,
        default:() =>{}
      }
    },
    created() {

    }
  }
</script>

<style>
  .right {

  }
</style>
