(function ($) {
    "use strict";
/*--
    Commons Variables
-----------------------------------*/
var windows = $(window);
    
/*--
    Side Header Open & Close Functions
----------------------------------------------------------*/
var sideHeader = $('.side-header');
var sideHeaderToggle = $('.side-header-toggle');
var sideHeaderClose = $('.side-header-close');
var sideHeaderOverlay = $('.side-menu-overlay');

// Side Header Toggle
sideHeaderToggle.on('click', function(){
    if($(this).hasClass('toggle-close')) {
        $(this).removeClass('toggle-close').css('width', '30px');
        sideHeader.removeClass('side-menu-open');
        sideHeaderOverlay.removeClass('overlay-show');
    }else{
        $(this).addClass('toggle-close').css('width', '22px');
        sideHeader.addClass('side-menu-open');
        sideHeaderOverlay.addClass('overlay-show');
    }
});

// Side Header Overlay
sideHeaderOverlay.on('click', function(){
    if(sideHeaderToggle.hasClass('toggle-close')) {
        sideHeaderToggle.removeClass('toggle-close').css('width', '30px');
        sideHeader.removeClass('side-menu-open');
        sideHeaderOverlay.removeClass('overlay-show');
    }else{
        sideHeaderToggle.addClass('toggle-close').css('width', '22px');
        sideHeader.addClass('side-menu-open');
        sideHeaderOverlay.addClass('overlay-show');
    }
});

// Side Header Close
sideHeaderClose.on('click', function(){
    if(sideHeaderToggle.hasClass('toggle-close')) {
        sideHeaderToggle.removeClass('toggle-close').css('width', '30px');
        sideHeader.removeClass('side-menu-open');
        sideHeaderOverlay.removeClass('overlay-show');
    }else{
        sideHeaderToggle.addClass('toggle-close').css('width', '22px');
        sideHeader.addClass('side-menu-open');
        sideHeaderOverlay.addClass('overlay-show');
    }
});

/*--
    Side Submenu
----------------------------------------------------------*/
$('.side-menu .menu-item-has-children > a').prepend('<i class="expand menu-expand fa fa-angle-down"></i>');
$('.side-menu .menu-item-has-children ul').slideUp();

$('.side-menu').on('click', 'li a, li a .menu-expand', function(e) {
    var $a = $(this).hasClass('menu-expand') ? $(this).parent() : $(this);
    if ($a.parent().hasClass('menu-item-has-children')) {
        if ($a.attr('href') === '#' || $(this).hasClass('menu-expand')) {
            if ($a.siblings('ul:visible').length > 0) {
                $a.find('.menu-expand').removeClass('fa-angle-up').addClass('fa-angle-down');
                $a.siblings('ul').slideUp();
            }
            else {
                $(this).parents('li').siblings('li').find('.menu-expand').removeClass('fa-angle-up').addClass('fa-angle-down');
                $(this).parents('li').siblings('li').find('ul:visible').slideUp();
                $a.find('.menu-expand').removeClass('fa-angle-down').addClass('fa-angle-up');
                $a.siblings('ul').slideDown();
            }
        }
    }
    if ($(this).hasClass('menu-expand') || $a.attr('href') === '#') {
        e.preventDefault();
        return false;
    }
});
    
/*--
    Full Page
----------------------------------------------------------*/
$('#fullpage').fullpage({
    menu: '.fullpage-menu',
    lockAnchors: false,
    anchors: ['home', 'about', 'service', 'portfolio', 'blog', 'contact'],
    scrollOverflow: true,
    navigation: true,
    verticalCentered: false,
    navigationTooltips: ['Home', 'About', 'Service', 'Portfolio', 'Blog', 'Contact'],
    responsiveWidth: 991,
});

// FullPage Navigation Position
function fpNavPosition(){
    var sideHeaderWidth = $('.side-header').outerWidth();
    var screenSize = windows.width() - sideHeaderWidth;
    var containerSize = $('.container').outerWidth();
    $('#fp-nav.left').css('left', ((screenSize - containerSize)/4));
    $('#fp-nav.right').css('right', ((screenSize - containerSize)/4));
}
// FullPage Navigation On Mobile
function fpNavCloseOnClickMobile(){
    if(windows.width() < 992) {
        $('.fullpage-menu').on('click', 'li a', function(e) {
            $('.side-header-toggle').removeClass('toggle-close');
            $('.side-menu-overlay').removeClass('overlay-show');
            $('.side-header').removeClass('side-menu-open');
        });
    }
}
fpNavPosition();
fpNavCloseOnClickMobile();
windows.resize(function(){
    fpNavPosition();
    fpNavCloseOnClickMobile();
});
    
/*--
    Home Portfolio Slider
----------------------------------------------------------*/
$('.portfolio-slider-5').slick({
    arrows: true,
    autoplay: false,
    autoplaySpeed: 5000,
    dots: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    infinite: true,
    slidesToShow: 5,
    prevArrow: '<button type="button" class="slick-prev">prev</button>',
    nextArrow: '<button type="button" class="slick-next">next</button>',
    appendArrows: '.portfolio-slider-5-nav',
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                autoplay: true,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                autoplay: true,
            }
        },
        {
            breakpoint: 479,
            settings: {
                slidesToShow: 1,
                autoplay: true,
            }
        },
    ]
});


/*--
    Masonry Portfolio
----------------------------------------------------------*/
var masonryGrid = $('.masonry-grid');
masonryGrid.imagesLoaded( function() {
    masonryGrid.masonry({
        // options
        itemSelector: '.masonry-grid [class*="col-"]',
    });
});
 

/*--
    Custom Scroll Bar
----------------------------------------------------------*/
$('.custom-scroll').each(function(){
    var ps = new PerfectScrollbar($(this)[0]);
    if(windows.width <= 991) {
        ps.destroy();
    }
});

    
})(jQuery);	
