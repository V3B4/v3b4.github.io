;(function (d, $) {

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

  // タッチデバイス（スマートフォンなど）かどうかを判定する関数
  function isMobile(){
  // return typeof window.orientation != "undefined";
  }

})(document, jQuery);




/*$(function() {
    $('body').hide();
});



window.onload = $(function() {
    $('body').fadeIn(500);
});


$(function() {
window.addEventListener("load", function(){
  $('body').fadeIn(500);
}, false);
});


$(function)() {
	$(window).scroll(function(){
  		var obj_t_pos = $('footer').offset().top;
		var scr_count = $(document).scrollTop();
		if(scr_count > obj_t_pos){ // スクロール量が、指定した要素の位置を超えたら発火
			$('#totop').show();
			document.write("表示する文字列")
		}
		else{
			$('#totop').hide();
		}
	})

});*/



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


// 怪しい日本語のボタン
$(function() {
    var flag = 1;
    var button = document.getElementById('esenapaj');
    $('#esenapaj').click(function(){
        if(flag == 1){
            document.body.style.fontFamily = "esenapaj";
            flag = -1;
            button.innerHTML = "正しい日本語に戻す"
        }
        else{
            document.body.style.fontFamily = "メイリオ", "Meiryo", "sans-serif";
            flag = 1;
            button.innerHTML = "怪レい日本语で表示すゑ"
        }
    });

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
