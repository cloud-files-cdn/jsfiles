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
var is_mobile = window.matchMedia("only screen and (max-width: 760px)").matches;
if(is_mobile){
$('.general .container div h4').eq(0).after('<span style="height: 50px;line-height: 50px;color: red;float:right;"><a href="javascript:startapp();" style="color: #06f;text-decoration: underline;font-weight: 700;"><i class="fa fa-android"></i> 官方安卓客户端</a></span>');
}
else{
$('.general .container div h4').eq(0).after('<span style="height: 50px;line-height: 50px;color: red;">草榴视频安卓客户端：永久免费·支持下载，<a href="javascript:startapp();" style="color: #06f;text-decoration: underline;font-weight: 700;">下载APK</a></span>');
}
document.write('<style>#ggmask { position: absolute; left:0; top:0; background:#000; opacity:0.8; filter:Alpha(opacity:80); display: none; z-index:2147483647; }#ggimg {position:fixed; display:none;  z-index:2147483647;}#ggimg img {cursor:pointer; width:300px;  border:none;}.ggclose{ width:100%; height:50px; background-color:#0F7884; color:#fff; line-height:50px; text-align:center; font-weight:bold; font-size:16px; cursor:pointer; }<\/style>	<div id="ggmask"><\/div> <div id="ggimg">'+
'<a href="/files/caoliu.apk" target="_blank"><img src="/app/videoappdown.jpg" /><\/a>'+
'<div class="ggclose" onclick="closeapp()">关  闭</div></div>');

$('.footer').append('<div class="container"><div class="col-md-5 w3ls_footer_grid1_left"><p><a href="/files/caoliu.apk" target="_blank">点击下载安卓APP客户端</a></p><p><a href="/发布器（口令：草榴视频）.zip" target="_blank">下载Windows版地址发布器（永不迷路）</a></p><p>联系邮箱：caoliuvideo@outlook.com</p></div><div class="col-md-7 w3ls_footer_grid1_right"><ul>'+
'<li><a href="https://第一福利导航.com/?zq">第一福利导航</a></li>'+
'<li><a href="https://jfgsou.com/?zq" target="_blank">集芳阁云搜</a></li>'+
'<li><a href="https://ctxdaohang.com/?zq" target="_blank">藏天下福利导航</a></li>'+
'<li><a href="https://每日福利导航.com/?zq" target="_blank">每日福利导航</a></li>'+
'<li><a href="https://huai123.me/?zq" target="_blank">坏123福利导航</a></li>'+
'<li><a href="https://fendianfuli.com/?zq" target="_blank">粉点福利导航</a></li>'+
'<li><a href="https://楼凤阁.com/?zq" target="_blank">楼凤阁找小姐</a></li>'+
'</ul></div><div class="clearfix"></div></div>');

