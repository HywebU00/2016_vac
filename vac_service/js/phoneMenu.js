$(function () {
  $('html').removeClass('no-js'); //no-js

  $('.openMenu').addClass('show');

  $('.openMenu').click(function () {
    $('.closeMenu,.mobileMenu,.mlmenu,.mpwrap,.nav').addClass('show');
    $('.openMenu').removeClass('show');
  });

  $('.closeMenu').click(function () {
    $('.openMenu').addClass('show');
    $('.closeMenu').removeClass('show');
    $('.mobileMenu').removeClass('show');
    $('.mlmenu').removeClass('show');
    $('.mpwrap').removeClass('show');
    $('.nav').removeClass('show');
  });

  $(window)
    .on('resize', function () {
      var WIN_W = $(window).width();
      console.log(WIN_W);
      if (WIN_W < 768) {
        // $('.mlmenu.show ul li ul').css('display','none');
        $('.mlmenu ul li a').click(function (event) {
          $('.mlmenu.show ul li ul').hide();
          $(this).siblings('ul').show();
        });
      } else {
        var Lis = document.getElementsByTagName('li');
        for (var i = 0; i < Lis.length; i++) {
          Lis[i].onmouseover = function () {
            var Uls = this.getElementsByTagName('ul')[0]; /*敺鮋�坔��(this)li鋆⊿𢒰�𪄳�枂ul璅嗵惜*/
            if (Uls != undefined) {
              Uls.style.display = 'block';
            }
          };
          Lis[i].onmouseout = function () {
            var Uls = this.getElementsByTagName('ul')[0];
            if (Uls != undefined) {
              Uls.style.display = 'none';
            }
          };
        }
      }
    })
    .resize();

  // $('.mlmenu ul li ul li a').click(function(event) {
  // 	return false;
  // });
});

//mlmenu無障礙語法
$(document).ready(function () {
  // 選取主選單容器
  var $menu = $('.mlmenu');

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

//漢堡無障礙
$(function () {
  // --- 1. 元素選擇 ---
  const $openBtn = $('.openMenu');
  const $closeBtn = $('.closeMenu');
  const $mobileMenu = $('.mobileMenu');
  const $mlmenu = $('.mlmenu');
  const $mpwrap = $('.mpwrap');
  const $nav = $('.nav');

  const controlledMenuId = 'main-nav';

  if ($openBtn.length === 0 || $closeBtn.length === 0) {
    return;
  }

  // --- 2. 一次性初始化 (注入無障礙語意) ---
  $openBtn.attr({
    role: 'button',
    tabindex: '0',
    'aria-label': '開啟主選單',
    'aria-expanded': 'false',
    'aria-controls': controlledMenuId,
  });

  $closeBtn.attr({
    role: 'button',
    tabindex: '0',
    'aria-label': '關閉主選單',
  });

  // 【新增】讓 mobileMenu 本身也可以被鍵盤 focus
  // 這樣才能監聽它的 keydown 事件
  $mobileMenu.attr('tabindex', '0');

  // --- 3. 核心功能與事件綁定 ---

  // 開啟選單的函式
  function openMenu() {
    $openBtn.hide();
    $closeBtn.show();

    // 更新 ARIA 狀態
    $openBtn.attr('aria-expanded', 'true');

    // 顯示 mobileMenu 和 mlmenu
    $mobileMenu.addClass('show');
    $mlmenu.addClass('show');
    $mpwrap.addClass('show'); // 【新增】讓 mpwrap 區塊被推開
    $nav.addClass('show');

    // 焦點移到 mlmenu 第一個 li > a
    const $firstLink = $mlmenu.find('ul li:visible a:visible').first();
    if ($firstLink.length) {
      $firstLink.focus();
    } else {
      // 若找不到，則焦點移到 closeBtn
      $closeBtn.focus();
    }
  }

  // 關閉選單的函式
  function closeMenu() {
    $closeBtn.hide();
    $openBtn.show();

    // 更新 ARIA 狀態
    $openBtn.attr('aria-expanded', 'false');

    // 隱藏 mobileMenu 和 mlmenu
    $mobileMenu.removeClass('show');
    $mlmenu.removeClass('show');
    $mpwrap.removeClass('show'); // 【新增】讓 mpwrap 區塊恢復原位
    $nav.removeClass('show');

    // 焦點移回原來的觸發按鈕
    $openBtn.focus();
  }

  // 綁定事件：點擊 (Click)
  $openBtn.on('click', openMenu);
  $closeBtn.on('click', closeMenu);

  // 綁定事件：鍵盤 (Enter & Space)
  function handleKeyDown(event, action) {
    // 檢查按鍵是否為 Enter 或 Space
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
      event.preventDefault(); // 防止頁面滾動或觸發表單提交
      action();
    }
  }

  $openBtn.on('keydown', (e) => handleKeyDown(e, openMenu));
  $closeBtn.on('keydown', (e) => handleKeyDown(e, closeMenu));

  // 【調整】將 mobileMenu 的 keydown 事件也綁定到 openMenu 函式
  // 這樣就不需要重複撰寫開啟選單的邏輯
  $mobileMenu.on('keydown', (e) => {
    // 只在選單尚未開啟時才觸發
    if ($openBtn.attr('aria-expanded') === 'false') {
      handleKeyDown(e, openMenu);
    }
  });

  // 綁定事件：全局 Escape 鍵
  $(document).on('keydown', function (e) {
    if (e.key === 'Escape' && $openBtn.attr('aria-expanded') === 'true') {
      closeMenu();
    }
  });

  // --- 4. 焦點控制：處理選單內的 Tab 鍵導覽 ---

  // 找出 mlmenu 中所有可被聚焦的元素 (通常是連結和按鈕)
  // 這個選擇器確保了即使未來新增按鈕或其他可互動元素，邏輯依然有效
  const $menuFocusable = $mlmenu.find('a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])');
  const $lastFocusable = $menuFocusable.last(); // 找到最後一個可聚焦的元素

  // 綁定事件：當在「最後一個」可聚焦元素上按下鍵盤
  $lastFocusable.on('keydown', function (e) {
    // 檢查條件：
    // 1. 按下的鍵是 'Tab'
    // 2. 使用者「沒有」同時按下 Shift 鍵 (也就是往後跳，而不是往前)
    if (e.key === 'Tab' && !e.shiftKey) {
      // 防止 Tab 鍵的預設行為 (跳到選單外的下一個元素)
      e.preventDefault();

      // 呼叫現有的 closeMenu 函式，它會處理好所有事情：
      // - 隱藏選單
      // - 更新 ARIA 狀態
      // - 將焦點移回開啟按鈕
      closeMenu();
    }
  });

  // --- 5. 初始狀態設定 ---
  $closeBtn.hide();
  $openBtn.show();
});
