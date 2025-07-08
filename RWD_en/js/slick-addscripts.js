/*------底圖*/
$(document).ready(function () {
  //  $('.bigbanner').slick({
  //   dots: true,
  //   infinite: true, //無限輪播
  //   speed: 500,
  //   fade: true,
  //   autoplay:true, //自動播放
  //   cssEase: 'linear',
  //   dotsClass: 'slick-number', //原點可以換成數字
  // });
  if ($('.bigbanner').length > 0) {
    $('.bigbanner').slick({
      mobileFirst: true,
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      fade: true,
      lazyLoaded: true,
      lazyLoad: 'ondemand',
      ease: 'ease',
      pauseOnHover: false,
      pauseOnFocus: false,
      customPaging: function (slider, i) {
        var title = $(slider.$slides[i]).find('img').attr('alt').trim();
        return $('<button type="button" aria-label="' + title + '"/>').text(title);
      },
    });
    let checkState = true;
    // WCAG: Add accessible toggle for play/pause
    $('.mpSliderBox .slickControlBox button')
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
          $('.bigbanner').slick('slickPause');
        } else {
          checkState = true;
          $(this).removeClass('stop').attr({
            'aria-pressed': 'false',
            'aria-label': '暫停輪播',
          });
          $('.bigbanner').slick('slickPlay');
        }
      });
  }
  //

  $('.cp_photo').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true, //自動播放
    cssEase: 'linear',
  });

  //adbanner
  if ($('.adbanner').length > 0) {
    $('.adbanner').slick({
      dots: false, //顯示原點
      speed: 3000,
      arrows: true, //左右箭頭
      autoplay: true, //自動播放
      infinite: true, //無限輪播
      slidesToShow: 6,
      slidesToScroll: 6,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
          },
        },
        {
          breakpoint: 980,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 690,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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

  //
  // $('.adbanner').slick({
  //   dots: false, //顯示原點
  //   speed: 3000,
  //   arrows: true, //左右箭頭
  //   autoplay: true, //自動播放
  //   infinite: true, //無限輪播
  //   slidesToShow: 6,
  //   slidesToScroll: 6,
  //   responsive: [
  //     {
  //       breakpoint: 1200,
  //       settings: {
  //         slidesToShow: 5,
  //         slidesToScroll: 5,
  //       },
  //     },
  //     {
  //       breakpoint: 980,
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 4,
  //       },
  //     },
  //     {
  //       breakpoint: 690,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //       },
  //     },
  //     {
  //       breakpoint: 550,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 420,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },

  //     // You can unslick at a given breakpoint now by adding:
  //     // settings: "unslick"
  //     // instead of a settings object
  //   ],
  // });
});
