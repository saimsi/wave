$(function () {
  $(".header__menu").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),

      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1000 мс
    $('body,html').animate({ scrollTop: top }, 1000);
  });
  $('.blog__slider').slick({
    dots: true,
    arrows: false,
  });
  $('.menu__btn, .header__menu a').on('click', function () {
    $('.menu__list').toggleClass('menu__list-active');
  });

  var mixer = mixitup('.portfolio__content');
});
