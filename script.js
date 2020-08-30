// Page Scrolling on Home Page
( function( $ ) {
  "use strict"; // Start of use strict

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: ($($anchor.attr('href')).offset().top - 54)
      }, 1250, 'easeInOutExpo');
      event.preventDefault();
  });

  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
      target: '#mainNav',
      offset: 54
  });

  // Closes the Responsive Menu on Menu Item Click
  $('#navbarResponsive>ul>li>a').click(function() {
      $('#navbarResponsive').collapse('hide');
  });

  // jQuery to collapse the navbar on scroll
  $(window).scroll(function() {
      if ($("#mainNav").offset().top > 100) {
          $("#mainNav").addClass("navbar-shrink");
      } else {
          $("#mainNav").removeClass("navbar-shrink");
      }
  });

} )( jQuery );

// design fotogalerie
var btn_prev = document.querySelector('#gallery .buttons .prev');
var btn_next = document.querySelector('#gallery .buttons .next');

var images = document.querySelectorAll('#gallery .photos img');
var count = 0;


btn_prev.addEventListener('click', function() {
	images[count].className = '';
	count--;
	
	if(count < 0) {
		count = images.length - 1;
	}
	
	images[count].className = 'showed';
});

btn_next.addEventListener('click', function() {
	images[count].className = '';
	count++;
	
	if(count >= images.length) {
		count = 0;
	}
	
	images[count].className = 'showed';
});

// barefoot fotogalerie
const containergallery = document.querySelector('.containergallery');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

containergallery.addEventListener('click', function (e) {

    if (e.target.className == 'thumb') {
        jumbo.src = e.target.src;
        jumbo.classList.add('fade');

        setTimeout(function () {
            jumbo.classList.remove('fade');
        }, 500);


        thumbs.forEach(function (thumb) {
            thumb.className = 'thumb';
        });

        e.target.classList.add('active');
    }
});


// Aplikace blog


