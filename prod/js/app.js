$(document).ready(function () {
	
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
	
})