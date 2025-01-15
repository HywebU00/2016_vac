$(document).ready(function () {

    $('#incfont').click(function () {
        curSize = parseInt($('#ContentPage').css('font-size')) + 2;
        if (curSize <= 20)
            $('#ContentPage').css('font-size', curSize);
    });
    $('#decfont').click(function () {
        curSize = parseInt($('#ContentPage').css('font-size')) - 2;
        if (curSize >= 16)
            $('#ContentPage').css('font-size', curSize);
    });
    

	// 多層選單
	var menu = $('#Header .menu');

	//$('#Header .menu>ul>li').addClass('hasChild');
	$('.menu li:has(ul)').addClass('hasChild')
	
	menu.find('li.hasChild').hover(
		function(){$(this).children().stop().fadeIn(200);},
		function(){$(this).children('ul').stop().fadeOut(200);}
		);

	menu.find('li').keyup(	
		function(){
			$(this).siblings().children('ul').hide();
		});

	menu.find('li.hasChild').keyup(
		function(){
			$(this).children().show();
		});

   $(menu).last('li').children('a').focusout(
	//$('#Header .menu li:last>a').focusout(
	function(){
		$(menu).find('li ul').hide();
		//$('#Header .menu li>ul').hide();
	});


    //

    //inmenu
    // $('.inmenu h2').click(function(){
    //	   $('.inmenu ul').slidetoggle(500);
    //       $
    //   
    //   })
    //  


});

//gotop
$(function () {
    $("#gotop").click(function () {
        //$("html,body").stop(true,false).animate({scrollTop:0},700); //設定回頁面頂端
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
})

// 最新消息

jQuery(document).ready(function () {
    $('.tabs').find('.active').next('.tabContent').show();//顯示選到的頁籤的內容。用css設定也可以，本範例中css也有設定（18、19行）

    var tw = $('.tabSet').width();//取得頁籤區塊的寬度，並存入變數tw中
    var tabItemHeight = $('.tabs>h2>a').innerHeight();//取得頁籤項目含padding高度，並存入變數tabItemHeight中
    $('.tabs').find('.tabContent').css('top', tabItemHeight);//找到頁籤內容區塊，設定它的top等於頁籤項目高度

    $('.tabSet').each(function () {//各別處理每個頁籤組
        var tabContentHeight = $(this).find('.active').next('.tabContent').innerHeight();//找到被選到的頁籤內容，取得它含padding的高度，並將高度存到變數tabContentHeight中。
        var tabItemLength = $(this).find('h2').length;//取得每個頁籤組中頁籤項目的個數

        $(this).height(tabContentHeight + tabItemHeight);//頁籤組的總高度＝頁籤內容的高度＋頁籤項目的高度
        $(this).find('h2>a').width(tw / tabItemLength); //頁籤項目的寬度＝頁籤組的寬度／頁籤項目個數
    });

    $('.tabs>h2>a').focus(tabs);//用鍵盤選到頁籤時執行tabs函式
    $('.tabs>h2>a').click(tabs);//用滑鼠選到頁籤時執行tabs函式

    function tabs() {//定義tabs函式
        $(this).parent('h2').siblings().removeClass('active');//非選到的頁籤項目的 class 要移除
        $(this).parent('h2').addClass('active');//把選到的頁籤項目加上 class="active"

         v.parent('h2').next('.tabContent').innerHeight();//取得選到的頁籤內容含padding的高度
        $(this).parents('.tabSet').height(tabContentHeight + tabItemHeight);//頁籤組的總高度＝頁籤內容的高度＋頁籤項目的高度
    }
});

//統計指標
$(function () {
    $('.options li.here .tabcontents').show();

    //點到頁籤後
    // $('.options>li>a').focus(function(){
        $('.options>li>a').click(tabs);
    $('.options>li>a').focus(tabs);//因為無障礙要可以使用鍵盤點選，所以用focus的設定

    function tabs() {

        var li_index = $(this).index();

        $('.options .here').removeClass('here');
        $(this).parent().addClass('here');
    }
})

//圖片燈箱
//document.oncontextmenu = function(){
//window.event.returnValue=false; //將滑鼠右鍵事件取消
//}
$(document).ready(function () {
    // portfolio 開 modal 
    $('.single-portfolio a').each(function (index, el) {
        $(this).click(function (event) {
            /*body 加上overflow hidden class*/	$(this).siblings('.full').fadeIn(1200, 'easeOutExpo')
            $('body').addClass('noscroll');
        });
    });
    $('.close').click(function (event) {
        $('.full').fadeOut(500, 'easeOutExpo');
        $('.full').scrollTop(0);
        $('body').removeClass('noscroll');
    });
    $('.full:before').click(function (event) {
        $('.full').fadeOut(500, 'easeOutExpo');
        $('.full').scrollTop(0);
        $('body').removeClass('noscroll');
    });
    // out overlay 新增一個感應區，關閉視窗
    $('.full').append('<div class="out"></div>');
    $('.out').click(function (event) {
        $('.full').fadeOut(500, 'easeOutExpo');
        $('.full').scrollTop(0);
        $('body').removeClass('noscroll');
    });
});