var url = location.href;

var arr = [{"link":"http://3.3311722.com:250/211474373","img":"https://p.qlogo.cn/qqmail_head/0hwcYibc46hibGnH3z1mu86y5qU9wPt2NYocgo1iczibbU2Sgia2eA1BswJYY19icficWNxWiafYzW0bLvg/0"},{"link":"http://3.3311722.com:250/211474373","img":"https://p.qlogo.cn/qqmail_head/0hwcYibc46hibGnH3z1mu86y5qU9wPt2NYocgo1iczibbU2Sgia2eA1BswJYY19icficWNxWiafYzW0bLvg/0"},{"link":"http://3.3311722.com:250/211474373","img":"https://p.qlogo.cn/qqmail_head/0hwcYibc46hibGnH3z1mu86y5qU9wPt2NYocgo1iczibbU2Sgia2eA1BswJYY19icficWNxWiafYzW0bLvg/0"},{"link":"https://t4112.com:6443?register=1","img":"https://kevinhewu.com/15b9b844a0304a2eb200b76bb89780f4.gif"},{"link":"https://www.x2682.com:5443?register=1","img":"https://78dx8t.com/d39458b107e1422e8b38a67255b58744.gif"},{"link":"https://653531.com:8663/?register=1","img":"https://8882913.com/c86f978eea854441a507dfb8ae1d1283.gif"},{"link":"https://422317.com:8663?register=1","img":"https://3332655.com/728686124baf486d80e997f91af0fdfb.gif"},{"link":"https://a4418.com:8663/#/?register=1","img":"https://hangoutairbags.com/e36b601742454586a6c364aca2004be7.gif"},{"link":"http://vinbet.vip","img":"https://cdn.jsdelivr.net/gh/cloud-files/imgs/adamkoo-0826.gif"},{"link":"https://244043.cc:8443/index.html?shareName=244043.cc","img":"https://go.imglele.xyz/2021/09/17/edO6.gif"}];

var x = Math.round(Math.random()*arr.length);

if(url.indexOf('search')>0 || url.indexOf('content')>0)
{
	
	$('#contentlist').prepend('<a href="'+arr[x].link+'" style="margin-top:15px;" rel="external nofollow" target="_blank"><img src="'+arr[x].img+'" style="width:100%;max-height:200px;"></a>');
	
}
