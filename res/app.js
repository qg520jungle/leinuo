$(document).ready(function(){
    $("#slidershow a.left").click(function(){
        $(".carousel").carousel("prev");
    });
    $("#slidershow a.right").click(function(){
        $(".carousel").carousel("next");
    });
	$('.lv1').each(function(index, el) {
		$(el).on('mouseover',function(){
			$(el).find('.drop-menu').show();
		});
		$(el).on('mouseout',function(){
			$(el).find('.drop-menu').hide();
		});
	});
	$('.u-link-tt').on('click',function(){
		if($(this).hasClass('temp')){
			$('.temp').next('div').addClass('hidden-l');
			$('.temp').removeClass('temp');
		}else{
		$('.temp').next('div').addClass('hidden-l');
		$('.temp').removeClass('temp');
		$(this).next('div').removeClass('hidden-l');
		$(this).addClass('temp');
		}
	});


	if($(window).width() < 760){
		$('.z-pc').removeClass('z-pc').addClass('z-mb');
		$('.drop-menu').removeClass('drop-menu').addClass('dm');
		$('.nav').attr('class','nav_mb');
	}

	$('.nav_mb > li').click(function(){
		if($(this).hasClass('z-cur')){
			$(this).removeClass('z-cur');
		}else{
			$('.z-mb .z-cur').removeClass('z-cur');
			$(this).addClass('z-cur');
		}
		
	})
	$('.m-header .toggle').click(function(){
		$('.z-mb .navbar-body').show(function(){
			$('.nav_mb').addClass('open');
		});
	})
	$('.clo,.col').click(function(){
		$('.nav_mb').removeClass('open');
		setTimeout(function(){
			$('.z-mb .navbar-body').hide();
		},500)
	})
});
