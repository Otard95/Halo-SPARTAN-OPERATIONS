// Declare Global variables
var settings = {
  banner_scroll_mult: 0.6,
  logo_scroll_mult: 0.3
}

var header = {
  banner: {},
  logo: {}
}

$(window).ready(function(){
  header.dom = $('.header-container');
  header.height = header.dom.height();
  header.banner.dom = $('.home-header');
  header.logo.dom = $('.header-text');
});

$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

  paralax_header(wScroll);
});


function paralax_header(x) {
  if(x < header.height){
    console.log(x)
    header.banner.dom.css({'transform': 'translateY(' + x * settings.banner_scroll_mult + 'px)'});
    header.logo.dom.css({'transform': 'translateY(' + x * settings.logo_scroll_mult + 'px)'});
  }
}
