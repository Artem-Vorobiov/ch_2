$(function() {
	$(".popup").magnificPopup();

	$(".hm").click(function(){
		alert("jQuery - click");
	});

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
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});


$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

/*
function validation(){
	var email = document.getElementById('contact_email').value;
	var regVEmail =  /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i;
	var result = email.search(regVEmail);
	//alert(result);
	if (result == "-1"){
		alert("Error");
	}
	else alert(result);
}

*/

$(document).ready(function() {
    $('#contact_email').blur(function() {
        if($(this).val() != '') {
            var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if(pattern.test($(this).val())){
            	$(".submit_email").tipTip({maxWidth: 200, edgeOffset: 10, activation: "hover", defaultPosition: "top", content: "Вы сможете отправить сообщение после правильного ввода ваших данных."})
                $(".contact_email").tipTip({maxWidth: 200, edgeOffset: 10, activation: "focus", defaultPosition: "top", content: "Адрес вашей почты заполнен не корректно"});
                $('#submit_email').attr('disabled', false);
            } else {
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