/* ==============
 ========= js documentation ==========================

 * theme name: Photodit
 * version: 1.0
 * description: Clipping Path Service Html Template
 * author: Hugebinary
 * author-url: https://themeforest.net/user/hugebinary

    ==================================================

     01. init wow js
     -------------------------------------------------
     02. service slider
     -------------------------------------------------
     03. video modal
     -------------------------------------------------
     04. testimonial slider
     -------------------------------------------------
     05. news slider
     -------------------------------------------------
     06. sponsor slider
     -------------------------------------------------
     07. odometer counter
     -------------------------------------------------
     08. feautre slider
     -------------------------------------------------
     09. testimonial two slider
     -------------------------------------------------
     10. feautre slider
     -------------------------------------------------
     11. currency select
     -------------------------------------------------
     12. project three slider
     -------------------------------------------------
     13. sponsor three slider
     -------------------------------------------------
     14. news slider
     -------------------------------------------------
     15. team two slider
     -------------------------------------------------
     16. service select
     -------------------------------------------------
     17. portfolio filter
     -------------------------------------------------
     18. recent project slider
     -------------------------------------------------
     19. subject select

    ==================================================
============== */

(function ($) {
  "use strict";

  jQuery(document).ready(function () {

    // device width
    let device_width = window.innerWidth;

    // init wow js
    new WOW().init();

    // service slider
    $(".services__slider")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 3,
        speed: 1000,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        appendDots: $(".services-pagination"),
        centerMode: true,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });

    // video modal
    if (document.querySelector(".video-btn") !== null) {
      $(".video-btn").magnificPopup({
        disableOn: 768,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
      });
    }

    // testimonial slider
    $(".testimonial__slider")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 3,
        speed: 1000,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $(".prev-testimonial"),
        nextArrow: $(".next-testimonial"),
        dots: false,
        centerMode: false,
        variableWidth: true,
      })
      .on("afterChange", function (event, slick, currentSlide) {
        var colors = ["#e74545", "#181818", "#4569e7"];
        var newIndex = currentSlide % colors.length;
        $(".testimonial").css("background-color", colors[newIndex]);
      });

    // news slider
    $(".news__slider")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 3,
        speed: 1000,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        appendDots: $(".news-pagination"),
        centerMode: true,
        centerPadding: "0px",
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });

    // sponsor slider
    $(".sponsor__slider")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 6,
        speed: 1000,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        centerMode: false,
        responsive: [
          {
            breakpoint: 1700,
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      });

    // odometer counter
    $(".odometer").each(function () {
      $(this).isInViewport(function (status) {
        if (status === "entered") {
          for (
            var i = 0;
            i < document.querySelectorAll(".odometer").length;
            i++
          ) {
            var el = document.querySelectorAll(".odometer")[i];
            el.innerHTML = el.getAttribute("data-odometer-final");
          }
        }
      });
    });

    // feautre slider
    $(".feature__slider")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 3,
        speed: 1000,
        autoplaySpeed: 4000,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        appendDots: $(".feature-pagination"),
        centerMode: true,
        centerPadding: "0px",
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });

    // testimonial two slider
    $(".testimonial-two__slider")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 1,
        speed: 1000,
        autoplaySpeed: 4000,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        appendDots: $(".testimonial-two-pagination"),
        centerMode: true,
        centerPadding: "0px",
      });

    // feautre slider
    $(".news-two__slider")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 1,
        speed: 1000,
        autoplaySpeed: 4000,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        appendDots: $(".news-two-pagination"),
        centerMode: true,
        centerPadding: "0px",
      });

    // currency select
    $(".currency").niceSelect();

    // project three slider
    $(".project-three__slider")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 3,
        speed: 1000,
        autoplaySpeed: 4000,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        appendDots: $(".project-three-pagination"),
        centerMode: true,
        centerPadding: "0px",
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });

    // sponsor three slider
    $(".sponsor__three-slider")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 5,
        speed: 1000,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: "0px",
        responsive: [
          {
            breakpoint: 1700,
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      });

    // news slider
    $(".news__two-slider")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 2,
        speed: 1000,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        appendDots: $(".news-two-pagination"),
        centerMode: true,
        centerPadding: "0px",
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });

    // team two slider
    $(".team-two__slider")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 3,
        speed: 1000,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        appendDots: $(".services-pagination"),
        centerMode: true,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });

    // service select
    $(".select-services").niceSelect();

    // portfolio filter
    $(".grid").imagesLoaded(function () {
      // init Isotope
      var $grid = $(".grid").isotope({
        itemSelector: ".grid-item",
        layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
      });

      // filter items on button click
      $(".portfolio__filter-btns").on("click", "button", function () {
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({ filter: filterValue });
      });

      //for menu active class
      $(".portfolio__filter-btns button").on("click", function (event) {
        $(this).siblings(".active").removeClass("active");
        $(this).addClass("active");
        event.preventDefault();
      });
    });

    // recent project slider
    $(".recent-project__slider")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 1,
        speed: 1000,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        appendDots: $(".recent-project-pagination"),
        centerMode: false,
      });

    // subject select
    $(".subject").niceSelect();

        // register gsap
        gsap.registerPlugin(
          ScrollTrigger,
          ScrollSmoother,
          ScrollToPlugin
        );
    
        // config gsap
        gsap.config({
          nullTargetWarn: false,
        });
    
        if (device_width > 100) {
          // smooth scroll
          const smoother = ScrollSmoother.create({
            smooth: 2.35,
            effects: device_width < 1025 ? false : true,
            smoothTouch: false,
            normalizeScroll: false,
            ignoreMobileResize: true,
          });
        }

  });
})(jQuery);
