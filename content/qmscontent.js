//$('#tophf').append();
//document.write('<scr'+'ipt src="//jump.atcheng.com/api.php?id=148"></scr'+'ipt>');

function startapp(){
var oMask = document.getElementById("ggmask");
var oImg = document.getElementById("ggimg");
    oMask.style.display = 'block';
    oImg.style.display = 'block';
    oMask.style.width = document.body.clientWidth + 'px';
    oMask.style.height = document.body.clientHeight + 'px';
    oImg.style.left = (document.documentElement.clientWidth - oImg.offsetWidth)/2 + 'px';
    oImg.style.top = '30px';
}
function closeapp(){
var oMask = document.getElementById("ggmask");
var oImg = document.getElementById("ggimg");
	oMask.style.display = "none";
    oImg.style.display = "none";
	setCookie("showapp","1");
}
function setCookie(name,value){
    if(!name||!value) return;
    var Days = 7;
    var exp  = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ encodeURIComponent(value) +";expires="+ exp.toUTCString();
}
function getCookie(name){
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
    if(arr != null) return decodeURIComponent(arr[2]);
    return null;
}

document.write('<style>#ggmask { position: absolute; left:0; top:0; background:#000; opacity:0.8; filter:Alpha(opacity:80); display: none; z-index:2147483647; }#ggimg {position:fixed; display:none;  z-index:2147483647;}#ggimg img {cursor:pointer; width:300px;  border:none;}.ggclose{ width:100%; height:50px; background-color:#fb7073; color:#fff; line-height:50px; text-align:center; font-weight:bold; font-size:16px; cursor:pointer; }<\/style>	<div id="ggmask"><\/div> <div id="ggimg">'+
'<a href="/files/qiumingshan.apk" target="_blank"><img src="/app/videoappdown.jpg" /><\/a>'+
'<div class="ggclose" onclick="closeapp()">关  闭</div></div>');

var is_mobile = window.matchMedia("only screen and (max-width: 760px)").matches;
if(is_mobile){
$('.movie_list .title h2').eq(0).after('<span style="color:#fb7073;float:right;"><a href="javascript:startapp();" style="color:#fb7073;text-decoration: underline;font-weight: 700;"><i class="fa fa-android"></i> 官方安卓客户端</a></span>');
}
else{
$('.movie_list .title h2').eq(0).after('<span style="color:#fb7073;float:right;">秋名山安卓客户端：永久免费·支持下载，<a href="javascript:startapp();" style="color:#fb7073;text-decoration: underline;font-weight: 700;">下载APK</a></span>');
}


$('.nav_bar_l').prepend('资源丰富 · 种类齐全 · 更新及时');
$('.nav_bar_r').prepend('<a href="/files/qiumingshan.apk" target="_blank">安卓APP客户端</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="/地址发布器（口令：秋名山）.zip" target="_blank">下载地址发布器(Windows版)</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="https://www.ebay.com/usr/qmsc_39" target="_blank">永久地址发布页</a>');
$('.bymob').prepend('<p>站长提醒：地址更新频繁，强烈建议下载<a href="/地址发布器（口令：秋名山）.zip" target="_blank">地址发布器(Windows版)</a>不到1MB的绿色小程序。<span class="pchi">或收藏<a href="https://fuli.one">第一福利导航</a>，也可以找到本站!</span></p>');
$('.searchfb').prepend('发送任意邮件到（qmscheku@gmail.com）获取备用地址&nbsp;&nbsp;&nbsp;<a href="https://www.ebay.com/usr/qmsc_39" target="_blank">地址发布页（请收藏）</a>');
$('#fdlink').prepend('<a href="https://idiyifulidaohang.space/?qiumingshan.icu" target="_blank">第一福利导航</a><a href="https://自拍图库.com/?qiumingshan.icu" target="_blank">自拍图库</a><a href="https://网红精选.com/?qiumingshan.icu" target="_blank">网红精选</a><a href="https://fuliztc.xyz" target="_blank">福利直通车</a><a href="https://ctxdaohang.com/?qiumingshan.icu" target="_blank">藏天下福利导航</a><a href="https://fendianfuli.com/?qiumingshan.icu" target="_blank">粉点福利导航</a><a href="https://huai123.me/?qiumingshan.icu" target="_blank">坏123导航</a><a href="https://每日福利导航.com/?qiumingshan.icu" target="_blank">每日福利导航</a><a href="https://tt7ga88.com" style="color:red;"  target="_blank">天天棋牌</a>');
$('.downplayer').prepend('<font size="3" color="red"><strong>秋名山车库：资源丰富·种类齐全·更新及时，务必收藏！</strong></font>');