/*------底圖*/	
$(document).ready(function(){
	
 $('.bigbanner').slick({
  dots: true,
  infinite: true, //無限輪播
  speed: 500,
  fade: true,
  autoplay:true, //自動播放 
  cssEase: 'linear',
  dotsClass: 'slick-number', //原點可以換成數字
});
  //
  
  $('.cp_photo').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
  autoplay:true, //自動播放
  cssEase: 'linear',
  
  
});
//
$('.adbanner').slick({
 dots: false,//顯示原點
 speed: 3000,
  arrows:true, //左右箭頭
  autoplay:true,//自動播放
  infinite: true, //無限輪播
  slidesToShow: 6,
  slidesToScroll: 6,
  responsive: [
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 5,
    }
  },
  {
    breakpoint: 980,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4,
    }
  },
  {
    breakpoint: 690,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  },
  {
    breakpoint: 550,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 420,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  });	


});


