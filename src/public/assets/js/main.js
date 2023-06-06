/* ==============
 ========= js documentation ==========================

    ==================================================

     01. preloader
     -------------------------------------------------
     02. navbar
     -------------------------------------------------
     03. quality tab
     -------------------------------------------------
     04. faq
     -------------------------------------------------
     05. registraion tab
     -------------------------------------------------
     06. image before after slider
     -------------------------------------------------
     07. copyright year
     -------------------------------------------------
     08. scroll to top with progress

    ==================================================
============== */

(function ($) {
  "use strict";

  jQuery(document).ready(function () {
    // preloader
    setTimeout(function () {
      $("#ctn-preloader").addClass("loaded");
      if ($("#ctn-preloader").hasClass("loaded")) {
        $("#preloader")
          .delay(1000)
          .queue(function () {
            $(this).remove();
          });
      }
    }, 1000);

    // navbar
    $(".nav__bar, .sidedot-two").on("click", function () {
      $(this).toggleClass("nav__bar-toggle");
      $(".nav__menu").toggleClass("nav__menu-active");
      $(".backdrop").toggleClass("backdrop-active");
      $("body").toggleClass("body-active");
    });

    $(".backdrop, .nav__menu-close").on("click", function () {
      $(".backdrop").removeClass("backdrop-active");
      $(".nav__bar").removeClass("nav__bar-toggle");
      $(".nav__menu").removeClass("nav__menu-active");
      $(".nav__dropdown").removeClass("nav__dropdown-active");
      $(".nav__menu-link--dropdown").next(".nav__dropdown").slideUp(500);
      $(".nav__menu-link--dropdown").removeClass(
        "nav__menu-link--dropdown-active"
      );
      $("body").removeClass("body-active");
    });

    $(".sidedot, .sidedot-three").on("click", function () {
      $(this).toggleClass("sidedot-active");
      $(".off-canvas-backdrop").toggleClass("off-canvas-backdrop-active");
      $(".off-canvas").toggleClass("off-canvas-active");
      $("body").toggleClass("body-active");
    });

    $(".off-canvas-backdrop, .off-canvas-close").on("click", function () {
      $(".off-canvas").removeClass("off-canvas-active");
      $(".off-canvas-backdrop").removeClass("off-canvas-backdrop-active");
      $("body").removeClass("body-active");
      $(".sidedot").removeClass("sidedot-active");
    });

    $(window).on("resize", function () {
      $(".backdrop").removeClass("backdrop-active");
      $(".nav__bar").removeClass("nav__bar-toggle");
      $(".nav__menu").removeClass("nav__menu-active");
      $(".nav__dropdown").removeClass("nav__dropdown-active");
      $(".nav__menu-link--dropdown").removeClass(
        "nav__menu-link--dropdown-active"
      );
      $(".off-canvas").removeClass("off-canvas-active");
      $(".off-canvas-backdrop").removeClass("off-canvas-backdrop-active");
      $(".sidedot").removeClass("sidedot-active");
      $("body").removeClass("body-active");
    });

    $(".nav__menu-link--dropdown").on("click", function () {
      $(this).next(".nav__dropdown").toggleClass("nav__dropdown-active");
      $(this).toggleClass("nav__menu-link--dropdown-active");
    });

    $(".nav__menu-link-childr").on("click", function () {
      $(this).next(".nav__dropdown-child").toggleClass("nav__dropdown-active");
      $(this).toggleClass("nav__menu-link--dropdown-active");
    });

    // on window scroll
    $(window).on("scroll", function () {
      // position navbar on scroll
      var scroll = $(window).scrollTop();
      if (scroll < 100) {
        $(".header").removeClass("header-active");
        $(".header-two").removeClass("header-two-active");
        $(".header-three").removeClass("header-three-active");
      } else {
        $(".header").addClass("header-active");
        $(".header-two").addClass("header-two-active");
        $(".header-three").addClass("header-three-active");
      }
    });

    // quality tab
    $(".quality-section__tab-item").hide();
    $(".quality-section__tab-item:first").show();
    $(".quality-filter-btn").on("click", function (event) {
      $(".quality-filter-btn").removeClass("quality-filter-btn--active");
      $(this).addClass("quality-filter-btn--active");
      $(".quality-section__tab-item").hide();
      var activeQuality = $(this).attr("href");
      $(activeQuality).fadeIn(600);

      return false;
    });

    // faq
    $(".faq-o .accordion-button:not(.collapsed)")
      .parents(".accordion-item")
      .addClass("faq-one-active");
    $(".faq-o .accordion-button").on("click", function () {
      $(".faq-o .accordion-item").removeClass("faq-one-active");
      $(".faq-o .accordion-button:not(.collapsed)")
        .parents(".accordion-item")
        .addClass("faq-one-active");
    });

    $(".faq-two .accordion-button:not(.collapsed)")
      .parents(".accordion-item")
      .addClass("faq-two-active");
    $(".faq-two .accordion-button").on("click", function () {
      $(".faq-two .accordion-item").removeClass("faq-two-active");
      $(".faq-two .accordion-button:not(.collapsed)")
        .parents(".accordion-item")
        .addClass("faq-two-active");
    });

    // registraion tab
    $(".registration-pop").hide();
    $(".registration-pop:first").show();
    $(".regi-btn").on("click", function () {
      $(".regi-btn").removeClass("regi-active");
      $(this).addClass("regi-active");
      $(".registration-pop").hide();
      var activeRegistration = $(this).attr("href");
      $(activeRegistration).fadeIn(600);

      return false;
    });

    // image before after slider

    $("#ranguslider").on("input change", (e) => {
      const sliderPos = e.target.value;

      $(".foreground-img").css("width", `${sliderPos}%`);

      $(".rangu-slider-button").css("left", `calc(${sliderPos}% - 18px)`);
    });

    $("#ranguslider2").on("input change", (e) => {
      const sliderPos2 = e.target.value;

      $(".foreground-img-1").css("width", `${sliderPos2}%`);

      $(".rangu-slider-button3").css("left", `calc(${sliderPos2}% - 18px)`);
    });

    $("#ranguslider3").on("input change", (e) => {
      const sliderPos3 = e.target.value;

      $(".foreground-img3").css("width", `${sliderPos3}%`);

      $(".rangu-slider-button4").css("left", `calc(${sliderPos3}% - 18px)`);
    });

    $("#ranguslider4").on("input change", (e) => {
      const sliderPos4 = e.target.value;

      $(".foreground-img4").css("width", `${sliderPos4}%`);

      $(".rangu-slider-button5").css("left", `calc(${sliderPos4}% - 18px)`);
    });

    $("#ranguslider5").on("input change", (e) => {
      const sliderPos5 = e.target.value;

      $(".foreground-img5").css("width", `${sliderPos5}%`);

      $(".rangu-slider-button6").css("left", `calc(${sliderPos5}% - 18px)`);
    });

    $("#ranguslider6").on("input change", (e) => {
      const sliderPos6 = e.target.value;

      $(".foreground-img6").css("width", `${sliderPos6}%`);

      $(".rangu-slider-button7").css("left", `calc(${sliderPos6}% - 18px)`);
    });

    // portfolio
    $("#portfolioslider").on("input change", (e) => {
      const sliderPortfolioPos = e.target.value;

      $(".portfolio-foreground-img-1").css("width", `${sliderPortfolioPos}%`);

      $(".portfolio-slider-button1").css("left", `calc(${sliderPortfolioPos}% - 18px)`);
    });

    $("#portfolioslider2").on("input change", (e) => {
      const sliderPortfolioPos2 = e.target.value;

      $(".portfolio-foreground-img-2").css("width", `${sliderPortfolioPos2}%`);

      $(".portfolio-slider-button2").css("left", `calc(${sliderPortfolioPos2}% - 18px)`);
    });

    $("#portfolioslider3").on("input change", (e) => {
      const sliderPortfolioPos3 = e.target.value;

      $(".portfolio-foreground-img-3").css("width", `${sliderPortfolioPos3}%`);

      $(".portfolio-slider-button3").css("left", `calc(${sliderPortfolioPos3}% - 18px)`);
    });

    $("#portfolioslider4").on("input change", (e) => {
      const sliderPortfolioPos4 = e.target.value;

      $(".portfolio-foreground-img-4").css("width", `${sliderPortfolioPos4}%`);

      $(".portfolio-slider-button4").css("left", `calc(${sliderPortfolioPos4}% - 18px)`);
    });

    $("#portfolioslider5").on("input change", (e) => {
      const sliderPortfolioPos5 = e.target.value;

      $(".portfolio-foreground-img-5").css("width", `${sliderPortfolioPos5}%`);

      $(".portfolio-slider-button5").css("left", `calc(${sliderPortfolioPos5}% - 18px)`);
    });


    $("#portfolioslider6").on("input change", (e) => {
      const sliderPortfolioPos6 = e.target.value;

      $(".portfolio-foreground-img-6").css("width", `${sliderPortfolioPos6}%`);

      $(".portfolio-slider-button6").css("left", `calc(${sliderPortfolioPos6}% - 18px)`);
    });

    // copyright year
    $("#copyYear").text(new Date().getFullYear());

    // scroll to top with progress
    var progressPath = document.querySelector(".progress-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 550;
    jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(".progress-wrap").addClass("active-progress");
      } else {
        jQuery(".progress-wrap").removeClass("active-progress");
      }
    });
    jQuery(".progress-wrap").on("click", function (event) {
      event.preventDefault();
      jQuery("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });
  });
})(jQuery);


// ==================================================================
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview').css('background-image', 'url('+e.target.result +')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#imageUpload").change(function() {
    readURL(this);
});
if (! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $('a[href="/auth/redirect"]').append(' continue with google')
}

