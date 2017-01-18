// спользование анимации при скролле
var wHeight = window.innerHeight;
window.onscroll = function() {
    if (document.body.scrollTop || document.documentElement.scrollTop > wHeight / 5) {
        document.querySelector('.skills').style.opacity = 1;
    }
};

$(document).ready(function() {
  // чтобы мышка дергалась
  var mouse = $('#mouse');

  function moveMouse() {
      setInterval(function() {
          mouse.removeClass("mouseDown")
          mouse.addClass('mouseUp');
          setTimeout(function() {
              mouse.removeClass("mouseUp")
              mouse.addClass('mouseDown');
          }, 400);
      }, 3000);
  }
  moveMouse();

  mouse.click(function() {
      // document.body.scrollTop = wHeight * 0.95;
      var a = wHeight;
      $('html, body').animate({
          scrollTop: a
      }, 1000);
  });
});



// слайдер с работами
var slider = document.querySelector('.slider');
var isDown = false;
var startX;
var scrollLeft;

slider.addEventListener('mousedown', function(e) {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', function() {
    isDown = false;
    slider.classList.remove("active");
});

slider.addEventListener('mouseup', function() {
    isDown = false;
    slider.classList.remove("active");
});

slider.addEventListener('mousemove', function(e) {
    if (!isDown) return; // stop slider
    // this will stop any selection
    e.preventDefault();
    var x = e.pageX - slider.offsetLeft;
    var walk = x - startX;
    slider.scrollLeft = scrollLeft - walk;
});

// для телефона
slider.addEventListener('touchstart', function(e) {
    isDown = true;
    slider.classList.add("active");
    startX = e.changedTouches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('touchend', function() {
    isDown = false;
    slider.classList.remove("active");
});

slider.addEventListener('touchcancel', function() {
    isDown = false;
    slider.classList.remove("active");
});

slider.addEventListener('touchmove', function(e) {
    if (!isDown) return; // stop slider
    // this will stop any selection
    e.preventDefault();
    // e.stopPropagation();
    var x = e.changedTouches[0].pageX - slider.offsetLeft;
    var walk = x - startX;
    slider.scrollLeft = scrollLeft - walk;
});




// умения и что знаю
var skill_name = $('.skill-name');
var skills_show = document.getElementsByClassName('skills-show')[0].childNodes;
var skill_name_temp = 0;
var slider_arr = [];

var used_technologies = [{
    name: 'HTML',
    description: 'Опыт адаптивной верстки. Landing page, верстка шаблонов под стационарные мониторы и мобильные устройства (на основе psd-макетов). Использую Emmet. '
}, {
    name: 'CSS',
    description: 'Знание CSS3, использовал для создания анимаций, несложных 3D и 2D преобразований, transition. Навыки адаптивной и резиновой верстки. Использую SASS(scss). Навык верстки с помощью Bootstrap. Кроссбраузерная верстка, Chrome, Mozila, Safari. IE не люблю, но если надо сделаю. '
}, {
    name: 'JS',
    description: 'Знание JavaScript, использую как и чистый JS так и JQuery для создания скриптов для веб-сайтов. Написал несколько маленьких программ, ToDo-list, Color Guess Game, Calculator.'
}, {
    name: 'Angular',
    description: 'Базовые знания фреймворка Angular. Сделал 2 приложения, первое "учебное" в портфолио, второе делаю в данный момент.'
}, {
    name: 'PHP',
    description: 'Начал узучать PHP, цель научиться делать темы для Wordpress. Интересно для себя написать блог. Тут же MySQL.'
}, {
    name: 'DataBase(MongoDB)',
    description: 'Базовые знания работы с базой данных (MongoDB). Использовал в работе для интернет магазина, с сервером написаным на NodeJS и с использование Express. Пользовался для обучения работы с Rest: Post, Send, Delete запрсоы к серверу. '
}, {
    name: 'NodeJS',
    description: 'Базовые знания, приложение написано для собственного интереса. Сервер сделан на NodeJS + Express. Использовал разлмные модули такие как passport, для работы с mongoDB использовал mongoose. Для построения HTML страниц использовал шаблонизатор Handlebars (express-handlebars).'
}];

for (key in skill_name) {
    if (skill_name_temp == skill_name.length) break;
    slider_arr.push(skill_name[key])
    skill_name_temp++;
}

var t = '';
slider_arr.forEach(function(n, index) {

    n.addEventListener('click', function() {
        // var str = used_technologies[index].description;
        // var strTemp = str.split('');
        // var strEnd = '';
        // t = strEnd;
        //
        // // функция задержки для цикла
        // function timeout(i) {
        //     setTimeout(function() {
        //         strEnd += strTemp[i];
        //         skills_show[5].innerHTML = strEnd;
        //     }, i * 50);
        // }
        //
        // skills_show[3].innerHTML = used_technologies[index].name;
        // // skills_show[5].innerHTML = used_technologies[index].description;
        //
        // for (var i = 0; i < strTemp.length; i++) {
        //     timeout(i);
        // }

        skills_show[3].style.opacity = '0';
        skills_show[5].style.opacity = '0';

        setTimeout(function() {
            skills_show[3].innerHTML = used_technologies[index].name;
            skills_show[5].innerHTML = used_technologies[index].description;

            skills_show[3].style.opacity = '1';
            skills_show[5].style.opacity = '1';

        }, 1000);

    });
})

// var strTest = 'qwe q qwerty';
// var strTestTemp = strTest.split('');
// var strTestEnd = '';
//
// function timeout (i){
//   setTimeout(function() {
//     strTestEnd += strTestTemp[i];
//     console.log(strTestEnd);
//   }, i * 1000);
// }
//
// for(var i = 0; i < strTestTemp.length; i++){
// 		timeout(i);
// }
