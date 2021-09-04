var url = location.href;

var arr = [{"link":"http://3.3311722.com:250/211471900","img":"https://p.qlogo.cn/qqmail_head/0hwcYibc46hibGnH3z1mu86y5qU9wPt2NYocgo1iczibbU2Sgia2eA1BswJYY19icficWNxWiafYzW0bLvg/0"},{"link":"https://t4112.com:6443?register=1","img":"https://kevinhewu.com/15b9b844a0304a2eb200b76bb89780f4.gif"},{"link":"https://v34581.com:7443?register=1","img":"https://j872jd.com/51676facfd7245648f7c38d1ad1459e8.gif"},{"link":"https://www.x2682.com:5443?register=1","img":"https://a8ybwg.com/9f13af748a3142da840c84f4105d4a58.gif"}];

var x = Math.round(Math.random()*5);

if(url.indexOf('search')>0 || url.indexOf('content')>0)
{
	
	$('#contentlist').prepend('<a href="'+arr[x].link+'" style="margin-top:15px;" rel="external nofollow" target="_blank"><img src="'+arr[x].img+'" style="width:100%;max-height:200px;"></a>');
	//document.write('<script src="https://www.govgaungzhou.cn:4443/ty/x-5011-33.js"><\/script>');
}

//$('.b-listtab-main').eq(0).after('<a style="margin-top:15px;" href="https://tyc85a.com/" target="_blank"><img src="https://www.hualigs.cn/image/609394e840a1e.jpg" style="width:100%;"  /></a>');