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

})