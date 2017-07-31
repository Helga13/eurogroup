$(document).ready(function () {
  
  var body = $("body");
    
    // menu
	$('.js-toggle-menu').on('click', function(e) {
        e.preventDefault();
		if ($(this).hasClass("is-active")) {
			$("#js-menu").fadeOut(100);
			$(this).removeClass("is-active");
            body.removeClass("no-scroll");
		} else {
			$("#js-menu").fadeIn(100);
			$(this).addClass("is-active");
            body.toggleClass("no-scroll");
		}
		return false;
	});
  
  $('.popup_close').on('click', function(e){
    e.preventDefault();
    $("#js-menu").fadeOut(100);
    $('.js-toggle-menu').removeClass("is-active");
    body.removeClass("no-scroll");
  });
	
	// main slider
	
	$('.section_slider').slick({
		dots: true,
		infinite: true,
		speed: 800,
		fade: true,
		autoplay: true,
		cssEase: 'ease-in-out',
	});
	
	$('.news_slider').slick({
		infinite: true,
		speed: 800,
		autoplay: true
	});
	
	$('.gaseous_state_slider').slick({
		slidesToShow: 7,
  	slidesToScroll: 1
	});
	$('.subcategory_slider').slick({
		slidesToShow: 5,
  	slidesToScroll: 1
	});
	
	function number() {
    var number = $(".js-number");
    number.each(function(){
      var max_number = +($(this).attr("data-max-number"));
      var input = $(this).find("input");
      var plus = $(this).find(".js-plus-number");
      var minus = $(this).find(".js-minus-number");
      plus.on("click", function(){
        var val = +(input.val());
        if (val >= max_number) {
            return false
        }
        else {
            val += 1;
            input.val(val);
        }
      });
      minus.on("click", function(){
        var val = +(input.val());
        if (val > 1) {
            val -= 1;
            input.val(val);
        }
        return false;
      });
      input.on("change", function(){
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
  
   $('.slider_toggle > .item.stop').on("click", function(e){
            e.preventDefault();
			var a;
			a = this.id;
			console.log(a);
			console.log(true);
            $('.gaseous_state_block .gaseous_state_item').removeClass('is-active');
			$('.gaseous_state_block .gaseous_state_item[data-click="'+a+'"]').addClass('is-active');
		});

	
})