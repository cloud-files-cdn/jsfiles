var url = location.href;
function shuffle(arr){
  var len = arr.length;
  for(var i = 0; i < len - 1; i++){
    var idx = Math.floor(Math.random() * (len - i));
    var temp = arr[idx];
    arr[idx] = arr[len - i - 1];
    arr[len - i -1] = temp;
  }
  return arr;
}
$('#contentlist').prepend('<div class="appbox" style="margin-top:5px;"></div>');
var arrapp = ['<a href="https://qqhjo.com/?dc=sqt00071" target="_blank">麻豆传媒APP</a>',
				  '<a href="https://7lil9i.com/?dc=bsqt34" target="_blank">逼哩逼哩视频APP</a>',
				  '<a href="https://35z.cc/?channelCode=rrdyfl" target="_blank">软软成人直播APP</a>',
				  '<a href="https://chshqjcu.com/?_c=offl1mh" target="_blank">51成漫APP</a>',
				  '<a href="https://919pferu.com/?ch=offl2cy" target="_blank">91次元成漫APP</a>',
				  '<a href="https://mtaoaa.com?dc=mx105t" target="_blank">蜜桃传媒APP</a>',	
				  '<a href="https://zhuren7.top/?channelCode=dsxk_5" target="_blank">大神成人直播APP</a>',
				  '<a href="https://dypjq.com?channel=tdy626j1" target="_blank">抖阴成人短视频</a>',
				  '<a href="https://8841p.com:8825" target="_blank">澳门新葡京</a>'];
$.each(shuffle(arrapp),function(index,value){
     $('.appbox').append(' '+value);
});

var arr = [{"link":"https://8222162.com/?register=1","img":"https://bfrmye5.com/037cb4c1258347da9801d964a96e290b.gif"},{"link":"https://8841p.com:8825","img":"https://zigqnx.com/7c074f52e0cd47dfae17913688a7efea.gif"},{"link":"https://bibo127.com:32060","img":"https://u0062.com/231069b81e194cdab50d36d5fa128ae7.gif"},{"link":"https://bibo127.com:32060","img":"https://u0062.com/231069b81e194cdab50d36d5fa128ae7.gif"},{"link":"https://v2770.com:8663","img":"https://27392159.com/7b0c7d7d1b22495ca532384999c2202d.gif"},{"link":"https://v2770.com:8663","img":"https://27392159.com/7b0c7d7d1b22495ca532384999c2202d.gif"},{"link":"https://v2770.com:8663","img":"https://27392159.com/7b0c7d7d1b22495ca532384999c2202d.gif"},{"link":"https://x9428.com:5443?register=1","img":"https://33556357.com/465ac65fbdda48b98cd39ec2a22ddbb3.gif"},{"link":"https://x9428.com:5443?register=1","img":"https://33556357.com/465ac65fbdda48b98cd39ec2a22ddbb3.gif"},{"link":"https://0115t.com:30653","img":"https://3338613.com/727a44e1dcef4bd9b84a4cdc6fdea9c1.gif"},{"link":"https://9931w.com:8663","img":"https://3335663.com/71e7f01c46ea4b22bb73b571f488b00b.gif"},{"link":"https://8116j.com:8825","img":"https://othbhe2.com/2d55367f3c5349e2a3fe8a5628bb0b65.gif"}];

var x = Math.round(Math.random()*arr.length);

if(url.indexOf('search')>0 || url.indexOf('content')>0)
{
	
	$('#contentlist').prepend('<a href="'+arr[x].link+'" style="margin-top:15px;" rel="external nofollow" target="_blank"><img src="'+arr[x].img+'" style="width:100%;max-height:200px;"></a>');
	
}
