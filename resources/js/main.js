$(document).ready(function () {
  $('.carousel').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToScroll: 1,
    pauseOnFocus: false,
    pauseOnHover: false,
    draggable: false
  });


  //function to make the header (navigation) disappear when scrolling down
  //and reappear when scrolling up again

  // variable to store how far the user has scrolled since the header (dis)appeared, initially 0
  var scrolledDistanz = 0;
  // variable that gives the scrolled position of the top, initially 0
  var positionScrolledTop = 0;
  //fixed variables
  var $navbar = $('.navbar');
  var navHeight = $navbar.css('height');
  var animationTime = 150;
  $(window).scroll(function(){
    positionScrolledTop = $(this).scrollTop();
    console.log("positionScrolledTop" + positionScrolledTop);
    //make header disappear when more than 50px scrolled down
    if (positionScrolledTop - scrolledDistanz > 50){
      $navbar.animate({top: '-' + navHeight},animationTime);
      //scrolledDistanz has to be set to current position, to make it possible for header to reappear
      scrolledDistanz = positionScrolledTop;
      console.log("scrolled distanz: "+scrolledDistanz);
    }
    //if user scrolls up, we want the header to reappear
    else if (scrolledDistanz - positionScrolledTop > 50){
        $('.navbar').animate({top: '0px'}, animationTime);
        //and also here we have to set this to the current position to make it possible for the header disappear again
        scrolledDistanz = positionScrolledTop;
    }
  });

});
