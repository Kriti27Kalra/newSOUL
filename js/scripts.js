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




  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-427NTMQYKZ');



  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

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
   })(window, document, 'script', '../www.google-analytics.com/analytics.js', 'ga');

   ga('create', 'UA-46156385-1', 'cssscript.com');
   ga('send', 'pageview');

   $(function () {

      $('.menu-item-99 > a').on('click', function (event) {

         // alert('click event');


         event.preventDefault();
         $(this).toggleClass('expanded');
         $(this).parent().find('ul').first().toggle(1000);

         $(this).parent().siblings().find('ul').hide(500);

         //Hide menu when clicked outside
         $(this).parent().find('ul').parent().mouseleave(function () {
            var thisUI = $(this);
            $('html').click(function () {
               thisUI.children(".sub-menu").hide();
               thisUI.children("a").removeClass('expanded');

               $('html').unbind('click');
            });
         });


      });




   });



    // JavaScript to toggle "See More" and "Show Less" for each profile
    document.querySelectorAll('.show-more-button').forEach(button => {
        button.addEventListener('click', () => {
            const profileId = button.getAttribute('data-profile');
            document.getElementById(`more-text-${profileId}`).style.display = 'none';
            document.getElementById(`additional-text-${profileId}`).style.display = 'block';
            button.style.display = 'none';
            document.querySelector(`.show-less-button[data-profile="${profileId}"]`).style.display = 'block';
        });
    });

    document.querySelectorAll('.show-less-button').forEach(button => {
        button.addEventListener('click', () => {
            const profileId = button.getAttribute('data-profile');
            document.getElementById(`more-text-${profileId}`).style.display = 'block';
            document.getElementById(`additional-text-${profileId}`).style.display = 'none';
            button.style.display = 'none';
            document.querySelector(`.show-more-button[data-profile="${profileId}"]`).style.display = 'block';
        });
    });



// Simple Slider scripts: 
jQuery( document ).ready(function() {
jQuery('#uc_simple_slider_elementor13436').slick({
  autoplay: true,
  autoplaySpeed : 3000,
  pauseOnHover: false,
  speed: 1000,
  lazyLoad: 'progressive',
  fade: true,
  arrows: true,
  dots: true,
   prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
   nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  touchMove : true
}).slickAnimation();
});
// Card Carousel scripts: 
jQuery(document).ready(function(){  
function uc_card_carousel_elementor21071_start(){
        
  var objCarousel = jQuery('#uc_card_carousel_elementor21071');
  
        objCarousel.owlCarousel({
            loop: true,
            rtl:false,
            autoplay:true,
            stagePadding: 0,                                               
            autoplayHoverPause:true,
            margin:15,
            navText : ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
            nav: true,
            rewindNav : false,
            center:false,
            mouseDrag:true,
            touchDrag:true,                    
            setActiveClassOnMobile:true,
            changeItemOnClick:false,
            autoplayTimeout:5000,
            smartSpeed: 2000,  
            dots:false,
            shuffle:false,
            responsive: {
             
                   0 : {
                        items:1,
                        slideBy: 1
                    },
                    768 : {
                        items:2,
                        slideBy: 1
                    },
                    980 : {
                        items:4,
                        slideBy: 1 
                    }  
            }
          });
  
  
                                
            objCarousel.trigger("uc-object-ready");
            jQuery("body").trigger("uc-remote-parent-init", [objCarousel]);
              
  
}if(jQuery("#uc_card_carousel_elementor21071").length) uc_card_carousel_elementor21071_start(); else
    jQuery( document ).on( 'elementor/popup/show', () => { if(jQuery("#uc_card_carousel_elementor21071").length) uc_card_carousel_elementor21071_start();});
});

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
})
      $( document ).ready(function() {


 setTimeout(showModal,3000);
function showModal(){
 

   var is_modal_show = sessionStorage.getItem('alreadyShow');
if(is_modal_show != 'alredy shown'){
   sessionStorage.setItem('alreadyShow','alredy shown');
  $("#popup").show();
  
}   
}
$("#close").click(function(){
  $("#popup").hide();
})


   
});

    
    function myModal(cost) {
        var amount = cost; // Assign the 'cost' parameter to the 'amount' variable
        console.log(amount);
        $("#amount").val(amount); // Set the value of the element with ID 'amount'
    }
