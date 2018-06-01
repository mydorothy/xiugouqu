/**
 * Created by 呵呵哒 on 2018/3/22.
 */
import Vue from 'vue'
import vueResource from 'vue-resource'
Vue.use(vueResource);
function Ajax() {
}

//加载中loading
let loading = (request) => {
  Vue.$indicator.open({text: '',spinnerType: 'fading-circle'});//mint-ui loading加载中
}

//商品模块

// 首页banner
Ajax.prototype.getIndexBanner = function(that) {
  return that.$http.jsonp('http://datainfo.duapp.com/shopdata/getBanner.php')
}
//品牌促销 (其实是搜索商品接口)
Ajax.prototype.getSelectGoodes = function(param) {
  return Vue.http.jsonp('http://datainfo.duapp.com/shopdata/selectGoodes.php',{params:param});
}
// 获取商品或列表
Ajax.prototype.getGoods = (param) => {
  console.log('接收的参数',param,Vue.http);
  return Vue.http.jsonp('http://datainfo.duapp.com/shopdata/getGoods.php',{params:param,before:loading})
}
//搜索商品
Ajax.prototype.selectGoodes = (param) => Vue.http.jsonp('http://datainfo.duapp.com/shopdata/selectGoodes.php',{params:param})
//购物车操作：增删改
Ajax.prototype.updatecar = (param) => Vue.http.get('http://datainfo.duapp.com/shopdata/updatecar.php',{params:param,before:loading})
//查看购物车
Ajax.prototype.getCar = (param) => Vue.http.jsonp('http://datainfo.duapp.com/shopdata/getCar.php',{params:param})

//用户模块
//用户信息获取
Ajax.prototype.getuser = (param) => {
  return Vue.http.jsonp('http://datainfo.duapp.com/shopdata/getuser.php',{params:param})
}
//用户登录和注册
Ajax.prototype.userinfo = (param) => {
  return Vue.http.get('http://datainfo.duapp.com/shopdata/userinfo.php',{params:param})
}

export var https = new Ajax()
