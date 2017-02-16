$(document).ready(function() {

  // скролл для ссылок
    $('a[href*="#"]:not([href="#"])').click(function() {
        var target = $(this.hash);
        if (target[0].id == 'top') {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
        } else {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    function menu_click(){
        var set = false;
        return function(){
            $('header').toggleClass('show-menu');
            $('.line').toggleClass('trigger');
            if(!set){
                setTimeout(function(){
                    $('body').toggleClass('stop-scroll');
                    $('#menu').css('position','fixed');
                },900);
                return set = true;
            }else{

                $('body').toggleClass('stop-scroll');
                $('#menu').css('position','absolute');
                return set = false;
            }
        }
    }

    var hamburger = menu_click();

    $('#menu').click(hamburger);



});
