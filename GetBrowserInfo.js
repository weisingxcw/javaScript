//获取浏览器内核版本
var browser={
    versions:function(){
           var u = navigator.userAgent, app = navigator.appVersion;
           return {//移动终端浏览器版本信息//安卓qq浏览器HD版 只有AppleWebKit
                trident: u.indexOf('Trident') > -1, //IE内核
                presto: u.indexOf('Presto') > -1, //opera内核
                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
                mobile: !!u.match(/AppleWebKit.*Mobile.*/)||!!u.match(/AppleWebKit/), //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
                iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf('iPad') > -1, //是否iPad
                webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
		UC: u.indexOf('UCBrowser') > -1 //是否为UC
            };
         }(),
         language:(navigator.browserLanguage || navigator.language).toLowerCase()
};

//判断是否移动端访问
function isMobile(){
try {
	if(document.getElementById("bdmark") != null){return false;}
	var urlhash = window.location.hash;
	if (!urlhash.match("fromapp")){
		if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad|Mobile)/i))) {
			return true;
		}
	}
} catch(err){}
return false;
}