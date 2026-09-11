$(document).ready(function () {

  // Menu mobile: abre/fecha a lista de navegação
  $('#mobile_menu').on('click', function () {
    $('#nav_list').toggleClass('mobile-active');
  });

  // Fecha o menu mobile quando o usuário clica em um link
  $('.nav-item a').on('click', function () {
    $('#nav_list').removeClass('mobile-active');
  });

  // Destaca no menu a seção que está sendo vista
  var sections = $('main section');
  var navLinks = $('.nav-item');

  $(window).on('scroll', function () {
    var scrollPos = $(window).scrollTop() + 150;

    sections.each(function () {
      var top = $(this).offset().top;
      var bottom = top + $(this).outerHeight();
      var id = $(this).attr('id');

      if (scrollPos >= top && scrollPos < bottom) {
        navLinks.removeClass('active');
        $('.nav-item a[href="#' + id + '"]').parent().addClass('active');
      }
    });
  });

});