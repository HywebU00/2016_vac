/*-----------------------------------*/
///////////////Slick輪播///////////////
/*-----------------------------------*/
$(document).ready(function() {
    //Single_slider 單張輪播
    $('.Single_slider').slick({
        dots: true, //要不要顯示圓點
        dotsClass: 'slick-dots',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    //Multiple Items 多張輪播
    $('.Multiple-items').slick({
        dots: true,
        dotsClass: 'slick-number',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,  //一次顯示幾張
        slidesToScroll: 3  //一次輪播幾張
    });
    //Variable Items 寬度不一的多張輪播
    $('.variable-width').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    });
    $('.one-time').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true
    });
    $('.uneven').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
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
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
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
        verticalSwiping:true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll:4,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 1000,
        centerMode: true,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 990,
            settings: {
                slidesToShow:3,
                slidesToScroll: 3
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                vertical: false,
                verticalSwiping:false

            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                vertical: false,
                verticalSwiping:false
            }
        }]
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
        asNavFor: '.Slider-nav'
    });
    $('.Slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        asNavFor: '.Slider-for',        
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        slide: 'div'
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
        speed: 500
    });
    //單張由右至左
    $('.single-item-rtl').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: true
    });
    //多張由右至左
    $('.multiple-items-rtl').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        slidesToScroll: 3,
        rtl: true
    });

});

/*-----------------------------------*/
///////////////Tooltip///////////////
/*-----------------------------------*/ 
$(function() {
    $("a[data-toggle=tooltip]").tooltip();
});


/*-----------------------------------*/
///////////////fatfooter///////////////
/*-----------------------------------*/  
$(document).ready(function() {
    $( ".FatFooterBtn" ).click(function(){
        $('#FatFooter>nav>ul>li>ul').slideToggle(function(){
            if($(this).is(':visible')){ document.getElementById("FatFooterBtn").value="收合";}
            else{document.getElementById("FatFooterBtn").value="展開";}
        });
        $(this).toggleClass('close');
    });
});
/*-----------------------------------*/
///////送select選單內容至select框內///////
/*-----------------------------------*/  
$(document).ready(function(e){
    $('.search-panel .dropdown-menu').find('a').click(function(e) {
        e.preventDefault();
        var param = $(this).attr("href").replace("#","");
        var concept = $(this).text();
        $('.search-panel span#search_concept').text(concept);
        $('.input-group #search_param').val(param);
    });
});
/*-----------------------------------*/
///////////////scrollup///////////////
/*-----------------------------------*/  
$(function(){
    $('html').removeClass('no-js');/*程式一開始就把 class="no-js" 移除*/
    $(".scrollup").click(function(){
        $("html,body").animate({scrollTop:0},500,"easeOutQuint");
        return false;

    });

});
$(function(){
    $(window).load(function(){
        $(window).bind('scroll resize', function(){
            var $this = $(this);
            var $this_Top=$this.scrollTop();
            //當高度小於130時，關閉區塊
            if($this_Top < 130){
                $(".scrollup").fadeOut();
            }
            //當高度小於130時，顯示區塊
            if($this_Top > 130){
                $(".scrollup").fadeIn();
            }
        }).scroll();
    });
});


/*-----------------------------------*/
///////////dropdown hover /////////////
/*-----------------------------------*/ 
$(document).ready(function(){
    //導覽列距離頁面頂端的距離
    var navTop=$(".Topmenu").offset().top;
    var H_Height=$('#Header').innerHeight();
    var M_Height=$('.Topmenu .nav').innerHeight();
    var MYOFFEST = H_Height-M_Height;
    var menu = $('.Topmenu');
    $(window).bind('scroll resize',function(){
        var W = $(window).width();
        //console.log("視窗寬度"+W);
        // console.log("header高度"+H_Height);
        // console.log("Menu高度"+M_Height);
        // console.log("差距"+MYOFFEST);
        //設定一個隨時因為視窗捲動而更改的變數 紀錄目前捲動到哪個位置了
        var windowTop=$(window).scrollTop();
        //console.log("視窗捲到了"+$(window).scrollTop());
        //判斷 如果視窗捲動距離大於等於導覽列的頂端距離時 把導覽列fixed住

        if(W>768){
            if(windowTop>=MYOFFEST){
                $("#Header").css({position:"fixed",top:-MYOFFEST})
            }
            else{
               $("#Header").css({position:"relative",top:0})
           }
           $(".dropdown").hover(
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");
            },
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");

            });
           menu.find('li').keyup( 
              function(){
                 $(this).siblings().children('ul').hide();
             });
           menu.find('li:last>a').focusout(
              function(){
                 menu.find('li ul').hide();
             });    
       }
   })
})


