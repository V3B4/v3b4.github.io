(function (d, $) {

  // pagetop pattern3

  var $pagetop = isMobile()?$('.pagetop'):
  (function(){
   return $('.pagetop').removeClass('pagetop').addClass('pagetop3');
  })(), // タッチデバイスでなければ、pagetopをpagetop3に差し替える
  pagetop_offset = 50;

  // 一定量スクロールしたらページトップボタンをスライドイン
  if( !isMobile() ) {
   $(window).on('scroll', function () {
    if ($(this).scrollTop() > pagetop_offset) {
        $pagetop.css('visibility','visible').addClass('visible');
    } else {
        $pagetop.removeClass('visible');
    }
   });
  }
  function isMobile(){}

})(document, jQuery);



$(window).on('scroll', function () {
	if ($(this).scrollTop() > 200) {
		$('#totop').show();
	}else {
		$('#totop').hide();
	}
});



 $("div.gallery").hover(function() {
 	// カーソルが当たった時の処理
 	$(this).children("p").css("display", "inline");
 	$(this).find("img").css("filter", "brightness(0.7)");
 }, function() {
 	// カーソルが離れた時の処理
 	$(this).children("p").css("display", "none");
 	$(this).find("img").css("filter", "brightness(1)");
 });


$(function() {
    $('.menu-trigger').click(function(){
        $('#slidemenu').toggleClass('active');
		$('a.menu-trigger').toggleClass('active');
		$('#slidebg').toggleClass('active');
    });
    $('#totop').click(function(){
        $('#slidemenu').toggleClass('active');
        $('a.menu-trigger').toggleClass('active');
        $('#slidebg').toggleClass('active');
        $('#back').hide();
    });
});

function drawUnderLine() {
	$("h1").each(function() {
	  var position = $(this).offset().top; 
	  var scroll = $(window).scrollTop(); 
	  var windowHeight = $(window).height(); 
	  if (scroll > position - windowHeight) {
	    $(this).addClass('active'); 
	  }
	});
};
$(document).ready(function() {
    drawUnderLine();
});
$(window).scroll(function() {
    drawUnderLine();
});