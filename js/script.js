jQuery(document).ready(function ($) {
  //burger
  $(".icon-menu").on("click", function () {
    $(".icon-menu").toggleClass("active") &&
      $(".menu__list").toggleClass("show") &&
      $(".menu__list").toggleClass("animLeft") &&
      $(".header__phone").toggle() &&
      $(".header__logo").toggle() &&
      $(".header").toggleClass("mob") &&
      $("body").toggleClass("lock");
  });

  //цвет шапки

  let scrolled;
  window.onscroll = function () {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 50) {
      $(".header").addClass("bg");
    }
    if (50 > scrolled) {
      $(".header").removeClass("bg");
    }
  };

  //отзывы
  $(".testimonials__slider").slick({
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
  });

  //галерея
  $(".gallery__slider").slick({
    dots: false,
    infinite: true,
    speed: 700,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    arrows: true,
    autoplay: true,
    nextArrow: '<i class="slick-next fas fa-arrow-right"></i>',
    prevArrow: '<i class="slick-prev fas fa-arrow-left"></i>',
  });

  //popups
  $(".popup__icon").on("click", function () {
    $(".popup").removeClass("show") &&
      $("body").removeClass("lock") &&
      $("input[type=text]").val("") &&
      $("input[type=phone]").val("") &&
      $(".message").hide() &&
      $(".thanks").hide();
  });

  $(".banner__btn").on("click", function () {
    $(".popup01").addClass("show") && $("body").toggleClass("lock");
  });

  $(".jurist__btn").on("click", function () {
    $(".popup01").addClass("show") && $("body").toggleClass("lock");
  });

  $(".fiz__btn").on("click", function () {
    $(".popup01").addClass("show") && $("body").toggleClass("lock");
  });

  $(".services__btn").on("click", function () {
    $(".popup02").addClass("show") && $("body").toggleClass("lock");
  });

  $(".testimonials__btn").on("click", function () {
    $(".popup03").addClass("show") && $("body").toggleClass("lock");
  });

  //form
  $(".phone-field").inputmask("+7(999)999-9999");

  // добавляем правило для валидации телефона
  jQuery.validator.addMethod("checkMaskPhone", function (value, element) {
    return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value);
  });

  $.validator.addClassRules({
    "phone-field": {
      checkMaskPhone: true,
    },
  });

  //якорь
  $(".back-top").hide();
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $(".back-top").show();
      } else {
        $(".back-top").hide();
      }
    });
  });

  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });

  //анимация
  const animItems = document.querySelectorAll("._anim-items");

  if (animItems.length > 0) {
    window.addEventListener("scroll", animOnScroll);
    function animOnScroll() {
      for (let i = 0; i < animItems.length; i++) {
        const animItem = animItems[i];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;

        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if (
          pageYOffset > animItemOffset - animItemPoint &&
          pageYOffset < animItemOffset + animItemHeight
        ) {
          animItem.classList.add("_active");
        } else {
          if (!animItem.classList.contains("_anim-no-hide")) {
            animItem.classList.remove("_active");
          }
        }
      }
    }
    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }

    setTimeout(() => {
      animOnScroll();
    }, 300);
  }
});
