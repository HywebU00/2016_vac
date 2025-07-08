/*-----------------------------------*/
///////////////taiwan_map////////////////
/*-----------------------------------*/
$(document).ready(function () {
  $('.taiwan_map').append('<div class="mouse"></div>');

  $('.taiwan_map svg path').each(function (index, el) {
    $this = $(this);
    var mapName = $this.attr('name');
    $this.mousemove(function (e) {
      $('.mouse').show();
      $('.mouse').css({ left: e.pageX + 10, top: e.pageY - 30 });
      //讓mouse div出現，跟隨著滑鼠座標，x+10px ，y-30px

      //取每個path的name值
      $('.mouse').html(mapName);
      //mouse div 放入 path的 name值
      console.log(mapName);
    });
    $this.mouseout(function (event) {
      $('.mouse').hide();
    });
  });
});

/*-----------------------------------*/
///////////////Slick輪播///////////////
/*-----------------------------------*/
$(document).ready(function () {
  //Single_slider 單張輪播
  $('.Single_slider').slick({
    dots: true, //要不要顯示圓點
    dotsClass: 'slick-dots',
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  //Multiple Items 多張輪播
  $('.Multiple-items').slick({
    dots: true,
    dotsClass: 'slick-number',
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3, //一次顯示幾張
    slidesToScroll: 3, //一次輪播幾張
  });
  //Variable Items 寬度不一的多張輪播
  $('.variable-width').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
  });
  $('.one-time').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
  });
  $('.uneven').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  });
  //Responsive Display 縮小成手機板時會變成單張輪播
  $('.Responsive_slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  //Vertical_slider 垂直自動輪播
  $('.Vertical_slider').slick({
    dots: false,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 1500,

    speed: 1000,
    // centerMode: true,
    focusOnSelect: true,
    //      responsive: [{
    //          breakpoint: 990,
    //          settings: {
    //              slidesToShow: 2,
    //              slidesToScroll: 2
    //          }
    //      }, {
    //          breakpoint: 600,
    //          settings: {
    //              slidesToShow: 2,
    //              slidesToScroll: 2,
    //              vertical: false,
    //              verticalSwiping: false

    //          }
    //      }, {
    //          breakpoint: 480,
    //          settings: {
    //              slidesToShow: 1,
    //              slidesToScroll: 1,
    //              vertical: false,
    //              verticalSwiping: false
    //          }
    //      }]
  });
  //vertical-syncing 垂直點小圖換大圖輪播
  $('.vertical-syncing').slick({
    dots: false,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 1000,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          vertical: false,
          verticalSwiping: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
          verticalSwiping: false,
        },
      },
    ],
  });
  //slider-for  slider-nav 水平點小圖換大圖輪播
  $('.Slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    asNavFor: '.Slider-nav',
  });
  $('.Slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    asNavFor: '.Slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    slide: 'div',
  });
  //remove active class from all thumbnail slides
  $('.Slider-nav .slick-slide').removeClass('slick-active');

  //set active class to first thumbnail slides
  $('.Slider-nav .slick-slide').eq(0).addClass('slick-active');

  // On before slide change match active thumbnail to current slide
  $('.Slider-for').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var mySlideNumber = nextSlide;
    $('.Slider-nav .slick-slide').removeClass('slick-active');
    $('.Slider-nav .slick-slide').eq(mySlideNumber).addClass('slick-active');
  });
  //使用lazyLoad
  $('.lazy').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
  });
  //單張由右至左
  $('.single-item-rtl').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: true,
  });
  //多張由右至左
  $('.multiple-items-rtl').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    slidesToScroll: 3,
    rtl: true,
  });
});

/*-----------------------------------*/
///////////////stepwizard///////////////
/*-----------------------------------*/

function stepnext(n) {
  if (n != 0) {
    //$(".stepwizard-row a").switchClass('btn-primary','btn-default');

    $('.stepwizard-row a').removeClass('btn-primary');
    $('.stepwizard-row a').addClass('btn-default');
    $('.stepwizard a[href="#step-' + n + '"]').tab('show');
    // $('.stepwizard a[onclick="stepnext('+n+')"]').tab('show');
    //$('.stepwizard-row a[href="#step-'+n+'"]').switchClass('btn-default','btn-primary');
    $('.stepwizard-row a[href="#step-' + n + '"]').removeClass('btn-default');
    $('.stepwizard-row a[href="#step-' + n + '"]')
      .addClass('btn-primary active-step')
      .parent('.stepwizard-step')
      .addClass('active');
  }
}
stepnext(1);

