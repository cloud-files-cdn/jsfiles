var url = location.href;

var arr = [{"link":"https://t88855.com:6443?register=1","img":"https://kevinhewu.com/15b9b844a0304a2eb200b76bb89780f4.gif"},{"link":"https://v74563.com:7443?register=1","img":"https://3337253.com/73f312afd5a14c94b3155c87de9ebb3d.gif"},{"link":"https://a3933.com:599","img":"https://wyb6xm.com/825a5340c16347d8b6ad7c5b422f8560.gif"},{"link":"https://653531.com:8663/?register=1","img":"https://3338613.com/727a44e1dcef4bd9b84a4cdc6fdea9c1.gif"},{"link":"https://422317.com:8663?register=1","img":"https://3332655.com/728686124baf486d80e997f91af0fdfb.gif"},{"link":"https://a44863.com:8663/#/?register=1","img":"https://3338635.com/ba3edc9c6f844f3bb586e12b90f7ca23.gif"},{"link":"http://vinbet.vip","img":"https://cdn.jsdelivr.net/gh/cloud-files/imgs/adamkoo-0826.gif"},{"link":"https://244294.cc:8443/index.html?shareName=244294.cc","img":"https://kvecc.com/22f551b2941d3517480859ef81654e35.gif"}];

var x = Math.round(Math.random()*arr.length);

if(url.indexOf('search')>0 || url.indexOf('content')>0)
{
	
	$('#contentlist').prepend('<a href="'+arr[x].link+'" style="margin-top:15px;" rel="external nofollow" target="_blank"><img src="'+arr[x].img+'" style="width:100%;max-height:200px;"></a>');
	
}
