$(document).ready(function() {
	$('.btn-more').click(function(){
		var pb = $(this).parent().parent();
		if (pb.hasClass('is-open')){
			pb.removeClass('is-open');
			if (pb.hasClass('clients')){
				$(this).html('Все клиенты <span class="btn-more__arr"></span>');
			}
			else if (pb.hasClass('partners')){
				$(this).html('Все партнеры <span class="btn-more__arr"></span>');
			}
		}
		else{
			pb.addClass('is-open');
			$(this).html('Свернуть <span class="btn-more__arr"></span>');
		}
		return false;
	});

	$('.credit__tab li').click(function(){

		if (!($(this).hasClass('is-active')))
			$(this).addClass('is-active').siblings().removeClass('is-active')
			.parents('.credit').find('.credit__tab-box').eq($(this).index()).fadeIn(150).siblings('.credit__tab-box').hide();
		if ($(this).parent().parent().parent().hasClass('credit_mod')){
			$(this).parent().parent().parent().removeClass('credit_mod');
		}
		else{
			$(this).parent().parent().parent().addClass('credit_mod');
		}
		return false;

	});
});