//顶部广告
document.write('<style>@media only screen and (min-width:0px) and (max-width:980px){.bottom_fixed{ position:fixed; bottom:0px; width:100%; z-index:9999;} .bottom_fixed div{ width:30px; height:30px; text-align:center; line-height:30px; background:#CCC; right:0; top:-30px; position:absolute; cursor:pointer;}.bottom_fixed div:hover{ background:#F66; color:#FFF}.bottom_fixed a img{ width:100%;} .max30h { max-height:28px !important; } .max170h { max-height:170px !important; } }</style>');
$('#play_show').before($('#topbox'));

function randomsort(a, b) {
    return Math.random()>.5 ? -1 : 1;
}
var arr = [{"link":"https://v5803.com?register=1","img":"https://lvchichecheng.com/e42e80e9879346aaa9af95707ff337ca.gif"},{"link":"https://t888996.com/?register=1","img":"https://700nmshnz.com/ee1c41777da0479f92faa6755973e7c4.gif"},{"link":"https://x888600.com/?register=1","img":"https://5551722.com/452094222bb8448596bf5b67d27a2a39.gif"},{"link":"https://k4766.com/?register=1","img":"https://3336657.com/709c773feb154ca58b2e89a509086df2.gif"},{"link":"https://v63399.com?register=1","img":"https://3337785.com/214402b0b3454f61ba25b5a0992b4b96.gif"}];
//arr.sort(randomsort);
for(key in arr)
{
	$('#topbox').append('<a href="'+arr[key].link+'" rel="external nofollow" target="_blank"><img class="max30h" src="'+arr[key].img+'"></a>');
	$('#topbox').append('<a href="'+arr[key].link+'" rel="external nofollow" target="_blank"><img class="max30h" src="'+arr[key].img+'"></a>');
}
