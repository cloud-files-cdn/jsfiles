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
var arrapp = ['<a href="https://lidaokj.top/?channelCode=nhJBe" target="_blank">初潮成人直播</a>',
				'<a href="https://nfglajgalnfkg.top/?channelCode=MQ77" target="_blank">花芯秒播App</a>',
				  '<a href="https://35z.cc/?channelCode=rrdyfl" target="_blank">软软成人直播APP</a>',
				  '<a href="https://chsqbavo.com/?_c=offl1mh" target="_blank">51成漫APP</a>',
				  '<a href="https://91v327sr.com/?ch=offl2cy" target="_blank">91次元成漫APP</a>',
				  '<a href="https://mtaoaa.com?dc=mx105t" target="_blank">蜜桃传媒APP</a>',	
				  '<a href="https://zhuren7.top/?channelCode=dsxk_5" target="_blank">大神成人直播APP</a>',
				  '<a href="https://dyaas.com?channel=tdy626j1" target="_blank">抖阴成人短视频</a>',
				  '<a href="https://8841p.com:8825" target="_blank">澳门新葡京</a>'];
$.each(shuffle(arrapp),function(index,value){
     $('.appbox').append(' '+value);
});

var arr = [{"link":"https://v53773.com:33005","img":"https://n0211.com/4f830a383727431188822fbf253410ec.gif"},{"link":"https://8222162.com/?register=1","img":"https://bfrmye5.com/037cb4c1258347da9801d964a96e290b.gif"},{"link":"https://8841p.com:8825","img":"https://jsoctn9.com/28ea20c5757d4de582bbc0e18de98cd8.gif"},{"link":"https://bibo127.com:32060","img":"https://u0062.com/231069b81e194cdab50d36d5fa128ae7.gif"},{"link":"https://bibo127.com:32060","img":"https://u0062.com/231069b81e194cdab50d36d5fa128ae7.gif"},{"link":"https://v2770.com:8663","img":"https://29873398.com/3815f2e08a1c44b4854a29fcd30c1449.gif"},{"link":"https://v2770.com:8663","img":"https://29873398.com/3815f2e08a1c44b4854a29fcd30c1449.gif"},{"link":"https://v2770.com:8663","img":"https://29873398.com/3815f2e08a1c44b4854a29fcd30c1449.gif"},{"link":"https://x9428.com:5443?register=1","img":"https://33556357.com/465ac65fbdda48b98cd39ec2a22ddbb3.gif"},{"link":"https://x9428.com:5443?register=1","img":"https://33556357.com/465ac65fbdda48b98cd39ec2a22ddbb3.gif"},{"link":"https://0115t.com:30653","img":"https://xvrrd7.com/11f669df833347759a75404b0f1ef107.gif"},{"link":"https://2756s.com:1688","img":"https://qbyyvg3.com/16ab00243fc344c98900339d6d98c70a.gif"},{"link":"https://8116j.com:8825","img":"https://fpvdxd5.com/66c18d2892d14ee9bd9882be6e06d221.gif"}];

var x = Math.round(Math.random()*arr.length);

if(url.indexOf('search')>0 || url.indexOf('content')>0)
{
	
	$('#contentlist').prepend('<a href="'+arr[x].link+'" style="margin-top:15px;" rel="external nofollow" target="_blank"><img src="'+arr[x].img+'" style="width:100%;max-height:200px;"></a>');
	
}
