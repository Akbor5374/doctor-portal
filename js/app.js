$(document).ready(function(){
	$(".nav-toggle").click(function(){
		$("nav").toggleClass("active");
	});

	$(window).on('scroll', function (){
		var scroll = $(window).scrollTop();
		if(scroll > 200){
			$(".header-area").addClass("active");
		}
		else{
			$(".header-area").removeClass("active");
		}
	});
});

$('#count-1').jQuerySimpleCounter({
	start:  00,
	end:    579,
	duration: 4000
});
$('#count-2').jQuerySimpleCounter({
	start:  00,
	end:    579,
	duration: 4000
});
$('#count-3').jQuerySimpleCounter({
	start:  00,
	end:    579,
	duration: 4000
});
$('#count-4').jQuerySimpleCounter({
	start:  00,
	end:    579,
	duration: 4000
});
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
