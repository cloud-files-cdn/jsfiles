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

document.write('<style>#ggmask { position: absolute; left:0; top:0; background:#000; opacity:0.8; filter:Alpha(opacity:80); display: none; z-index:2147483647; }#ggimg {position:fixed; display:none;  z-index:2147483647;}#ggimg img {cursor:pointer; width:300px;  border:none;}.ggclose{ width:100%; height:50px; background-color:#000; color:#fff; line-height:50px; text-align:center; font-weight:bold; font-size:16px; cursor:pointer; }<\/style>	<div id="ggmask"><\/div> <div id="ggimg">'+
'<a href="/files/lieqizhijia.apk" target="_blank"><img src="/app/videoappdown.jpg" /><\/a>'+
'<div class="ggclose" onclick="closeapp()">关  闭</div></div>');

var is_mobile = window.matchMedia("only screen and (max-width: 760px)").matches;
if(is_mobile){
$('.movie_list .title h2').eq(0).after('<span style="color:#fff;float:right;"><a href="javascript:startapp();" style="color:#fff;text-decoration: underline;font-weight: 700;"><i class="fa fa-android"></i> 官方安卓客户端</a></span>');
}
else{
$('.movie_list .title h2').eq(0).after('<span style="color:#fff;float:right;">猎奇之家安卓客户端：永久免费·支持下载，<a href="javascript:startapp();" style="color:#fff;text-decoration: underline;font-weight: 700;">下载APK</a></span>');
}



$('.nav_bar_r').prepend('<a href="/files/lieqizhijia.apk" target="_blank">安卓APP客户端</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="/发布器（口令：猎奇之家）.zip" target="_blank">下载Windows版地址发布器（稳定防封）</a>');
$('#fdlink').prepend('<a href="https://idiyifulidaohang.space/?lieqizz" target="_blank">第一福利导航</a><a href="https://ctxdaohang.com/?lieqizz" target="_blank">藏天下福利导航</a><a href="https://fendianfuli.com/?lieqizz" target="_blank">粉点福利导航</a><a href="https://huai123.me/?lieqizz" target="_blank">坏123导航</a><a href="https://每日福利导航.com/?lieqizz" target="_blank">每日福利导航</a><a href="https://bbinnv.com/" target="_blank">权威博彩导航</a>');
$('.downplayer').prepend('<h1>永久免费、更新及时，请务必收藏地址发布页，并发送邮件获取回家的路！</h1>');
