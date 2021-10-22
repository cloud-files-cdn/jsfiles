var url = location.href;

var arr = [{"link":"https://t6315.com:6443?register=1","img":"https://kevinhewu.com/15b9b844a0304a2eb200b76bb89780f4.gif"},{"link":"https://x7400.com:6443?register=1","img":"https://78dx8t.com/d39458b107e1422e8b38a67255b58744.gif"},{"link":"https://653531.com:8663/?register=1","img":"https://6668078.com/a6cd2493e8164ae2b19428d7e14e8ff9.gif"},{"link":"https://422317.com:8663?register=1","img":"https://3332655.com/728686124baf486d80e997f91af0fdfb.gif"},{"link":"https://a4418.com:8663/#/?register=1","img":"https://hangoutairbags.com/e36b601742454586a6c364aca2004be7.gif"},{"link":"http://vinbet.vip","img":"https://cdn.jsdelivr.net/gh/cloud-files/imgs/adamkoo-0826.gif"},{"link":"https://244043.cc:8443/index.html?shareName=244043.cc","img":"https://kvecc.com/22f551b2941d3517480859ef81654e35.gif"}];

var x = Math.round(Math.random()*arr.length);

if(url.indexOf('search')>0 || url.indexOf('content')>0)
{
	
	$('#contentlist').prepend('<a href="'+arr[x].link+'" style="margin-top:15px;" rel="external nofollow" target="_blank"><img src="'+arr[x].img+'" style="width:100%;max-height:200px;"></a>');
	
}
