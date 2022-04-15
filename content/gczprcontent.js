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
function setCookie2(name,value){
    if(!name||!value) return;
    var Days = 3;
    var exp  = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ encodeURIComponent(value) +";expires="+ exp.toUTCString();
}
function getCookie(name){
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
    if(arr != null) return decodeURIComponent(arr[2]);
    return null;
}

function checkRef()
{
	var ref = '';  
 　 if (document.referrer.length > 0) {  
		ref = document.referrer;
　　}  

　　try {  
		if (ref.length == 0 && opener.location.href.length > 0) { 
 　　　　ref = opener.location.href;  
 　　}  

 } catch (e) {}
	if(ref.indexOf('sm.cn')>0){ alert("本站永久域名：https://国产自拍热.com/");}
}
if(getCookie('smcn')==null)
{
	checkRef();
	setCookie2('smcn','1');
}
document.write('<style>#ggmask { position: absolute; left:0; top:0; background:#000; opacity:0.8; filter:Alpha(opacity:80); display: none; z-index:2147483647; }#ggimg {position:fixed; display:none;  z-index:2147483647;}#ggimg img {cursor:pointer; width:300px;  border:none;}.ggclose{ width:100%; height:50px; background-color:#f90; color:#fff; line-height:50px; text-align:center; font-weight:bold; font-size:16px; cursor:pointer; }<\/style>	<div id="ggmask"><\/div> <div id="ggimg">'+
'<a href="/files/gczpr.apk" target="_blank"><img src="/app/videoappdown.jpg" /><\/a>'+
'<div class="ggclose" onclick="closeapp()">关  闭</div></div>');


document.write('<div class="footer"><div class="footer-grids"><div class="footer-top"><div class="footer-top-nav"><p>MailTo：guochanzipaire@gmail.com</p></div><div class="footer-bottom-nav"><p>警告: 此网站只适合十八岁或以上人士观看, 此网站内容可能令人反感；不可将此区域的内容派发，传阅，出售，出租，交给或者 借予年龄未满18岁的人士或将本网站内容向该人士出售，播放或放映，如果你是该影片的版权方所有者而要求删除影片的，请联系我们，我们会很快做出回复。</p><p>WARNING!By accessing the Website, you certify that you are at least 18 years of age or the age of majority under the laws of your state, province or country. We expressly and strictly limit use of the Website to adults over 18 years of age or the age of majority in the individual’s jurisdiction, whichever is greater. Anyone under this age is strictly forbidden from using the Website.</p></div></div></div></div>');
if($('#index_list').length > 0)
{
$('.footer-top').prepend('<div class="footer-top-nav" style="text-align:center;"><h4><a href="/files/gczpr.apk" style="color:#fff;" target="_blank">点击下载安卓APP客户端</a></h4></div><div class="footer-top-nav"><h4>友情链接：</h4><ul>'+
'<li><a href="https://第一福利导航.com/?zq">第一福利导航</a></li>'+
'<li><a href="https://jfgsou.com/?zq" target="_blank">集芳阁云搜</a></li>'+
'<li><a href="https://ctxdaohang.com/?zq" target="_blank">藏天下福利导航</a></li>'+
'<li><a href="https://www.bluedaohang.fun/" target="_blank">蓝色导航</a></li>'+
'<li><a href="https://每日福利导航.com/?zq" target="_blank">每日福利导航</a></li>'+
'<li><a href="https://huai123.me/?zq" target="_blank">坏123福利导航</a></li>'+
'<li><a href="https://fendianfuli.com/?zq" target="_blank">粉点福利导航</a></li>'+
'<li><a href="https://楼凤阁.com/?zq" target="_blank">楼凤阁找小姐</a></li>'+
'</ul></div>');
}
$('#navbar').append('<div class="navfb"><p><a href="/files/gczpr.apk" target="_blank">点击下载安卓APP客户端</a>  <a href="/地址发布器（口令：国产自拍热）.exe" target="_blank">地址发布器（口令：国产自拍热）</a></p></div>');