/*-----------------------------------*/
///////////////megamenu////////////////
/*-----------------------------------*/  
//防止menu跳掉
$(document).ready(function() {
    window.prettyPrint && prettyPrint()
    $(document).on('click', '.megamenu .dropdown-menu', function(e) {
        e.stopPropagation()
    })
})

/*-----------------------------------*/
///////////fullcalendar自訂/////////////
/*-----------------------------------*/  
$(document).ready(function() {
    function renderCalendar() {
        $('#calendar').fullCalendar({
            buttonText: {
                today: '今天',
                month: '月',
                day: '日'
            },
            weekMode: "variable",
            columnFormat: {
                year: 'dddd',
                month: 'dddd',
                day: 'dddd M-d'
            },
            monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            dayNames: ["日", "一", "二", "三", "四", "五", "六"],
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaDay'
            },                  
            defaultDate: '2015-02-12',
        buttonIcons: false, // show the prev/next text
        eventClick: function (date, allDay, jsEvent, view) {
        },
        events: function (start, end, callback) {
        }
    });
    }
    renderCalendar();
});
/*-----------------------------------*/
////////////////tab頁籤////////////////
/*-----------------------------------*/  

jQuery(document).ready(function(){
    $('.tabs').find('.active').next('.tabContent').show();//顯示選到的頁籤的內容。用css設定也可以，本範例中css也有設定（18、19行）
    
    // var tw = $('.tabSet').width();//取得頁籤區塊的寬度，並存入變數tw中
    // var tabItemHeight = $('.tabs>h3>a').innerHeight();//取得頁籤項目含padding高度，並存入變數tabItemHeight中
    // $('.tabs').find('.tabContent').css('top' , tabItemHeight );//找到頁籤內容區塊，設定它的top等於頁籤項目高度

    // $('.tabSet').each(function(){//各別處理每個頁籤組
    //     var tabContentHeight = $(this).find('.active').next('.tabContent').innerHeight();//找到被選到的頁籤內容，取得它含padding的高度，並將高度存到變數tabContentHeight中。
    //     var tabItemLength = $(this).find('h3').length;//取得每個頁籤組中頁籤項目的個數
    
    //     $(this).height(tabContentHeight + tabItemHeight);//頁籤組的總高度＝頁籤內容的高度＋頁籤項目的高度
    //     $(this).find('h3>a').width( tw / tabItemLength ); //頁籤項目的寬度＝頁籤組的寬度／頁籤項目個數
    // });

    $('.tabs>h3>a').focus(tabs);//用鍵盤選到頁籤時執行tabs函式
    $('.tabs>h3>a').click(tabs);//用滑鼠選到頁籤時執行tabs函式
    
    function tabs(){//定義tabs函式
        $(this).parent('h3').siblings().removeClass('active');//非選到的頁籤項目的 class 要移除
        $(this).parent('h3').addClass('active');//把選到的頁籤項目加上 class="active"

        tabContentHeight = $(this).parent('h3').next('.tabContent').innerHeight();//取得選到的頁籤內容含padding的高度
        $(this).parents('.tabSet').height(tabContentHeight + tabItemHeight);//頁籤組的總高度＝頁籤內容的高度＋頁籤項目的高度
    }
});