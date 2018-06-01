/**
 * Created by 呵呵哒 on 2018/5/23.
 */

let getArrFirst = val => {// 取数组的第一个参数
  if(typeof val == 'string') {
    val = JSON.parse(val);
  }
  if(val.constructor != Array) {
    return '请传递数组！';
  }
  return val[0]
}
let tofixed = val => {// 保留小数点后两位
  return val.toFixed(2);
}
let parseArr = val => {
  if(typeof val == 'string') {
    return JSON.parse(val);
  } else {
    return [];
  }
}

export {getArrFirst,tofixed,parseArr}
