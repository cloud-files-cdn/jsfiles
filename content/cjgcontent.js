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
$('.header h2 span').eq(0).after('<span style="color:#fff;float:right;"><a href="javascript:startapp();" style="color:#fff;text-decoration: underline;font-weight: 700;"><i class="fa fa-android"></i> 官方安卓客户端</a></span>');
}
else{
$('.header h2 span').eq(0).after('<span style="height: 50px;line-height: 50px;color:#fff;">藏姬阁安卓客户端：永久免费·支持下载，<a href="javascript:startapp();" style="color:#fff;text-decoration: underline;font-weight: 700;">下载APK</a></span>');
}
document.write('<style>#ggmask { position: absolute; left:0; top:0; background:#000; opacity:0.8; filter:Alpha(opacity:80); display: none; z-index:2147483647; }#ggimg {position:fixed; display:none;  z-index:2147483647;}#ggimg img {cursor:pointer; width:300px;  border:none;}.ggclose{ width:100%; height:50px; background-color:#2D323C; color:#fff; line-height:50px; text-align:center; font-weight:bold; font-size:16px; cursor:pointer; }<\/style>	<div id="ggmask"><\/div> <div id="ggimg">'+
'<a href="/files/cangjige.apk" target="_blank"><img src="/app/videoappdown.jpg" /><\/a>'+
'<div class="ggclose" onclick="closeapp()">关  闭</div></div>');
//<script>if(getCookie("showapp")==null){startapp();}<\/script>


$('#cjgtext').append('<span>三年之后，藏姬阁重新起航，依旧免费、每日更新！ <a href="/藏姬阁发布器（口令：藏姬阁）.exe" target="_blank" style="color: #dae62d;">下载电脑端地址发布器（口令：藏姬阁）</a></span>');
document.write('<footer><div class="zerogrid top-footer wr">联系方式：thecangjg@gmail.com</div><div class="zerogrid copyright wr"><div class="wrapper"><p>警告: 此网站只适合十八岁或以上人士观看, 此网站内容可能令人反感；不可将此区域的内容派发，传阅，出售，出租，交给或者 借予年龄未满18岁的人士或将本网站内容向该人士出售，播放或放映，如果你是该影片的版权方所有者而要求删除影片的，请联系我们，我们会很快做出回复。</p><p>WARNING!By accessing the Website, you certify that you are at least 18 years of age or the age of majority under the laws of your state, province or country. We expressly and strictly limit use of the Website to adults over 18 years of age or the age of majority in the individual’s jurisdiction, whichever is greater. Anyone under this age is strictly forbidden from using the Website.</p></div></div></footer>');
$('footer').prepend('<div class="zerogrid top-footer wr"><a href="/files/cangjige.apk" target="_blank">点击下载安卓APP客户端</a></div><div class="zerogrid top-footer wr" style="margin-top: 0px;"><ul>'+
'<li class="link">友情链接：</li>'+
'<li><a href="https://第一福利导航.com/?zq">第一福利导航</a></li>'+
'<li><a href="https://jfgsou.com/?zq" target="_blank">集芳阁云搜</a></li>'+
'<li><a href="https://ctxdaohang.com/?zq" target="_blank">藏天下福利导航</a></li>'+
'<li><a href="https://每日福利导航.com/?zq" target="_blank">每日福利导航</a></li>'+
'<li><a href="https://huai123.me/?zq" target="_blank">坏123福利导航</a></li>'+
'<li><a href="https://fendianfuli.com/?zq" target="_blank">粉点福利导航</a></li>'+
'<li><a href="https://楼凤阁.com/?zq" target="_blank">楼凤阁找小姐</a></li>'+
'</ul><div style="clear:both;"></div></div>');