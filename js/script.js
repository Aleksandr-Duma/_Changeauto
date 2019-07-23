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

	$(".owl-carousel").owlCarousel({
		items: 1,
		loop: true
	});

})