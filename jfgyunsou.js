var url = location.href;

var arr = [{"link":"http://250.rookiego.com:250/210621285","img":"https://cdn.jsdelivr.net/gh/cloud-files/imgs/hengfu-xpj.gif"},{"link":"http://151.rookiego.com:151/81909425","img":"https://cdn.jsdelivr.net/gh/cloud-files/imgs/hengfu-jinsha.gif"},{"link":"https://t4112.com:6443?register=1","img":"https://kevinhewu.com/15b9b844a0304a2eb200b76bb89780f4.gif"},{"link":"https://v34581.com:7443?register=1","img":"https://j872jd.com/51676facfd7245648f7c38d1ad1459e8.gif"}];

var x = Math.round(Math.random()*4);

if(url.indexOf('search')>0 || url.indexOf('content')>0)
{
	
	$('#contentlist').prepend('<a href="'+arr[x].link+'" style="margin-top:15px;" rel="external nofollow" target="_blank"><img src="'+arr[x].img+'" style="width:100%;"></a>');
	//document.write('<script src="https://www.govgaungzhou.cn:4443/ty/x-5011-33.js"><\/script>');
}

//$('.b-listtab-main').eq(0).after('<a style="margin-top:15px;" href="https://tyc85a.com/" target="_blank"><img src="https://www.hualigs.cn/image/609394e840a1e.jpg" style="width:100%;"  /></a>');