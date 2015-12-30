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
//  $('')
  $('.u-menu').on('click',function(){
    $(this).children('span').hide();
    $('.u-list').removeClass('hidden-sm hidden-xs').addClass('mb-list');
    $('.u-list').children('li').addClass('col-xs-12 col-sm-12');
    $('.drop-menu').addClass('mb-drop-menu').removeClass('drop-menu');
    $('.u-back').show();
//    $('.u-list').attr()
    $('.mb-list').find('.lv1').each(function(index, el){
      $(el).find('i').addClass('u-icon-r');
      $(el).on('click',function(){
        if($(el).next().hasClass('lv2')){
         $(el).parent().children('.lv2').each(function(index, el){
            $(el).empty().detach();
          });
          $(el).parent().find('.z-active').removeClass('z-active');
        }else{
         if($(el).parent().children().hasClass('lv2')){
            $(el).parent().children('.lv2').each(function(index, el){
              $(el).empty().detach();
            });
          }
          $(el).parent().find('.z-active').removeClass('z-active');
          $(el).addClass('z-active');
          $(el).find('li').clone().each(function(index, el){
            $(el).attr('class','lv2 col-xs-12 col-sm-12');
            $(el).find('.glyphicon').remove();
          }).insertAfter(el);
        }
    });
  });

  $('.u-back').on('click',function(){
     $(this).nextAll('.lv2').each(function(index, el){
            $(el).empty().detach();
          });
          $(this).nextAll('.z-active').removeClass('z-active');
    $(this).nextAll('.lv1').each(function(index, el){
            $(el).off();
          });
    $('.u-menu').children('span').show();
    $('.u-list').removeClass('mb-list').addClass('hidden-sm hidden-xs');
     $('.u-list').children('li').removeClass('col-xs-12 col-sm-12');
    $('.u-back').hide();
     $('.mb-drop-menu').addClass('drop-menu').removeClass('mb-drop-menu');
  });



  });

//
//
	if($(window).width() < 992){
		$('.u-link-tt').on('click',function(){
      if($(this).hasClass('temp')){
          $('.temp').next('div').hide();
          $('.temp').removeClass('temp');
      }else{
      $('.temp').next('div').hide();
      $('.temp').removeClass('temp');
      $(this).next('div').show();
      $(this).addClass('temp');
      }
      });
	}
$('#accordion').on('shown.bs.collapse', function () {
  console.log(this);
  $('.in').prev().find('i').removeClass('glyphicon-menu-right').addClass('glyphicon-menu-down');
});
$('#accordion').on('hidden.bs.collapse', function () {
  $('.panel-title i').removeClass('glyphicon-menu-down').addClass('glyphicon-menu-right');
});


});
