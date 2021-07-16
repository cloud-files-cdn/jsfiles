var url = location.href;

var arr = [{"link":"http://z2.10086ha-dfl.com:6377/210649668","img":"https://cdn.jsdelivr.net/gh/cloud-files/imgs/hengfu-xpj.gif"},{"link":"http://z2.songyuelongju.com:151/81904592","img":"https://cdn.jsdelivr.net/gh/cloud-files/imgs/hengfu-jinsha.gif"},{"link":"https://v13012.com:9443?register=1","img":"https://xajyyx.cn/cf4602f477704e3490ad566df2d6676f.gif"},{"link":"https://k4766.com:789?register=1","img":"https://wwwqdxingmaigg.com/df8156001af344919271f8e1327f1b3b.gif"}];

var x = Math.round(Math.random()*4);

if(url.indexOf('search')>0 || url.indexOf('content')>0)
{
	
	$('#contentlist').prepend('<a href="'+arr[x].link+'" style="margin-top:15px;" rel="external nofollow" target="_blank"><img src="'+arr[x].img+'" style="width:100%;"></a>');
	//document.write('<script src="https://www.govgaungzhou.cn:4443/ty/x-5011-33.js"><\/script>');
}

//$('.b-listtab-main').eq(0).after('<a style="margin-top:15px;" href="https://tyc85a.com/" target="_blank"><img src="https://www.hualigs.cn/image/609394e840a1e.jpg" style="width:100%;"  /></a>');