/*-----------------------------------*/
///////////////fatfooter///////////////
/*-----------------------------------*/
$(document).ready(function () {
  $('.FatFooterBtn').click(function () {
    $('#FatFooter>nav>ul>li>ul').slideToggle(function () {
      if ($(this).is(':visible')) {
        document.getElementById('FatFooterBtn').value = '收合';
      } else {
        document.getElementById('FatFooterBtn').value = '展開';
      }
    });
    $(this).toggleClass('close');
  });
});
/*-----------------------------------*/
///////送select選單內容至select框內///////
/*-----------------------------------*/
$(document).ready(function (e) {
  $('.search-panel .dropdown-menu')
    .find('a')
    .click(function (e) {
      e.preventDefault();
      var param = $(this).attr('href').replace('#', '');
      var concept = $(this).text();
      $('.search-panel span#search_concept').text(concept);
      $('.input-group #search_param').val(param);
    });
});
/*-----------------------------------*/
////////////scroll resize////////////
/*-----------------------------------*/
$(function () {
  $('html').removeClass('no-js'); /*程式一開始就把 class="no-js" 移除*/
  $('.scrollup').click(function () {
    $('html,body').animate({ scrollTop: 0 }, 500, 'easeOutQuint');
    return false;
  });
});
$(function () {
  $(window).load(function () {
    $(window)
      .bind('scroll resize', function () {
        var $this = $(this);
        var $this_Top = $this.scrollTop();
        //當高度小於130時，關閉區塊
        if ($this_Top < 130) {
          $('.scrollup').fadeOut();
        }
        //當高度小於130時，顯示區塊
        if ($this_Top > 130) {
          $('.scrollup').fadeIn();
        }
      })
      .scroll();
  });
});

$(function () {
  var weblang = $('html').attr('lang');
  if (weblang.substring(0, 2) == 'zh') {
    // console.log("中文");
    $('.slick-prev').attr('title', '前一則');
    $('.slick-next').attr('title', '後一則');
  } else if (weblang.substring(0, 2) == 'en') {
    // console.log("英文");
    $('.slick-prev').attr('title', 'previous');
    $('.slick-next').attr('title', 'next');
  } else if (weblang.substring(0, 2) == 'vi') {
    // console.log("越南");
    $('.slick-prev').attr('title', 'Trước');
    $('.slick-next').attr('title', 'kế tiếp');
  } else if (weblang.substring(0, 2) == 'id') {
    // console.log("印尼");
    $('.slick-prev').attr('title', 'sebelumnya');
    $('.slick-next').attr('title', 'berikutnya');
  } else if (weblang.substring(0, 2) == 'km') {
    // console.log("柬埔寨");
    $('.slick-prev').attr('title', 'មុន');
    $('.slick-next').attr('title', 'បន្ទាប់');
  } else if (weblang.substring(0, 2) == 'th') {
    // console.log("泰文");
    $('.slick-prev').attr('title', 'ก่อน');
    $('.slick-next').attr('title', 'ต่อไป');
  } else {
    // console.log("沒有判斷");
    $('.slick-prev').attr('title', 'previous');
    $('.slick-next').attr('title', 'next');
  }
});

/*-----------------------------------*/
///////////dropdown hover /////////////
/*-----------------------------------*/
// $(document).ready(function () {
//   //導覽列距離頁面頂端的距離
//   var navTop = $('.Topmenu').offset().top;
//   var H_Height = $('#Header').innerHeight();
//   var M_Height = $('.Topmenu .nav').innerHeight();
//   var MYOFFEST = H_Height - M_Height;
//   var menu = $('.Topmenu');
//   $(window).bind('scroll resize', function () {
//     var W = $(window).width();
//     //console.log("視窗寬度"+W);
//     // console.log("header高度"+H_Height);
//     // console.log("Menu高度"+M_Height);
//     // console.log("差距"+MYOFFEST);
//     //設定一個隨時因為視窗捲動而更改的變數 紀錄目前捲動到哪個位置了
//     var windowTop = $(window).scrollTop();
//     //console.log("視窗捲到了"+$(window).scrollTop());
//     //判斷 如果視窗捲動距離大於等於導覽列的頂端距離時 把導覽列fixed住

