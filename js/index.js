var scrollBlur = {
  bannerSelector: '.header',
  imgSelector: '.header-img',
  degree: 2
}
var banner = null;

// When DOM loaded
$(function(){
  banner = $(scrollBlur.bannerSelector);
});

// Scroll event
$(window).on('scroll', function(){
  if (!banner[0]) return;
  
	var scrollTop = $(window).scrollTop();
  
  banner.each( function(){
    var offsetTop = $(this).offset().top;
    
    $(this).find(scrollBlur.imgSelector).each(function(){
      var current = $(this);
      if ( scrollTop > offsetTop && scrollTop < offsetTop + current.height() ) {
        var opacity = Math.floor( (scrollTop - offsetTop) * scrollBlur.degree / current.height() * Math.pow( 10, 2 ) ) / Math.pow( 10, 2 );
        if ( opacity <= 1 ) {
          current.css('opacity', 1 - opacity);
        }
      }
    });
  });
});;