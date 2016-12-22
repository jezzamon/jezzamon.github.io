(function() {
  console.log('hello there!');

  $(document).ready(function() {
    $('.animsition').animsition({
      inClass: 'zoom-in-lg',
      outClass: 'zoom-out',
      inDuration: 1500,
      outDuration: 800,
      linkElement: '.animsition-link',
      loading: true,
      loadingParentElement: 'body',
      loadingClass: 'animsition-loading',
      loadingInner: '',
      timeout: false,
      timeoutCountdown: 5000,
      onLoadEvent: true,
      browser: ['animation-duration', '-webkit-animation-duration'],
      overlay: false,
      overlayClass: 'animsition-overlay-slide',
      overlayParentElement: 'body',
      transition: function(url) {
        window.location.href = url;
      }
    });
  });

  $('.special.cards .image').dimmer({
    on: 'hover'
  });

}).call(this);

 //# sourceMappingURL=main.js.map