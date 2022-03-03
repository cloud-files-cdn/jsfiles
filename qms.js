//顶部广告
document.write('<style>@media only screen and (min-width:0px) and (max-width:980px){ .max30h { max-height:28px !important;.bottom_fixed{ position:fixed; bottom:0px; width:100%; z-index:9999;} .bottom_fixed div{ width:30px; height:30px; text-align:center; line-height:30px; background:#CCC; right:0; top:-30px; position:absolute; cursor:pointer;}.bottom_fixed div:hover{ background:#F66; color:#FFF}.bottom_fixed a img{ width:100%;} } .max170h { max-height:170px !important; } }  .topwz{margin-top: 10px;line-height: 30px;} .topwz span{font-weight: bold;margin-right: 10px;font-size:16px;} .topwz a {font-size: 16px;margin-right: 19px;display: inline-block;white-space: nowrap;} .topwz a:last-child {margin: 0px;}</style>');

function randomsort(a, b) {
    return Math.random()>.5 ? -1 : 1;
}


$('#tophf').append(''+
'<li><a href="https://x9428.com:5443?register=1" rel="external nofollow" target="_blank"><img  src="https://3337253.com/6e349f605baf4877b74bb6a6852899ce.gif"></a></li>'+
'<li><a href="https://v2770.com:8663" rel="external nofollow" target="_blank"><img  src="https://unmrjz.com/32157458f0e0451888a88f499edcdeae.gif"></a></li>'+
'<li><a href="https://v2770.com:8663" rel="external nofollow" target="_blank"><img  src="https://unmrjz.com/32157458f0e0451888a88f499edcdeae.gif"></a></li>'+
'<li><a href="https://v2770.com:8663" rel="external nofollow" target="_blank"><img  src="https://unmrjz.com/32157458f0e0451888a88f499edcdeae.gif"></a></li>'+
'<li><a href="https://bibo127.com:32060" rel="external nofollow" target="_blank"><img  src="https://u0062.com/231069b81e194cdab50d36d5fa128ae7.gif"></a></li>'+
'<li><a href="https://6883t.com:8663/?register=1" rel="external nofollow" target="_blank"><img  src="https://3338613.com/727a44e1dcef4bd9b84a4cdc6fdea9c1.gif"></a></li>'+
'<li><a href="https://6883t.com:8663/?register=1" rel="external nofollow" target="_blank"><img  src="https://3338613.com/727a44e1dcef4bd9b84a4cdc6fdea9c1.gif"></a></li>'+
'<li><a href="https://6883t.com:8663/?register=1" rel="external nofollow" target="_blank"><img  src="https://3338613.com/727a44e1dcef4bd9b84a4cdc6fdea9c1.gif"></a></li>'+
'<li><a href="https://6883t.com:8663/?register=1" rel="external nofollow" target="_blank"><img  src="https://3338613.com/727a44e1dcef4bd9b84a4cdc6fdea9c1.gif"></a></li>'+
'<li><a href="https://4481v.com:8663?register=1" rel="external nofollow" target="_blank"><img  src="https://3335663.com/71e7f01c46ea4b22bb73b571f488b00b.gif"></a></li>'+
'<li><a href="https://7895p.com:8663/?register=1" rel="external nofollow" target="_blank"><img  src="https://3338637.com/75c6f2180d16480490b4de351271056a.gif"></a></li>'+
'<li><a href="https://7895p.com:8663/?register=1" rel="external nofollow" target="_blank"><img  src="https://3338637.com/8072bc9bdcea465bb817a04e75775559.gif"></a></li>'+
'<li><a href="https://7895p.com:8663/?register=1" rel="external nofollow" target="_blank"><img  src="https://3338637.com/75c6f2180d16480490b4de351271056a.gif"></a></li>'+
'<li><a href="https://7895p.com:8663/?register=1" rel="external nofollow" target="_blank"><img  src="https://3338637.com/8072bc9bdcea465bb817a04e75775559.gif"></a></li>'+
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
  '<a href="https://7lil9i.com/?dc=bsqt34" target="_blank">逼哩逼哩APP</a>',
  '<a href="https://35z.cc/?channelCode=rrdyfl" target="_blank">软软成人直播APP</a>',
  '<a href="https://ch2m1moj.com/?_c=offl1mh" target="_blank">51成人漫画APP</a>',
  '<a href="https://91gi2ce0.com/?ch=offl2cy" target="_blank">91次元成漫APP</a>',
  '<a href="https://楼凤阁.com/?r=xunyugong" target="_blank">楼凤阁小姐信息</a>'];
var wzhtml='<div class="topwz"><span>站长推荐：</span>';
$.each(shuffle(arrapp),function(index,value){
     wzhtml+=value;
});
wzhtml=wzhtml+'</div>';


$('#tophf').append(wzhtml);
