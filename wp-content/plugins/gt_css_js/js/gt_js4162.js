// JavaScript Document

var os = (function () {
  var ua = navigator.userAgent,
    isWindowsPhone = /(?:Windows Phone)/.test(ua),
    isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
    isAndroid = /(?:Android)/.test(ua),
    isFireFox = /(?:Firefox)/.test(ua),
    isChrome = /(?:Chrome|CriOS)/.test(ua),
    isTablet =
      /(?:iPad|PlayBook)/.test(ua) ||
      (isAndroid && !/(?:Mobile)/.test(ua)) ||
      (isFireFox && /(?:Tablet)/.test(ua)),
    isPhone = /(?:iPhone)/.test(ua) && !isTablet,
    isPc = !isPhone && !isAndroid && !isSymbian;
  return {
    isTablet: isTablet,
    isPhone: isPhone,
    isAndroid: isAndroid,
    isPc: isPc,
  };
})();

jQuery(document).ready(function () {
  jQuery(".button_up").click(function () {
    window.location = "#";
  });

  jQuery(".menu-item a").click(function () {
    jQuery(".meau_top").removeClass("show");
    jQuery(".site_nav").removeClass("height");
    // console.log("menu");
  });

  //search_box部分
  var height = jQuery(window).height();
  var width = jQuery(window).width();
  //single_program_box 最小高度
  var site_footer = jQuery(".site-footer").outerHeight(true);
  var min_height = height - site_footer;
  // console.log(min_height);
  jQuery(".single_program_box").css("min-height", "" + min_height + "px");
  jQuery(".support_us_box").css("min-height", "" + min_height + "px");

  //text_link::after
  jQuery(".site-footer .footer_list1 .gt-footer4  a ").addClass("text_link");
  jQuery(
    ".site-footer .footer_list1 .gt-footer4 div:nth-child(3)  a "
  ).removeClass("text_link");

  jQuery("a[href=#wechat]").mouseenter(function (event) {
    event.preventDefault();

    jQuery(".popup_wechat").css(
      "top",
      jQuery(this).offset().top - jQuery(".popup_wechat").height() - 20
    );

    jQuery(".popup_wechat").css("left", jQuery(this).offset().left);

    jQuery(".popup_wechat").addClass("show");

    //
  });

  jQuery("a[href=#wechat]").mouseleave(function (event) {
    event.preventDefault();
    jQuery(".popup_wechat").removeClass("show");
    jQuery(".popup_wechat").css("left", "-100vw");

    //
  });

  //顶部 about 和 connect 点击禁止跳转

  /*
  jQuery(".site_nav #menu-menu-top > li > a").attr(
    "href",
    "javascript:void(0);"
  );
*/

  // console.log("ready");
  win_resize();
  //手机端菜单展开
  jQuery(".button_nav").click(function () {
    if (jQuery(this).hasClass("show")) {
      jQuery(this).removeClass("show");
      jQuery(".site_nav").removeClass("back");
      jQuery(".site_nav .meau_top").removeClass("show");
      jQuery("html").removeClass("hide");
      jQuery(".site_nav").removeClass("height");
    } else {
      jQuery(this).addClass("show");
      jQuery(".site_nav").addClass("back");
      jQuery(".site_nav .meau_top").addClass("show");
      jQuery("html").addClass("hide");
      jQuery(".site_nav").addClass("height");
    }
  });
});

jQuery(document).ajaxComplete(function (event, request, settings) {});

var temp_top = 0;
jQuery(window).on("scroll", function (e) {
  var menu_top_height = jQuery(".site_nav #menu-menu-top").outerHeight(true);
  menu_top_height = jQuery(".menu-top").outerHeight(true) + 10;

  var scrolltop = jQuery(window).scrollTop();
  jQuery(".site_nav").css("height", menu_top_height + "px");

  //console.log(scrolltop);

  if (temp_top < scrolltop && scrolltop > 200) {
    // console.log("下");
    jQuery(".site_nav").addClass("transform");
  }
  if (temp_top > scrolltop) {
    // console.log("上");
    jQuery(".site_nav").removeClass("transform");
  }

  temp_top = scrolltop;
});

jQuery(window).resize(function () {
  // console.log("resize");
  // var menu_top_height = jQuery(".site_nav #menu-menu-top").outerHeight(true);
  win_resize();
});
function win_resize() {
  var menu_top_height = jQuery(".site_nav #menu-menu-top > li > a").outerHeight(
    true
  );

  //top_logo
  //menu-top

  menu_top_height = jQuery(".menu-top").outerHeight(true) + 10;

  if (jQuery(window).width() < 700) {
    menu_top_height = jQuery(".top_logo").outerHeight(true) + 10;
  }

  jQuery(".site_nav").css("height", menu_top_height + "px");
  //console.log(menu_top_height);

  //console.log(menu_top_height);
  //页面空出菜单栏高度

  //console.log(menu_top_height);

  jQuery(".join_us_box").css("padding-top", "" + menu_top_height + "px");
  jQuery(".single_program_box").css("padding-top", "" + menu_top_height + "px");
  jQuery(".support_us_box").css("padding-top", "" + menu_top_height + "px");
  jQuery(".single_event_box").css("padding-top", "" + menu_top_height + "px");
  jQuery(".project_box").css("padding-top", "" + menu_top_height + "px");

  //site_nav

  //pc端菜单部分
  jQuery(".site_nav #menu-menu-top > li").on({
    mouseenter: function () {
      var sub_menu_top = jQuery(this).children(".sub-menu").outerHeight(true);
      var sub_menu_new_top = sub_menu_top + menu_top_height;
      jQuery(this).addClass("show");
      jQuery(".site_nav").addClass("back");
      jQuery(this).css("height", "" + sub_menu_new_top + "px");
      jQuery(".site_nav").css("height", "" + sub_menu_new_top + "px");
    },
    mouseleave: function () {
      jQuery(this).removeClass("show");
      jQuery(".site_nav").removeClass("back");
      jQuery(this).css("height", "" + menu_top_height + "px");
      jQuery(".site_nav").css("height", menu_top_height + "px");
    },
  });
  jQuery(".site_nav #menu-menu-top > li .sub-menu > li").click(function () {
    jQuery(".site_nav").removeClass("back");
    jQuery(".button_nav").removeClass("show");
    jQuery(".site_nav .meau_top").removeClass("show");
    jQuery(".site_nav #menu-menu-top > li").removeClass("show");
    jQuery(".site_nav #menu-menu-top > li").css(
      "height",
      "" + menu_top_height + "px"
    );
    jQuery(".site_nav").css("height", "" + menu_top_height + "px");
    jQuery(".site_nav").removeClass("back");
    jQuery("html").removeClass("hide");
  });
}
