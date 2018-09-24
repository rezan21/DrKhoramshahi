$(document).ready(function(){

  $('.js--scroll-to-contact').click(function(){
    $('html, body').animate({scrollTop: $('.js--section-contact').offset().top},1000);

  });

  $('.js--scroll-to-services').click(function(){
    $('html, body').animate({scrollTop: $('.js--section-services').offset().top},1000);
  });

  $('.js--scroll-to-clinic').click(function(){
    $('html, body').animate({scrollTop: $('.js--section-clinic').offset().top},1000);
  });

  $('.js--scroll-to-album').click(function(){
    $('html, body').animate({scrollTop: $('.js--section-alnum').offset().top},1000);
  });

});
