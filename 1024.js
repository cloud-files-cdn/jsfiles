document.write('<style>#ad_top{margin:10px auto !important;} #ad_top img{width:100%;} @media only screen and (min-width:0px) and (max-width:980px){.bottom_fixed{ position:fixed; bottom:0px; width:100%; z-index:9999;} .bottom_fixed div{ width:30px; height:30px; text-align:center; line-height:30px; background:#CCC; right:0; top:-30px; position:absolute; cursor:pointer;}.bottom_fixed div:hover{ background:#F66; color:#FFF}.bottom_fixed a img{ width:100%;} .max30h { max-height:28px !important; } .max170h { max-height:170px !important; }}.topwz{margin-top: 10px;line-height: 30px;} .topwz span{font-weight: bold;margin-right: 10px;font-size:16px;} .topwz a {font-size: 16px;margin-right: 19px;display: inline-block;white-space: nowrap;} .topwz a:last-child {margin: 0px;}</style>');


function randomsort(a, b) {
    return Math.random()>.5 ? -1 : 1;
}

$('#ad_top').append(''+
'<a href="https://x9428.com:5443?register=1" rel="external nofollow" target="_blank"><img  src="https://3337253.com/6e349f605baf4877b74bb6a6852899ce.gif"></a>'+
'<a href="https://v2770.com:8663" rel="external nofollow" target="_blank"><img  src="https://unmrjz.com/32157458f0e0451888a88f499edcdeae.gif"></a>'+
'<a href="https://v2770.com:8663" rel="external nofollow" target="_blank"><img  src="https://unmrjz.com/32157458f0e0451888a88f499edcdeae.gif"></a>'+
'<a href="https://v2770.com:8663" rel="external nofollow" target="_blank"><img  src="https://unmrjz.com/32157458f0e0451888a88f499edcdeae.gif"></a>'+
'<a href="https://bibo127.com:32060" rel="external nofollow" target="_blank"><img  src="https://u0062.com/231069b81e194cdab50d36d5fa128ae7.gif"></a>'+
'<a href="https://u7011.com:789" rel="external nofollow" target="_blank"><img  src="https://upr3m2.com/3a73d9f170444e98967adfbc6a664ffd.gif"></a>'+
'<a href="https://6883t.com:8663/?register=1" rel="external nofollow" target="_blank"><img  src="https://3338613.com/727a44e1dcef4bd9b84a4cdc6fdea9c1.gif"></a>'+
'<a href="https://6883t.com:8663/?register=1" rel="external nofollow" target="_blank"><img  src="https://3338613.com/727a44e1dcef4bd9b84a4cdc6fdea9c1.gif"></a>'+
'<a href="https://6883t.com:8663/?register=1" rel="external nofollow" target="_blank"><img  src="https://3338613.com/727a44e1dcef4bd9b84a4cdc6fdea9c1.gif"></a>'+
'<a href="https://6883t.com:8663/?register=1" rel="external nofollow" target="_blank"><img  src="https://3338613.com/727a44e1dcef4bd9b84a4cdc6fdea9c1.gif"></a>'+
'<a href="https://4481v.com:8663?register=1" rel="external nofollow" target="_blank"><img  src="https://3335663.com/71e7f01c46ea4b22bb73b571f488b00b.gif"></a>'+
'<a href="https://7895p.com:8663/?register=1" rel="external nofollow" target="_blank"><img  src="https://3338637.com/75c6f2180d16480490b4de351271056a.gif"></a>'+
'<a href="https://7895p.com:8663/?register=1" rel="external nofollow" target="_blank"><img  src="https://3338637.com/8072bc9bdcea465bb817a04e75775559.gif"></a>'+
'<a href="https://7895p.com:8663/?register=1" rel="external nofollow" target="_blank"><img  src="https://3338637.com/75c6f2180d16480490b4de351271056a.gif"></a>'+
'<a href="https://7895p.com:8663/?register=1" rel="external nofollow" target="_blank"><img  src="https://3338637.com/8072bc9bdcea465bb817a04e75775559.gif"></a>'+
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

var arrapp = ['<a href="https://qqhjo.com/?dc=sqt00071" target="_blank">麻豆传媒APP</a>',
				  '<a href="https://7lil9i.com/?dc=bsqt34" target="_blank">逼哩逼哩视频APP</a>',
				  '<a href="https://35z.cc/?channelCode=rrdyfl" target="_blank">软软成人直播APP</a>',
				  '<a href="https://ch2m1moj.com/?_c=offl1mh" target="_blank">51成漫APP</a>',
				  '<a href="https://91gi2ce0.com/?ch=offl2cy" target="_blank">91次元成漫APP</a>',
				  '<a href="https://luoyanglu.com/?TT9" target="_blank">陌陌视频APP</a>',
				  '<a href="https://zhuren7.top/?channelCode=dsxk_5" target="_blank">大神成人直播APP</a>',
				  '<a href="https://楼凤阁.com/" target="_blank">楼凤阁找小姐</a>'];
var wzhtml='<div class="topwz"><span>站长推荐：</span>';
$.each(shuffle(arrapp),function(index,value){
     wzhtml+=value;
});
wzhtml=wzhtml+'</div>';


$('#ad_top').append(wzhtml);