//     if (W > 768) {
//       if (windowTop >= MYOFFEST) {
//         $('#Header').css({ position: 'fixed', top: -MYOFFEST });
//       } else {
//         $('#Header').css({ position: 'relative', top: 0 });
//       }
//       $('.dropdown').hover(
//         function () {
//           $('.dropdown-menu', this).stop(true, true).fadeIn('fast');
//           $(this).toggleClass('open');
//           $('b', this).toggleClass('caret caret-up');
//         },
//         function () {
//           $('.dropdown-menu', this).stop(true, true).fadeOut('fast');
//           $(this).toggleClass('open');
//           $('b', this).toggleClass('caret caret-up');
//         }
//       );
//       menu.find('li').keyup(function () {
//         $(this).siblings().children('ul').hide();
//       });
//       menu.find('li:last>a').focusout(function () {
//         menu.find('li ul').hide();
//       });
//     }
//   });
// });

$(document).ready(function () {
  // 選取主選單容器
  var $menu = $('.menu');

  // --- 初始化：動態為選單添加無障礙屬性 ---
  $menu.find('li').each(function () {
    var $li = $(this);
    // 找出有子選單的項目 (li > ul)
    if ($li.children('ul').length > 0) {
      var $toggleLink = $li.children('a').first();
      var $submenu = $li.children('ul').first();
      // 為子選單產生一個唯一的 ID
      var submenuId = 'submenu-' + Math.random().toString(36).substr(2, 9);
      $submenu.attr('id', submenuId);

      // 修正觸發連結的語意和屬性
      $toggleLink.attr({
        role: 'button', // 告知輔助技術這是按鈕
        'aria-haspopup': 'true', // 告知有彈出式選單
        'aria-expanded': 'false', // 初始狀態為收合
        'aria-controls': submenuId, // 連結按鈕和它控制的子選單
      });

      // 為 li 加上 class 方便 CSS 選取
      $li.addClass('menu-item-has-children');

      // 移除多餘的 title 屬性，避免螢幕閱讀器重複朗讀
      $toggleLink.removeAttr('title');
    }
  });

  // 動態修復其他無障礙問題
  // 1. 為缺少 alt 的圖片添加替代文字
  $menu.find('img:not([alt])').attr('alt', '所屬機構相關圖片'); // 請依實際圖片內容修改此文字

  // 2. 為在新視窗開啟的連結添加提示
  $menu.find('a[target="_nwGip"], a[target="_blank"]').append('<span class="visually-hidden">(另開新視窗)</span>');

  // --- 事件處理：綁定新的、無障礙的事件 ---

  // 觸發按鈕的點擊與鍵盤事件
  $('.menu-item-has-children > a[role="button"]').on('click keydown', function (e) {
    // 只響應 Click, Enter, Space
    if (e.type === 'click' || (e.type === 'keydown' && (e.key === 'Enter' || e.key === ' '))) {
      e.preventDefault(); // 阻止連結跳轉和空格鍵滾動
      e.stopPropagation(); // 阻止事件冒泡到父層

      var $toggleLink = $(this);
      var $parentLi = $toggleLink.parent('li');
      var isExpanded = $toggleLink.attr('aria-expanded') === 'true';

      // 先關閉同層級的其他選單
      $parentLi.siblings('.menu-item-has-children').each(function () {
        closeSubmenu($(this));
      });

      // 切換當前選單
      if (isExpanded) {
        closeSubmenu($parentLi);
      } else {
        openSubmenu($parentLi);
      }
    }
  });

  // 全域事件：處理 ESC 鍵和點擊外部
  $(document).on('keydown click', function (e) {
    // 按下 ESC 鍵
    if (e.type === 'keydown' && e.key === 'Escape') {
      var $openLi = $menu.find('.menu-item-open').last(); // 從最內層的開始關
      if ($openLi.length > 0) {
        closeSubmenu($openLi);
        $openLi.children('a[role="button"]').focus(); // 焦點返回觸發按鈕
      }
    }

    // 點擊選單外部
    if (e.type === 'click') {
      if (!$(e.target).closest('.menu').length) {
        closeAllSubmenus();
      }
    }
  });

  // 子選單內的鍵盤焦點管理
  $menu.find('ul a').on('keydown', function (e) {
    // 在子選單的最後一個項目按下 Tab (非 Shift+Tab)
    if (e.key === 'Tab' && !e.shiftKey) {
      var $currentItem = $(this).parent('li');
      if ($currentItem.is(':last-child')) {
        // 關閉其所在的父層選單
        var $parentDropdown = $currentItem.closest('.menu-item-open');
        if ($parentDropdown.length > 0) {
          closeSubmenu($parentDropdown);
        }
      }
    }
  });

  // --- 輔助函數 ---
  function openSubmenu($li) {
    $li.addClass('menu-item-open');
    var $toggle = $li.children('a[role="button"]');
    var $submenu = $li.children('ul');
    $toggle.attr('aria-expanded', 'true');
    $submenu.stop(true, true).slideDown(200);
    // 焦點移入子選單第一個項目
    $submenu.children('li').first().find('a').focus();
  }

  function closeSubmenu($li) {
    $li.removeClass('menu-item-open');
    $li.find('.menu-item-open').removeClass('menu-item-open'); // 關閉所有內層子選單
    var $toggle = $li.find('a[role="button"]'); // 包含內層的也要關閉
    $toggle.attr('aria-expanded', 'false');
    $li.find('ul').stop(true, true).slideUp(200);
  }

  function closeAllSubmenus() {
    $menu.find('.menu-item-open').each(function () {
      closeSubmenu($(this));
    });
  }
});

