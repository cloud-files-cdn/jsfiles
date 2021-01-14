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

document.write('<style>.stui-header__search{width:auto;}#ggmask { position: absolute; left:0; top:0; background:#000; opacity:0.8; filter:Alpha(opacity:80); display: none; z-index:2147483647; }#ggimg {position:fixed; display:none;  z-index:2147483647;}#ggimg img {cursor:pointer; width:300px;  border:none;}.ggclose{ width:100%; height:50px; background-color:#ff4397; color:#fff; line-height:50px; text-align:center; font-weight:bold; font-size:16px; cursor:pointer; }<\/style>	<div id="ggmask"><\/div> <div id="ggimg">'+
'<a href="/files/hansanlunli.apk" target="_blank"><img src="/app/videoappdown.jpg" /><\/a>'+
'<div class="ggclose" onclick="closeapp()">关  闭</div></div>');

var is_mobile = window.matchMedia("only screen and (max-width: 760px)").matches;
if(is_mobile){
$('.stui-pannel__head .title').eq(0).append('<span style="color:#ff4397;margin-left:10px;"><a href="javascript:startapp();" style="color:#ff4397;text-decoration: underline;font-weight: 700;"><i class="fa fa-android"></i> 官方安卓客户端</a></span>');
}
else{
$('.stui-pannel__head .title').eq(0).append('<span style="color:#ff4397;margin-left:10px;">韩三伦理小站安卓客户端：永久免费·支持下载，<a href="javascript:startapp();" style="color:#ff4397;text-decoration: underline;font-weight: 700;">下载APK</a></span>');
}


$('.stui-header__search').prepend('<a href="/files/hansanlunli.apk" target="_blank">安卓APP客户端</a>&nbsp;&nbsp;|&nbsp;&nbsp;');