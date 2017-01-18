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

    $('#menu').click(function() {
        $('.line').toggleClass('trigger');
    });


});
