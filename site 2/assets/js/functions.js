  'use strict';

  $(document).ready(function () {//при загрузке страницы

    menu();

    function menu() {
      var $trigger = $('.trigger-nav'),
          $menu = $('.trigger-victim');
      $trigger.click(function() {
        $(this).next($menu).slideToggle();//выезжаюшая анимация сверху
    });
     
      $(window).resize(function() {
        if ( $(window).width() > 992 ) {//если больше 992 то уюираем стили добавленые кодом сверху
          $menu.removeAttr('style');
        }
      });
    }
  }); 