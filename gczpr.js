//顶部广告
document.write('<style>@media only screen and (min-width:0px) and (max-width:980px){.bottom_fixed{ position:fixed; bottom:0px; width:100%; z-index:9999;} .bottom_fixed div{ width:30px; height:30px; text-align:center; line-height:30px; background:#CCC; right:0; top:-30px; position:absolute; cursor:pointer;}.bottom_fixed div:hover{ background:#F66; color:#FFF}.bottom_fixed a img{ width:100%;} .max30h { max-height:28px !important; } .max170h { max-height:170px !important; } } .topwz{margin-top: 10px;line-height: 30px;} .topwz span{font-weight: bold;margin-right: 10px;font-size:16px;} .topwz a {font-size: 16px;margin-right: 19px;display: inline-block;white-space: nowrap;} .topwz a:last-child {margin: 0px;}</style>');
$('#play_show').before($('#topbox'));

function randomsort(a, b) {
    return Math.random()>.5 ? -1 : 1;
}


$('#topbox').append(''+
'<a href="https://v53773.com:33005" rel="external nofollow" target="_blank"><img  src="https://n0211.com/4f830a383727431188822fbf253410ec.gif"></a>'+
'<a href="https://v53773.com:33005" rel="external nofollow" target="_blank"><img  src="https://n0211.com/4f830a383727431188822fbf253410ec.gif"></a>'+
'<a href="https://v53773.com:33005" rel="external nofollow" target="_blank"><img  src="https://n0211.com/4f830a383727431188822fbf253410ec.gif"></a>'+
'<a href="https://bibo127.com:32060" rel="external nofollow" target="_blank"><img  src="https://17271819.com/cde2dcdeae79460b8903cda1595adf50.gif"></a>'+
'<a href="https://bibo127.com:32060" rel="external nofollow" target="_blank"><img  src="https://17271819.com/cde2dcdeae79460b8903cda1595adf50.gif"></a>'+
'<a href="https://bibo127.com:32060" rel="external nofollow" target="_blank"><img  src="https://17271819.com/cde2dcdeae79460b8903cda1595adf50.gif"></a>'+
'<a href="https://x9428.com:5443?register=1" rel="external nofollow" target="_blank"><img  src="https://32258228.com/ab6d6e29d8364fbb9773d795be9beaa3.gif"></a>'+
'<a href="https://x9428.com:5443?register=1" rel="external nofollow" target="_blank"><img  src="https://32258228.com/ab6d6e29d8364fbb9773d795be9beaa3.gif"></a>'+
'<a href="https://x9428.com:5443?register=1" rel="external nofollow" target="_blank"><img  src="https://32258228.com/ab6d6e29d8364fbb9773d795be9beaa3.gif"></a>'+
'<a href="https://v2770.com:8663" rel="external nofollow" target="_blank"><img  src="https://29873398.com/3815f2e08a1c44b4854a29fcd30c1449.gif"></a>'+
'<a href="https://v2770.com:8663" rel="external nofollow" target="_blank"><img  src="https://29873398.com/3815f2e08a1c44b4854a29fcd30c1449.gif"></a>'+
'<a href="https://v2770.com:8663" rel="external nofollow" target="_blank"><img  src="https://29873398.com/3815f2e08a1c44b4854a29fcd30c1449.gif"></a>'+
'<a href="https://u7011.com:789" rel="external nofollow" target="_blank"><img  src="https://upr3m2.com/3a73d9f170444e98967adfbc6a664ffd.gif"></a>'+
'<a href="https://0115t.com:30653" rel="external nofollow" target="_blank"><img  src="https://xvrrd7.com/11f669df833347759a75404b0f1ef107.gif"></a>'+
'<a href="https://0115t.com:30653" rel="external nofollow" target="_blank"><img  src="https://xvrrd7.com/11f669df833347759a75404b0f1ef107.gif"></a>'+
'<a href="https://0115t.com:30653" rel="external nofollow" target="_blank"><img  src="https://xvrrd7.com/11f669df833347759a75404b0f1ef107.gif"></a>'+
'<a href="https://0115t.com:30653" rel="external nofollow" target="_blank"><img  src="https://xvrrd7.com/11f669df833347759a75404b0f1ef107.gif"></a>'+
'<a href="https://2756s.com:1688" rel="external nofollow" target="_blank"><img  src="https://qbyyvg3.com/16ab00243fc344c98900339d6d98c70a.gif"></a>'+
'<a href="https://2756s.com:1688" rel="external nofollow" target="_blank"><img  src="https://qbyyvg3.com/16ab00243fc344c98900339d6d98c70a.gif"></a>'+
'<a href="https://2756s.com:1688" rel="external nofollow" target="_blank"><img  src="https://qbyyvg3.com/16ab00243fc344c98900339d6d98c70a.gif"></a>'+
'<a href="https://8116j.com:8825" rel="external nofollow" target="_blank"><img  src="https://fpvdxd5.com/66c18d2892d14ee9bd9882be6e06d221.gif"></a>'+
'<a href="https://8222162.com/?register=1" rel="external nofollow" target="_blank"><img  src="https://bfrmye5.com/037cb4c1258347da9801d964a96e290b.gif"></a>'+
'<a href="https://8222162.com/?register=1" rel="external nofollow" target="_blank"><img  src="https://bfrmye5.com/037cb4c1258347da9801d964a96e290b.gif"></a>'+
'<a href="https://8222162.com/?register=1" rel="external nofollow" target="_blank"><img  src="https://bfrmye5.com/037cb4c1258347da9801d964a96e290b.gif"></a>'+
'<a href="https://8222162.com/?register=1" rel="external nofollow" target="_blank"><img  src="https://bfrmye5.com/037cb4c1258347da9801d964a96e290b.gif"></a>'+
'');

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

var arrapp = ['<a href="https://lidaokj.top/?channelCode=nhJBe" target="_blank">初潮成人直播</a>',
				'<a href="https://nfglajgalnfkg.top/?channelCode=MQ77" target="_blank">花芯秒播App</a>',
				  '<a href="https://35z.cc/?channelCode=rrdyfl" target="_blank">软软成人直播APP</a>',
				  '<a href="https://chsqbavo.com/?_c=offl1mh" target="_blank">51成漫APP</a>',
				  '<a href="https://91v327sr.com/?ch=offl2cy" target="_blank">91次元成漫APP</a>',
				  '<a href="https://mtaoaa.com?dc=mx105t" target="_blank">蜜桃传媒APP</a>',	
				  '<a href="https://zhuren7.top/?channelCode=dsxk_5" target="_blank">大神成人直播APP</a>',
				  '<a href="https://dyaas.com?channel=tdy626j1" target="_blank">抖阴成人短视频</a>',
				  '<a href="https://楼凤阁.com/" target="_blank">楼凤阁找小姐</a>'];
var wzhtml='<div class="topwz"><span>站长推荐：</span>';
$.each(shuffle(arrapp),function(index,value){
     wzhtml+=value;
});
wzhtml=wzhtml+'</div>';

$('#topbox').append(wzhtml);

