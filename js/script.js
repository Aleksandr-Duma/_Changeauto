$(document).ready(function(){

/*................MOBILE-MENU..................*/
	var pull = $(".burger-menu-button");
	var nav = $(".link-block");

	$(pull).on("click", function(e){
		e.preventDefault();
		$(nav).slideToggle();
	});
	
	$(window).resize(function(){
		var w = $(window).width();
		if (w > 720 && nav.is(":hidden")){
			nav.removeAttr("style");
		}
	});

/*................MOBILE-MENU-END..................*/


	var dropdown = function(){
		var data = $(".dropdown").attr("data-dropdown");

		$(".dropdown-head").on("click", function(){
			if(data === "close"){
				$(".dropdown-body").slideUp();
				if($(this).hasClass("active")){
					$(this).toggleClass("active");
				}
				else{
					$(".dropdown-head").removeClass("active");
					$(this).toggleClass("active");
				}
			}
			else{
				$(this).toggleClass("active");
			}
			$(this).next(".dropdown-body").not(".animated").slideToggle();
		});
	}

dropdown();


var question = function(){
		var data = $(".question-block-item").attr("data-question");

		$(".question-block-item__head").on("click", function(){
			if(data === "close"){
				$(".question-block-item__body").slideUp();
				if($(this).hasClass("active")){
					$(this).toggleClass("active");
				}
				else{
					$(".question-block-item__head").removeClass("active");
					$(this).toggleClass("active");
				}
			}
			else{
				$(this).toggleClass("active");
			}
			$(this).next(".question-block-item__body").not(".animated").slideToggle();
		});
	}

question();


var formSection = function(){
		var data = $(".form-section").attr("data-form-section");

		$(".form-section-head").on("click", function(){
			if(data === "close"){
				$(".form-section-body").slideUp();
				if($(this).hasClass("active")){
					$(this).toggleClass("active");
				}
				else{
					$(".form-section-head").removeClass("active");
					$(this).toggleClass("active");
				}
			}
			else{
				$(this).toggleClass("active");
			}
			$(this).next(".form-section-body").not(".animated").slideToggle();
		});
	}

formSection();



	$(".owl-carousel").owlCarousel({
		items: 1,
		loop: true
	});


	$('.new-offer-slider').slick({
    	dots: true,
    	slidesToShow: 4,
    	responsive: [
    		{
      		breakpoint: 1024,
      		settings: {
		    slidesToShow: 3,
		    slidesToScroll: 3
		    }
    		},
		    {
		    breakpoint: 680,
		    settings: {
		    slidesToShow: 2,
		    slidesToScroll: 2
		    }
		    },
		    {
		    breakpoint: 480,
		    settings: {
		    slidesToShow: 1,
		    slidesToScroll: 1
		   	}
    	}
  	]
  });

	$('.how-to-slider').slick({
    	dots: true,
    	slidesToShow: 1
  });

	$( ".slider-control-year" ).slider({
		min: 1900,
    	max: 2019,
    	animate: "slow",
    	range: "min",    
    	value: 1990,
    	slide : function(event, ui) {    
    		$(".result-slider-year").text(ui.value);        
    	}
	});
	$(".result-slider-year").text($(".slider-control-year").slider("value"));

	$( ".slider-control-power" ).slider({
		min: 1,
    	max: 1500,
    	animate: "slow",
    	range: "min",    
    	value: 1223,
    	slide : function(event, ui) {    
    		$(".result-slider-power").text(ui.value);        
    	}
	});
	$(".result-slider-power").text($(".slider-control-power").slider("value"));

	$( ".slider-control-distance" ).slider({
		min: 0,
    	max: 500000,
    	animate: "slow",
    	range: "min",    
    	value: 350000,
    	slide : function(event, ui) {    
    		$(".result-slider-distance").text(ui.value);        
    	}
	});
	$(".result-slider-distance").text($(".slider-control-distance").slider("value"));

	$( ".slider-control-engine" ).slider({
		min: 200,
    	max: 9000,
    	animate: "slow",
    	range: "min",    
    	value: 6000,
    	slide : function(event, ui) {    
    		$(".result-slider-engine").text(ui.value);        
    	}
	});
	$(".result-slider-engine").text($(".slider-control-engine").slider("value"));


	$('.select-country').niceSelect();
	$('.select-local').niceSelect();
	$('.select-transport').niceSelect();
	$('.select-brand-auto').niceSelect();
	$('.select-model').niceSelect();
	$('.select-owner').niceSelect();
	$('.select-color-auto').niceSelect();
	$('.brand-select-car').niceSelect();
	$('.model-select-car').niceSelect();
	$('.phone-number-select').niceSelect();
	$('.lk-search-select').niceSelect();

})