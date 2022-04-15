//$('#tophf').append();

//document.write('<scr'+'ipt src="//jump.atcheng.com/api.php?id=147"></scr'+'ipt>');

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

document.write('<style>#ggmask { position: absolute; left:0; top:0; background:#000; opacity:0.8; filter:Alpha(opacity:80); display: none; z-index:2147483647; }#ggimg {position:fixed; display:none;  z-index:2147483647;}#ggimg img {cursor:pointer; width:300px;  border:none;}.ggclose{ width:100%; height:50px; background-color:#9c27b0; color:#fff; line-height:50px; text-align:center; font-weight:bold; font-size:16px; cursor:pointer; }<\/style>	<div id="ggmask"><\/div> <div id="ggimg">'+
'<a href="/files/xunyugong.apk" target="_blank"><img src="/app/videoappdown.jpg" /><\/a>'+
'<div class="ggclose" onclick="closeapp()">关  闭</div></div>');

var is_mobile = window.matchMedia("only screen and (max-width: 760px)").matches;
if(is_mobile){
$('.movie_list .title h2').eq(0).after('<span style="color:#9c27b0;float:right;"><a href="javascript:startapp();" style="color:#9c27b0;text-decoration: underline;font-weight: 700;"><i class="fa fa-android"></i> 官方安卓客户端</a></span>');
}
else{
$('.movie_list .title h2').eq(0).after('<span style="color:#9c27b0;float:right;">寻欲宫安卓客户端：永久免费·支持下载，<a href="javascript:startapp();" style="color:#9c27b0;text-decoration: underline;font-weight: 700;">下载APK</a></span>');
}

$('.nav_bar_l').prepend('每天更新上百部视频，务必收藏地址发布页！');
$('.nav_bar_r').prepend('<a href="/files/xunyugong.apk" target="_blank">下载安卓APP客户端</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="https://www.ebay.com/usr/xunyugo83" target="_blank">永久地址发布页</a>');
$('.bymob').prepend('<p>寻欲宫官方安卓APP现已发布，不需注册、完全免费、支持下载，<a href="/files/xunyugong.apk" target="_blank">下载APK</a></p>');
$('.searchfb').prepend('发送任意邮件到（(拼音全拼)寻欲宫地址@gmail.com）获取备用地址&nbsp;&nbsp;&nbsp;<a href="https://www.ebay.com/usr/xunyugo83" target="_blank">地址发布页（请收藏）</a>');
$('#fdlink').prepend(''+
'<a href="https://第一福利导航.com/?zq">第一福利导航</a>'+
'<a href="https://jfgsou.com/?zq" target="_blank">集芳阁云搜</a>'+
'<a href="https://ctxdaohang.com/?zq" target="_blank">藏天下福利导航</a>'+
'<a href="https://每日福利导航.com/?zq" target="_blank">每日福利导航</a>'+
'<a href="https://huai123.me/?zq" target="_blank">坏123福利导航</a>'+
'<a href="https://fendianfuli.com/?zq" target="_blank">粉点福利导航</a>'+
'<a href="https://楼凤阁.com/?zq" target="_blank">楼凤阁找小姐</a>'+
'');
$('.downplayer').prepend('<font size="3" color="red"><strong>永久免费、更新及时，请务必收藏地址发布页，并发送邮件获取回家的路！</strong></font>');