/*-----------------------------------*/
///////////////megamenu////////////////
/*-----------------------------------*/
//防止menu跳掉
$(document).ready(function () {
  window.prettyPrint && prettyPrint();
  $(document).on('click', '.megamenu .dropdown-menu', function (e) {
    e.stopPropagation();
  });
});
/*-----------------------------------*/
///////////fullcalendar自訂/////////////
/*-----------------------------------*/
$(document).ready(function () {
  function renderCalendar() {
    $('#calendar').fullCalendar({
      buttonText: {
        today: '今天',
        month: '月',
        day: '日',
      },
      weekMode: 'variable',
      columnFormat: {
        year: 'dddd',
        month: 'dddd',
        day: 'dddd M-d',
      },
      monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      dayNames: ['日', '一', '二', '三', '四', '五', '六'],
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaDay',
      },
      defaultDate: '2015-02-12',
      buttonIcons: false, // show the prev/next text
      eventClick: function (date, allDay, jsEvent, view) {},
      events: function (start, end, callback) {},
    });
  }
  renderCalendar();
});

/*-----------------------------------*/
////////////////tab頁籤////////////////
/*-----------------------------------*/
// $(document).ready(function() {
//     // 預設顯示第一個 Tab
//     var _showTab = 0;
//     var $defaultDiv = $('div.tabs').eq(_showTab).addClass('active');
//     $($defaultDiv.find('a').attr('href')).siblings('div.tab_container').hide();

//     // 當 li 頁籤被點擊時...
//     // 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
//     $('div.tabs').click(function () {
//         // 找出 li 中的超連結 href(#id)
//         var $this = $(this),
//         _clickTab = $this.find('a').attr('href');
//         // 把目前點擊到的 li 頁籤加上 .active
//         // 並把兄弟元素中有 .active 的都移除 class
//         $this.addClass('active').siblings('.active').removeClass('active');
//         // 淡入相對應的內容並隱藏兄弟元素
//         $(_clickTab).stop(false, true).fadeIn().siblings('div.tab_container').hide();

//         return false;
//     })
//     $("#font_l").trigger('click');
//     function Focus(id) {
//         $("#" + id).trigger('click');
//         document.getElementById(id).focus();
//     }

// });

//漢堡無障礙
$(document).ready(function () {
  var $toggleButton = $('button[data-toggle="collapse"][data-target="#offcanvas-left"]');
  var $menuPanel = $('#offcanvas-left');
  if ($toggleButton.length > 0 && $menuPanel.length > 0) {
    $toggleButton.attr('aria-controls', 'offcanvas-left');
    var isInitiallyVisible = $menuPanel.hasClass('in') || $menuPanel.hasClass('show');
    $toggleButton.attr('aria-expanded', isInitiallyVisible);
    $toggleButton.find('i.icon-menu').attr('aria-hidden', 'true');
    $menuPanel.on('show.bs.collapse', function () {
      $toggleButton.attr('aria-expanded', 'true');
    });
    $menuPanel.on('hide.bs.collapse', function () {
      $toggleButton.attr('aria-expanded', 'false');
    });
  }
});
