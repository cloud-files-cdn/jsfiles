//顶部广告
document.write('<style>@media only screen and (min-width:0px) and (max-width:980px){ .max30h { max-height:28px !important;} .bottom_fixed{ position:fixed; bottom:0px; width:100%; z-index:9999;} .bottom_fixed div{ width:30px; height:30px; text-align:center; line-height:30px; background:#CCC; right:0; top:-30px; position:absolute; cursor:pointer;}.bottom_fixed div:hover{ background:#F66; color:#FFF}.bottom_fixed a img{ width:100%;}  .max170h { max-height:170px !important; }}</style>');
$('.vodbody').before('<div id="ad_top_cjg" class="topad wr"></div>');
function randomsort(a, b) {
    return Math.random()>.5 ? -1 : 1;
}

//$('#ad_top_cjg').append('<a href="https://h8814.com:789?register=1" rel="external nofollow" target="_blank"><img src="https://ahwangtao.com/34f64f19ad9443acb79afe8e36f7fb04.gif"></a>');
/*
var arr = [{"link":"https://h8814.com:789?register=1","img":"https://j872jd.com/1d86d740f03e4853ae652616b3a23db7.gif"},{"link":"https://v13012.com:9443?register=1","img":"https://xajyyx.cn/cf4602f477704e3490ad566df2d6676f.gif"},{"link":"https://k4766.com:789?register=1","img":"https://wwwqdxingmaigg.com/df8156001af344919271f8e1327f1b3b.gif"}];
//arr.sort(randomsort);

for(key in arr)
{
	$('#ad_top_cjg').append('<a href="'+arr[key].link+'" rel="external nofollow" target="_blank"><img  src="'+arr[key].img+'"></a>');
}
*/
$('#ad_top_cjg').append(''+
'<a href="https://h8814.com:789?register=1" rel="external nofollow" target="_blank"><img  src="https://j872jd.com/1d86d740f03e4853ae652616b3a23db7.gif"></a>'+
'<a href="https://v13012.com:9443?register=1" rel="external nofollow" target="_blank"><img  src="https://xajyyx.cn/cf4602f477704e3490ad566df2d6676f.gif"></a>'+
'<a href="https://k4766.com:789?register=1" rel="external nofollow" target="_blank"><img  src="https://wwwqdxingmaigg.com/df8156001af344919271f8e1327f1b3b.gif"></a>'+
'<a href="https://v01255.com:4494/?register=1" rel="external nofollow" target="_blank"><img  src="https://3336653.com/61d94745f4504ce48014b0df6184f759.gif"></a>'+
'');
/*
document.write('<div class="bottom_fixed"><div id="dipiao" onclick="$(\'.bottom_fixed\').hide();">X</div></div>');

var ad = [{"img":"https://suzjinji.com/e3a619294b3e47b3bdbd02dd73afc396.gif","link":"https://t888996.com:789?register=1"},{"img":"https://bjytdqwx.com/fa987933d36d46df841fd40dfd2e0f28.jpg","link":"https://v13012.com:9443?register=1"},{"img":"https://suzjinji.com/e3a619294b3e47b3bdbd02dd73afc396.gif","link":"https://x28885.com:789?register=1"}];
var x = Math.floor(Math.random()*3);
$('#dipiao').before('<a href="'+ad[x].link+'" rel="nofollow" target="_blank"><img src="'+ad[x].img+'"></a>');
$('body').height($('body').height()+200);
*/