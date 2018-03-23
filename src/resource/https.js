/**
 * Created by 呵呵哒 on 2018/3/22.
 */

function Ajax() {
}

Ajax.prototype.getIndexBanner = function(that) {
  return that.$http.jsonp('http://datainfo.duapp.com/shopdata/getBanner.php')
}
Ajax.prototype.getGoods = (that,param) => {
  console.log('接收的参数',param);
  return that.$http.jsonp('http://datainfo.duapp.com/shopdata/getGoods.php',{params:param})
}


export var https = new Ajax()
