
	$('#testimony_slider').slick({
		slidesToShow:3,
		slidesToScroll:1,
		arrows:false,
		dots:true
	})

$(document).ready(function(){
	$(window).scroll(function(){
		var top = $(this).scrollTop();
		if(top >= 0)
		{
			$('.menu-row').addClass('active');	
			$('.mobile_menu').addClass('active');
		}
		if(top == 0)
		{
			$('.menu-row').removeClass('active');	
			$('.mobile_menu').removeClass('active');
		}
	})
})
$(document).ready(function(){
	$(window).resize(function(){
		var width = $(this).width();
		console.log(width);
		if( width <= 860)
		{
			$('#testimony_slider').slick('setOption','slidesToShow',2);
		}
		if( width <= 590)
		{
			$('#testimony_slider').slick('setOption','slidesToShow',1);
		}
		if(width >= 860)
		{
				$('#testimony_slider').slick('setOption','slidesToShow',3);
		}
	})
	

})
	var width = $(this).width();
		console.log(width);
		if( width <= 860)
		{
			$('#testimony_slider').slick('setOption','slidesToShow',2);
		}
		if( width <= 590)
		{
			$('#testimony_slider').slick('setOption','slidesToShow',1);
		}
		if(width >= 860)
		{
				$('#testimony_slider').slick('setOption','slidesToShow',3);
		}
$(document).ready(function(){
	$('#menu_show').click(function(e){
		e.preventDefault();
		if($('.mobile_menu').is(':hidden'))
		{
			$('.mobile_menu').show();
			$('.mobile_menu').animate({
				left: '0px',
			},200,'linear');
			$(this).children('i').removeClass('fa-bars');
			$(this).children('i').addClass('fa-close');
				
		}else{

			$('.mobile_menu').animate({
				left: '-300px',
			},200,'linear',function(){
				$(this).fadeOut()			  
			 });
			$(this).children('i').removeClass('fa-close');
			$(this).children('i').addClass('fa-bars');
		}


	})

})
