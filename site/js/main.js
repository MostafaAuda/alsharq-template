$(document).ready(function() {

  $("#lightgallery").lightGallery(); 

  $('.nav-link').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });

  $('.menu').on('click', function () {
    $(this).toggleClass('opened');
  });

  /*--------------------------------------------------------------------------------------------------------------------*/
  /*owlCarousel*/
  
  $('#projects__carousel').owlCarousel({
    dots: true,
    margin:15,
    nav:false,
    items:1,
    smartSpeed:1000
  })

  $('#header__carousel').owlCarousel({
    dots: true,
    margin:0,
    nav:false,
    items:1,
    smartSpeed:1000,
    autoHeight:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    animateOut: 'fadeOut',
    loop:true,
  })

  /*--------------------------------------------------------------------------------------------------------------------*/
  /*Change Navbar style on scroll*/

  $(window).scroll(function() {
    if ($(window).scrollTop() > 700) {
      $('#back2Top').slideDown();
    } else if ($(window).scrollTop() > 50) {
      $('nav').addClass('scrolled_nav');
    } else {
      $('#back2Top').slideUp();
      $('nav').removeClass('scrolled_nav');
    }
  });

  $("#back2Top").click(function(event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
  });
  
  /*--------------------------------------------------------------------------------------------------------------------*/
  //Scroll to position animation

  $(function() {
    $("a[href*='#']:not([href='#'])").click(function() {

      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

        var target = $(this.hash);

        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

        if (target.length) {

          $('html,body').animate({

            scrollTop: target.offset().top - 60
          }, 1000);

          return false;
        }
      }
    });
  });

  /*--------------------------------------------------------------------------------------------------------------------*/
  //Current Year
  
  let date =  new Date().getFullYear();
  $('.current_year').text(date);

});
