(function($) {
  $(".popup-image").magnificPopup({
    type: "image",
    fixedContentPos: false,
    fixedBgPos: false,
    mainClass: "mfp-no-margins mfp-with-zoom",
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300
    }
  });
})($);