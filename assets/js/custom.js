"use strict";

/* eslint-disable no-console */
(function ($) {
  $(document).ready(function () {
    $(".lazy").Lazy({
      // your configuration goes here
      scrollDirection: "vertical",
      effect: "fadeIn",
      visibleOnly: true,
      onError: function onError(element) {
        console.log("error loading " + element.data("src"));
      },
      onFinishedAll: function onFinishedAll() {
        console.log("lazy load finished");
      }
    });
    $(".bclick").click(function () {
      window.location = $(this).find("a").attr("href");
      return false;
    });

    if (0 < $("[data-background]").length) {
      $("[data-background]").each(function () {
        var $background, $backgroundmobile, $this;
        $this = $(this);
        $background = $(this).attr("data-background");
        $backgroundmobile = $(this).attr("data-background-mobile");

        if ("#" === $this.attr("data-background").substr(0, 1)) {
          return $this.css("background-color", $background);
        } else if ($this.attr("data-background-mobile") && device.mobile()) {
          return $this.css("background-image", "url(" + $backgroundmobile + ")");
        } else {
          return $this.css("background-image", "url(" + $background + ")");
        }
      });
    }

    $(".inline").modaal();
  });
  $(function () {
    $(".ct-slick-homepage").slick({
      autoplay: true,
      autoplaySpeed: 5000,
      fade: true,
      infinite: true,
      cssEase: "linear",
      prevArrow: '<button type="button" class="hslick-prev">Previous</button>',
      nextArrow: '<button type="button" class="hslick-next">Next</button>'
    });
  });
  $(function () {
    $(".slick-slider").slick({
      autoplay: true,
      autoplaySpeed: 5000,
      fade: true,
      infinite: true,
      cssEase: "linear",
      // prevArrow: '<button type="button" class="hslick-prev">Previous</button>',
      // nextArrow: '<button type="button" class="hslick-next">Next</button>',
      arrows: false // dots: true,

    });
  });
  $(function () {
    $(".testimonials").slick({
      autoplay: true,
      autoplaySpeed: 5000,
      fade: true,
      infinite: true,
      cssEase: "linear",
      // prevArrow: '<button type="button" class="hslick-prev">Previous</button>',
      // nextArrow: '<button type="button" class="hslick-next">Next</button>',
      arrows: false // dots: true,

    });
  });
  $(function () {
    var url = window.location.href;
    $(".service").each(function () {
      if ($("a", this).attr("href") == url) {
        $(this).addClass("active");
      }
    });
    console.log(url);
  });
  $(document).ready(function () {
    $("select").niceSelect();
    $(".cbox").click(function () {
      window.location = $(this).find("a").attr("href");
      return false;
    });
  });
  $(document).ready(function (e) {
    // $('.faq-item .faqa').hide();
    // $('.faq-item .faqq').click(function(){
    // 	$('.active').not(this).removeClass('active');
    // 	$(this).toggleClass('active');
    // 	$(this).next().slideToggle()
    // 	// .siblings('.faqa:visible').slideUp();
    // });
    $(".faq-item").on("click", ".faqq", function () {
      $(this).toggleClass("active").next().slideToggle();
    });
  });
})(jQuery);