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
///////////////Tooltip///////////////
/*-----------------------------------*/
$(function () {
  $('a[data-toggle=tooltip]').tooltip();
});

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
///////////////scrollup///////////////
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

/*-----------------------------------*/
///////////dropdown hover /////////////
/*-----------------------------------*/
// $(document).ready(function(){
//     //導覽列距離頁面頂端的距離
//     var navTop=$(".Topmenu").offset().top;
//     var H_Height=$('#Header').innerHeight();
//     var M_Height=$('.Topmenu .nav').innerHeight();
//     var MYOFFEST = H_Height-M_Height;
//     var menu = $('.Topmenu');
//     $(window).bind('scroll resize',function(){
//         var W = $(window).width();
//         //console.log("視窗寬度"+W);
//         // console.log("header高度"+H_Height);
//         // console.log("Menu高度"+M_Height);
//         // console.log("差距"+MYOFFEST);
//         //設定一個隨時因為視窗捲動而更改的變數 紀錄目前捲動到哪個位置了
//         var windowTop=$(window).scrollTop();
//         //console.log("視窗捲到了"+$(window).scrollTop());
//         //判斷 如果視窗捲動距離大於等於導覽列的頂端距離時 把導覽列fixed住

//         if(W>768){
//             if(windowTop>=MYOFFEST){
//                 $("#Header").css({position:"fixed",top:-MYOFFEST})
//             }
//             else{
//                $("#Header").css({position:"relative",top:0})
//            }
//            $(".dropdown").hover(
//             function() {
//                 $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
//                 $(this).toggleClass('open');
//                 $('b', this).toggleClass("caret caret-up");
//             },
//             function() {
//                 $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
//                 $(this).toggleClass('open');
//                 $('b', this).toggleClass("caret caret-up");

//             });
//            menu.find('li').keyup(
//               function(){
//                  $(this).siblings().children('ul').hide();
//              });
//            menu.find('li:last>a').focusout(
//               function(){
//                  menu.find('li ul').hide();
//              });
//        }
//    })
// })
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

jQuery(document).ready(function () {
  $('.tabs').find('.active').next('.tabContent').show(); //顯示選到的頁籤的內容。用css設定也可以，本範例中css也有設定（18、19行）

  // var tw = $('.tabSet').width();//取得頁籤區塊的寬度，並存入變數tw中
  // var tabItemHeight = $('.tabs>h3>a').innerHeight();//取得頁籤項目含padding高度，並存入變數tabItemHeight中
  // $('.tabs').find('.tabContent').css('top' , tabItemHeight );//找到頁籤內容區塊，設定它的top等於頁籤項目高度

  // $('.tabSet').each(function(){//各別處理每個頁籤組
  //     var tabContentHeight = $(this).find('.active').next('.tabContent').innerHeight();//找到被選到的頁籤內容，取得它含padding的高度，並將高度存到變數tabContentHeight中。
  //     var tabItemLength = $(this).find('h3').length;//取得每個頁籤組中頁籤項目的個數

  //     $(this).height(tabContentHeight + tabItemHeight);//頁籤組的總高度＝頁籤內容的高度＋頁籤項目的高度
  //     $(this).find('h3>a').width( tw / tabItemLength ); //頁籤項目的寬度＝頁籤組的寬度／頁籤項目個數
  // });

  $('.tabs>h3>a').focus(tabs); //用鍵盤選到頁籤時執行tabs函式
  $('.tabs>h3>a').click(tabs); //用滑鼠選到頁籤時執行tabs函式

  function tabs() {
    //定義tabs函式
    $(this).parent('h3').siblings().removeClass('active'); //非選到的頁籤項目的 class 要移除
    $(this).parent('h3').addClass('active'); //把選到的頁籤項目加上 class="active"

    tabContentHeight = $(this).parent('h3').next('.tabContent').innerHeight(); //取得選到的頁籤內容含padding的高度
    $(this)
      .parents('.tabSet')
      .height(tabContentHeight + tabItemHeight); //頁籤組的總高度＝頁籤內容的高度＋頁籤項目的高度
  }
});

//漢堡無障礙
$(document).ready(function () {
  // 1. 選取相關元素
  var $toggleButton = $('button[data-toggle="collapse"][data-target="#offcanvas-left"]');
  var $menuPanel = $('#offcanvas-left');

  // 確保元素存在，再執行後續操作
  if ($toggleButton.length > 0 && $menuPanel.length > 0) {
    // 2. 初始化 ARIA 屬性 (僅在頁面載入時執行一次)
    //    這部分不會與任何運行中的腳本衝突

    // 關聯按鈕與其控制的面板
    $toggleButton.attr('aria-controls', 'offcanvas-left');

    // 根據面板初始是否可見，來設定 aria-expanded 的初始值
    // 一般來說，選單初始是隱藏的，所以設為 'false'
    var isInitiallyVisible = $menuPanel.hasClass('in') || $menuPanel.hasClass('show');
    $toggleButton.attr('aria-expanded', isInitiallyVisible);

    // 將純裝飾性圖示對螢幕閱讀器隱藏
    $toggleButton.find('i.icon-menu').attr('aria-hidden', 'true');

    // 3. 監聽 Bootstrap 事件以「同步」狀態，而不是「控制」它
    //    這段程式碼是作為一個被動的觀察者

    // 當 #offcanvas-left 面板「即將被顯示」時，更新按鈕狀態
    $menuPanel.on('show.bs.collapse', function () {
      $toggleButton.attr('aria-expanded', 'true');
    });

    // 當 #offcanvas-left 面板「即將被隱藏」時，更新按鈕狀態
    $menuPanel.on('hide.bs.collapse', function () {
      $toggleButton.attr('aria-expanded', 'false');
    });
  }
});
