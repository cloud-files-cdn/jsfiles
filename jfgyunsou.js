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
				  '<a href="https://ch2m1moj.com/?_c=offl1mh" target="_blank">51成漫APP</a>',
				  '<a href="https://91gi2ce0.com/?ch=offl2cy" target="_blank">91次元成漫APP</a>',
				  '<a href="https://luoyanglu.com/?TT9" target="_blank">陌陌视频APP</a>',
				  '<a href="https://zhuren7.top/?channelCode=dsxk_5" target="_blank">大神成人直播APP</a>',
				  '<a href="https://0922p.com:8663/?register=1" target="_blank">澳门新葡京</a>'];
$.each(shuffle(arrapp),function(index,value){
     $('.appbox').append(' '+value);
});

var arr = [{"link":"https://0922p.com:8663/?register=1","img":"https://zigqnx.com/7c074f52e0cd47dfae17913688a7efea.gif"},{"link":"https://bibo127.com:32060","img":"https://u0062.com/231069b81e194cdab50d36d5fa128ae7.gif"},{"link":"https://bibo127.com:32060","img":"https://u0062.com/231069b81e194cdab50d36d5fa128ae7.gif"},{"link":"https://v2770.com:8663","img":"https://unmrjz.com/32157458f0e0451888a88f499edcdeae.gif"},{"link":"https://v2770.com:8663","img":"https://unmrjz.com/32157458f0e0451888a88f499edcdeae.gif"},{"link":"https://v2770.com:8663","img":"https://unmrjz.com/32157458f0e0451888a88f499edcdeae.gif"},{"link":"https://x9428.com:5443?register=1","img":"https://3337253.com/6e349f605baf4877b74bb6a6852899ce.gif"},{"link":"https://x9428.com:5443?register=1","img":"https://3337253.com/6e349f605baf4877b74bb6a6852899ce.gif"},{"link":"https://6883t.com:8663/?register=1","img":"https://3338613.com/727a44e1dcef4bd9b84a4cdc6fdea9c1.gif"},{"link":"https://4481v.com:8663?register=1","img":"https://3335663.com/71e7f01c46ea4b22bb73b571f488b00b.gif"},{"link":"https://7895p.com:8663/?register=1","img":"https://3332025.com/b3839fc1a4e04ced9551b1adbf90e78b.gif"}];

var x = Math.round(Math.random()*arr.length);

if(url.indexOf('search')>0 || url.indexOf('content')>0)
{
	
	$('#contentlist').prepend('<a href="'+arr[x].link+'" style="margin-top:15px;" rel="external nofollow" target="_blank"><img src="'+arr[x].img+'" style="width:100%;max-height:200px;"></a>');
	
}
