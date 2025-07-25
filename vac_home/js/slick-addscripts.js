/*------底圖*/
$(document).ready(function () {
  //adbanner
  if ($('.adbanner').length > 0) {
    $('.adbanner').slick({
      dots: false, //顯示原點
      speed: 3000,
      arrows: true, //左右箭頭
      autoplay: true, //自動播放
      infinite: true, //無限輪播
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 980,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 690,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
      customPaging: function (slider, i) {
        var title = $(slider.$slides[i]).find('img').attr('alt').trim();
        return $('<button type="button" aria-label="' + title + '"/>').text(title);
      },
    });
    let checkState = true;
    // WCAG: Add accessible toggle for play/pause
    $('.adbannerBox .slickControlBox button')
      .attr({
        'aria-pressed': 'false',
        'aria-label': '暫停輪播',
      })
      .on('click', function () {
        if (checkState) {
          checkState = false;
          $(this).addClass('stop').attr({
            'aria-pressed': 'true',
            'aria-label': '播放輪播',
          });
          $('.adbanner').slick('slickPause');
        } else {
          checkState = true;
          $(this).removeClass('stop').attr({
            'aria-pressed': 'false',
            'aria-label': '暫停輪播',
          });
          $('.adbanner').slick('slickPlay');
        }
      });
  }

  // $('.adbanner').slick({
  // 	dots: false,//顯示原點
  // 	speed: 3000,
  // 	arrows:true, //左右箭頭
  // 	autoplay:true,//自動播放
  // 	infinite: true, //無限輪播
  // 	slidesToShow: 4,
  // 	slidesToScroll: 4,
  // 	responsive: [
  // 		{
  // 			breakpoint: 980,
  // 			settings: {
  // 				slidesToShow: 3,
  // 				slidesToScroll: 3,
  // 			}
  // 		},
  // 		{
  // 			breakpoint: 690,
  // 			settings: {
  // 				slidesToShow: 2,
  // 				slidesToScroll: 2
  // 			}
  // 		},
  // 		{
  // 			breakpoint: 500,
  // 			settings: {
  // 				slidesToShow: 1,
  // 				slidesToScroll:1
  // 			}
  // 		},
  // 		{
  // 			breakpoint: 420,
  // 			settings: {
  // 				slidesToShow: 1,
  // 				slidesToScroll: 1
  // 			}
  // 		}

  // 		// You can unslick at a given breakpoint now by adding:
  // 		// settings: "unslick"
  // 		// instead of a settings object
  // 	]
  // });
  // //click button then pause it.
  // $('.slick-number>li,.slick-prev,.slick-next').on('click',function(){
  // 	$(".bigbanner").slick('slickPause');
  // });
});
