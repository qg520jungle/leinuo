$(function(){
	$('.m-header .nav-menu > li > a').hover(function(){
		$(this).append('<div class="u-nav_hover"></div>')
	},function(){
		$('.u-nav_hover').remove();
	})
	$('.m-header .drop-menu').hover(function(){
		$(this).prev().append('<div class="u-nav_hover"></div>')
	},function(){
		$('.u-nav_hover').remove();
	})
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
})