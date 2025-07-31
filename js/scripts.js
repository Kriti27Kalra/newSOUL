  // Google Analytics
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-427NTMQYKZ');
  gtag('config', 'AW-11418776471');
  gtag('event', 'conversion', {'send_to': 'AW-11418776471/qfb4CNDmyfgYEJfn8sQq'});

  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

  ga('create', 'UA-46156385-1', 'cssscript.com');
  ga('send', 'pageview');


  // MDB Carousel Init (Banner Slideshow)
document.addEventListener('DOMContentLoaded', function () {
  const carouselElement = document.querySelector('#carouselExampleCrossfade');
  if (carouselElement) {
    new mdb.Carousel(carouselElement, {
      interval: 5000, // every 3 seconds
      ride: 'carousel',
      pause: false    // keep sliding even on hover
    });
  }
});



  // Scroll-based Video Play / Pause
  $(document).ready(function() {
    let playAfterThisHeight = 40;
    let playBeforeThisHeight = 55;

    $(document).scroll(function() {
      let crollheightper = ($(document).scrollTop()/$(document).height()) * 100;
      crollheightper = Math.round(crollheightper);

      if (crollheightper > playAfterThisHeight && crollheightper < playBeforeThisHeight) {
        $('.video').prop('muted', false).trigger('play');
      } else {
        $('.video').prop('muted', true).trigger('pause');
      }
    });
  });


  // Preloader
  $(document).ready(function() {
    function Preloader() {
      var preloader = $('.preloader');
      preloader.show();
      preloader.delay(1000).fadeOut(500);
    }
    if (!sessionStorage.getItem('doNotShow')) {
      sessionStorage.setItem('doNotShow', true);
      Preloader();
    } else {
      $('.preloader').hide();
    }
  });


  // Popup Modal (Show once per session)
  $(document).ready(function() {
    setTimeout(showModal, 3000);
    function showModal(){
      var is_modal_show = sessionStorage.getItem('alreadyShow');
      if(is_modal_show !== 'already shown'){
        sessionStorage.setItem('alreadyShow','already shown');
        $("#popup").show();
      }
    }
    $("#close").click(function(){
      $("#popup").hide();
    });
  });


  // Example function for modal with amount input
  function myModal(cost) {
    var amount = cost;
    $("#amount").val(amount);
  }
