var url = location.href;

var arr = [{"link":"https://boao9333.com:32202","img":"https://yvxt2x.com/fc23fcd7f538483293ac6f51d194fea3.gif"},{"link":"https://245227.cc:8443/index.html?shareName=245227.cc","img":"https://kvemm.com/818f0140dc51e34a6d5f2b839a42376f.gif"},{"link":"https://t88855.com:6443?register=1","img":"https://kevinhewu.com/15b9b844a0304a2eb200b76bb89780f4.gif"},{"link":"https://v74563.com:7443?register=1","img":"https://3337253.com/73f312afd5a14c94b3155c87de9ebb3d.gif"},{"link":"https://x9428.com:5443?register=1","img":"https://3337253.com/6e349f605baf4877b74bb6a6852899ce.gif"},{"link":"https://6883t.com:8663/?register=1","img":"https://3338613.com/727a44e1dcef4bd9b84a4cdc6fdea9c1.gif"},{"link":"https://4481v.com:8663?register=1","img":"https://3335663.com/71e7f01c46ea4b22bb73b571f488b00b.gif"},{"link":"https://7895p.com:8663/?register=1","img":"https://3338635.com/ba3edc9c6f844f3bb586e12b90f7ca23.gif"},{"link":"http://vinbet.vip","img":"https://cdn.jsdelivr.net/gh/cloud-files/imgs/adamkoo-0826.gif"},{"link":"https://244294.cc:8443/index.html?shareName=244294.cc","img":"https://kvecc.com/7fb51e42d7fa69c6393a5a15a8845c68.gif"}];

var x = Math.round(Math.random()*arr.length);

if(url.indexOf('search')>0 || url.indexOf('content')>0)
{
	
	$('#contentlist').prepend('<a href="'+arr[x].link+'" style="margin-top:15px;" rel="external nofollow" target="_blank"><img src="'+arr[x].img+'" style="width:100%;max-height:200px;"></a>');
	
}
