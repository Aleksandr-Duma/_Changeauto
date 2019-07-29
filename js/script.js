$(document).ready(function(){
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
    	slidesToShow: 4
  });

	$('.how-to-slider').slick({
    	dots: true,
    	slidesToShow: 1
  });


})