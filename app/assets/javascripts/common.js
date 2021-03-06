$(function() {

	//PopUp
	$(".popup").magnificPopup();

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {};

	$("img, a").on("dragstart", function(event) { 
		event.preventDefault(); 
	});
	
});


$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});


$(document).ready(function() {

// ---- Блок прокрутки вверх

	$('body').append('<div id="toTop">Наверх </div>');
	$(window).scroll(function(){
		if($(this).scrollTop() > 200 ) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});

	$('#toTop').click(function(){
		$("body, html").animate({scrollTop: 0}, 400);
	});

// ---- Scroll to button

	$('.see_more').click(function(){
		$('body, html').animate({scrollTop: $('#countdown').offset().top }, 400);
	});

// ---- Код для вспылвающих подсказок & валидация на лету для почты 

	$(".btn_1").tipTip({maxWidth: 200, edgeOffset: 10, activation: "hover", defaultPosition: "top", content: "Здесь вы можете связаться с администрацией."});

    $('#contact_email').blur(function() {
        if($(this).val() != '') {
            var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if(pattern.test($(this).val())){
            	$(".submit_email").tipTip({maxWidth: 200, edgeOffset: 10, activation: "hover", defaultPosition: "top", content: "Адрес вашей почты правильный."});
                
                $('#submit_email').attr('disabled', false);
            } else {
            	$(".submit_email").tipTip({maxWidth: 200, edgeOffset: 10, activation: "hover", defaultPosition: "top", content: "Вы сможете отправить сообщение после правильного ввода ваших данных."});
                $(".contact_email").tipTip({maxWidth: 200, edgeOffset: 10, activation: "focus", defaultPosition: "top", content: "Адрес вашей почты заполнен не корректно"});
                $('#submit_email').attr('disabled', true);
            }
        } else {
        	$(".submit_email").tipTip({maxWidth: 200, edgeOffset: 10, activation: "hover", defaultPosition: "top", content: "Вы сможете отправить сообщение после правильного ввода ваших данных."});
            $(".contact_email").tipTip({maxWidth: 200, edgeOffset: 10, activation: "focus", defaultPosition: "top", content: "Поле должно быть заполненно."});
            $('#submit_email').attr('disabled', true);
        }
    });
});