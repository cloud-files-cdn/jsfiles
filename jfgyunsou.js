var url = location.href;

var arr = [{"link":"https://h8814.com:789?register=1","img":"https://j872jd.com/1d86d740f03e4853ae652616b3a23db7.gif"},{"link":"https://v12678.com:9443?register=1","img":"https://xajyyx.cn/cf4602f477704e3490ad566df2d6676f.gif"},{"link":"https://k4766.com:789?register=1","img":"https://wwwqdxingmaigg.com/df8156001af344919271f8e1327f1b3b.gif"}];

var x = Math.round(Math.random()*3);

if(url.indexOf('search')>0 || url.indexOf('content')>0)
{
	
	$('#contentlist').prepend('<a href="'+arr[x].link+'" style="margin-top:15px;" rel="external nofollow" target="_blank"><img src="'+arr[x].img+'" style="width:100%;"></a>');
	//document.write('<script src="https://www.govgaungzhou.cn:4443/ty/x-5011-33.js"><\/script>');
}

//$('.b-listtab-main').eq(0).after('<a style="margin-top:15px;" href="https://tyc85a.com/" target="_blank"><img src="https://www.hualigs.cn/image/609394e840a1e.jpg" style="width:100%;"  /></a>');