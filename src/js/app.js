$(document).ready(function () {
  var body = $('body');
  // menu
  $('.js-toggle-menu').on('click', function (e) {
    e.preventDefault();
    if ($(this).hasClass('is-active')) {
      $('#js-menu').fadeOut(100);
      $(this).removeClass('is-active');
      body.removeClass('no-scroll');
    }
    else {
      $('#js-menu').fadeIn(100);
      $(this).addClass('is-active');
      body.toggleClass('no-scroll');
    }
    return false;
  });
  //search
  $('.js-search').on('click', function (e) {
    e.preventDefault();
    if ($(this).hasClass('is-active')) {
      $("#js-search").fadeOut(100);
      $(this).removeClass('is-active');
      body.removeClass('no-scroll');
    }
    else {
      $('#js-search').fadeIn(100);
      $(this).addClass('is-active');
      body.toggleClass('no-scroll');
    }
    return false;
  });
  // recall
  $('.js-popupCall').on('click', function (e) {
    e.preventDefault();
    if ($(this).hasClass('is-active')) {
      $("#js-popupCall").fadeOut(100);
      $(this).removeClass('is-active');
      body.removeClass('no-scroll');
    }
    else {
      $('#js-popupCall').fadeIn(100);
      $(this).addClass('is-active');
      body.toggleClass('no-scroll');
    }
    return false;
  });
  $('.popup.inner .popup_content').click(function (e) {
    e.stopPropagation();
  });
  $('.popup_close').on('click', function (e) {
    e.preventDefault();
    $('#js-menu, #js-search, #js-popupCall').fadeOut(100);
    $('.js-toggle-menu, .js-search, .js-popupCall').removeClass('is-active');
    body.removeClass("no-scroll");
  });
  $('.order_btn').on('click', function (e) {
    $('#js-popupCall .btn').text('Заказать');
  });
  $('.get_price').on('click', function (e) {
    $('#js-popupCall .btn').text('Узнать цену');
  });
  // tabs
  $('.tabs_caption').on('click', '.tab_radio:not(.active)', function () {
    $(this).addClass('active').siblings().removeClass('active').closest('div.tabs').find('.tabs_content').removeClass('active').eq($(this).index()).addClass('active');
  });
  $("#phone").mask("+375 (99) 999 99 99");
  // main slider
  $('.section_slider').slick({
//    dots: true
     infinite: true
    , speed: 800
    , fade: true
    , autoplay: true
    , cssEase: 'ease-in-out'
  , });
  $('.news_slider').slick({
    infinite: true
    , speed: 800
    , autoplay: true
  });
  $('.gaseous_state_slider').slick({
    slidesToShow: 7
    , slidesToScroll: 1
  });
  $('.subcategory_slider').slick({
    slidesToShow: 5
    , slidesToScroll: 1
    , responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1
      }
    }
  ]
  });

  function number() {
    var number = $(".js-number");
    number.each(function () {
      var max_number = +($(this).attr("data-max-number"));
      var input = $(this).find("input");
      var plus = $(this).find(".js-plus-number");
      var minus = $(this).find(".js-minus-number");
      plus.on("click", function () {
        var val = +(input.val());
        if (val >= max_number) {
          return false
        }
        else {
          val += 1;
          input.val(val);
        }
      });
      minus.on("click", function () {
        var val = +(input.val());
        if (val > 1) {
          val -= 1;
          input.val(val);
        }
        return false;
      });
      input.on("change", function () {
        var val = +$(this).val();
        if (val > max_number) {
          val = max_number;
          $(this).val(val);
        }
        if (val == '') {
          val = 1;
          $(this).val(val);
        }
      });
    });
  }
  number();
  // catalog toggle
  $('.slider_toggle > .item.stop').on("click", function (e) {
    e.preventDefault();
    var a;
    a = this.id;
    console.log(a);
    console.log(true);
    $('.gaseous_state_block .gaseous_state_item').removeClass('is-active');
    $('.gaseous_state_block .gaseous_state_item[data-click="' + a + '"]').addClass('is-active');
  });
//  $(window).scroll(function () {
    // 200px от верха
//    if ($(window).scrollTop() > '200') {
//      $('header:not(.header_inner)').addClass('modifier');
//    }
//    else {
//      $('header:not(.header_inner)').removeClass('modifier');
//    }
//  });
  
  if($(window).width() > 480) {
    $(window).scroll(function () {
    // 200px от верха
    if ($(window).scrollTop() > '200') {
      $('header:not(.header_inner)').addClass('modifier');
    }
    else {
      $('header:not(.header_inner)').removeClass('modifier');
    }
  });
  }else{
     $('header:not(.header_inner)').addClass('modifier');
  }

})