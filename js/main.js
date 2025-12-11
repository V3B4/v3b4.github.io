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

/*
function drawUnderLine() {
  var position = $(this).offset().top; 
  var scroll = $(window).scrollTop(); 
  var windowHeight = $(window).height(); 
  if (scroll > position - windowHeight) {
    $(".animationUnderLine").each.addClass('active');
  }
};
*/

function addActive(elementNames) {
  elementNames.forEach(function(name) {
  	$(name).each(function() {
	    var position = $(this).offset().top; 
	    var scroll = $(window).scrollTop(); 
	    var windowHeight = $(window).height(); 
	    if (scroll > position - windowHeight) {
	      $(this).addClass('active'); 
      }
    });
	});
};
addActiveElements = [".animationUnderLine", "h1", "h2", "h3", "iframe", "p",
".box-2", ".box-3", ".box-3-sp-2", ".box-4", ".box-4-sp-2", ".box-5", ".box-55", ".box-6", ".box-7", ".box-9", ".box-8", ".box-10", ".box-12"]
//$(document).ready(function() {
window.onload = function () {
    addActive(addActiveElements);
};
$(window).scroll(function() {
    addActive(addActiveElements);
});

/*
document.oncontextmenu = function(){ return false; };
document.body.oncontextmenu = "return false;"
document.onselectstart = function(){ return false; };
document.onmousedown = function(){ return false; };
document.body.onselectstart = "return false;"
document.body.onmousedown = "return false;"
*/



document.addEventListener('DOMContentLoaded', function() {
    // 必要な要素を取得
    const toggleButton = document.getElementById('AIToggleButton11');
    const aiOff = document.querySelector('.AI-off');
    const aiOn = document.querySelector('.AI-on');

    // ボタンにクリックイベントリスナーを設定
    toggleButton.addEventListener('click', function() {
        // .ai-off要素の表示/非表示を切り替える
        aiOff.classList.toggle('hidden');

        // .ai-on要素の表示/非表示を切り替える
        aiOn.classList.toggle('hidden');

        // ボタンのテキストを切り替える (おまけ)
        if (aiOn.classList.contains('hidden')) {
            // ai-onが非表示（オフの状態）の場合
            toggleButton.textContent = '表示をオンにする';
        } else {
            // ai-onが表示（オンの状態）の場合
            toggleButton.textContent = '表示をオフにする';
        }
    });
});



$(function() {
    $('.AIToggleButton').click(function(e){
        e.preventDefault(); 
        $('.AI-on').toggleClass('hidden');
        $('.AI-off').toggleClass('hidden');
        if ($('.AI-on').hasClass('hidden')) {
          $('.AIToggleButton').text('AI加工画像を表示');
        } else {
          $('.AIToggleButton').text('AI加工画像を非表示');
        }
    });
});
