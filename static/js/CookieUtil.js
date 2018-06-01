
function CookieUtil(){
    alert("请不要new这个对象，所有方法都是可以通过CookieUtil.方法名来调用");
}
//设置cookie
function setCookie(name, value) {
	var Days = 30;
	var exp = new Date();
	exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
	document.cookie = name + "=" + escape(value) + ";expires="
			+ exp.toGMTString()+";path=/";
}

//读取cookies
function getCookie(name) {
	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

	if (arr = document.cookie.match(reg))

		return (arr[2]);
	else
		return null;
}

//删除cookies
function delCookie(name) {
	var exp = new Date();
	exp.setTime(exp.getTime() - 100);
	var cval = getCookie(name);
	if (cval != null)
		document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString()+";path=/";
}
//获取顶级域名
function GetCookieDomain() {
	var host = location.hostname;
	var ip = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
	if (ip.test(host) === true || host === 'localhost') return host;
	var regex = /([^]*).*/;
	var match = host.match(regex);
	if (typeof match !== "undefined" && null !== match) host = match[1];
	if (typeof host !== "undefined" && null !== host) {
		var strAry = host.split(".");
		if (strAry.length > 1) {
			host = strAry[strAry.length - 2] + "." + strAry[strAry.length - 1];
		}
	}
	return '.' + host;
}
//创建顶级域名
function setCookieDomain(name,value) {
	var Days = 30;
	var exp = new Date();
	exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
	document.cookie = name + "=" + value + "; expires=" + exp.toGMTString() + "; domain=" + GetCookieDomain() + "; path=/";
}
CookieUtil.setCookie=setCookie;
CookieUtil.getCookie=getCookie;
CookieUtil.delCookie=delCookie;
CookieUtil.setCookieDomain=setCookieDomain;
