
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

$('.aos-init').removeClass('aos-animate'); // remove ALL classes which triggers animation in document

new fullpage('#fullpage', {   // standard fullpage usage
  responsive: true,
  scrollingSpeed: 600,
  navigation: true,
  scrollOverflow: true,
  anchors: ['first', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],

  onLeave: function(origin, destination, direction){
    jQuery('.section [data-aos]').removeClass("aos-animate");
    if (origin.anchor == 'two' && direction == 'down') {
      setTimeout(() => {
      $('.1').css('opacity', '1');
      $('.1').spincrement({
          thousandSeparator: "",
          duration: 1200
      })}, 1600)
      setTimeout(() => {
        $('.2').css('opacity', '1');
        $('.2').spincrement({
            thousandSeparator: "",
            duration: 1200
        })}, 2200)
      setTimeout(() => {
        $('.3').css('opacity', '1');
        $('.3').spincrement({
            thousandSeparator: "",
            duration: 1200
        })}, 3000)
      setTimeout(() => {
        $('.4').css('opacity', '1');
        $('.4').spincrement({
            thousandSeparator: "",
            duration: 1200
        })}, 3600)
      setTimeout(() => {
        $('.5').css('opacity', '1');
        $('.5').spincrement({
            thousandSeparator: "",
            duration: 1200
        })}, 4600)
      setTimeout(() => {
        $('.6').css('opacity', '1');
        $('.6').spincrement({
            thousandSeparator: "",
            duration: 1200
        })}, 5500) 
    }

    if (origin.anchor == 'four' && direction == 'up') {
      setTimeout(() => {
        $('.1').css('opacity', '1');
        $('.1').spincrement({
            thousandSeparator: "",
            duration: 1200
        })}, 1600)
        setTimeout(() => {
          $('.2').css('opacity', '1');
          $('.2').spincrement({
              thousandSeparator: "",
              duration: 1200
          })}, 2200)
        setTimeout(() => {
          $('.3').css('opacity', '1');
          $('.3').spincrement({
              thousandSeparator: "",
              duration: 1200
          })}, 3000)
        setTimeout(() => {
          $('.4').css('opacity', '1');
          $('.4').spincrement({
              thousandSeparator: "",
              duration: 1200
          })}, 3600)
        setTimeout(() => {
          $('.5').css('opacity', '1');
          $('.5').spincrement({
              thousandSeparator: "",
              duration: 1200
          })}, 4600)
        setTimeout(() => {
          $('.6').css('opacity', '1');
          $('.6').spincrement({
              thousandSeparator: "",
              duration: 1200
          })}, 5500)
    }
  },
  afterLoad: function(origin){
    jQuery('.section.active [data-aos]').addClass("aos-animate");
    
  }
});

//methods

fullpage_api.setMouseWheelScrolling(true);
fullpage_api.setAllowScrolling(true);

// slider

let slideIndex = 1;
showSlides(slideIndex);

function nextSlide(n) {
  showSlides(slideIndex += n);
}

function prevSlide(n) {
  showSlides(slideIndex -= 1);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slider__item");
  let avatar = document.getElementsByClassName("feedback__avatar1");
  let avatar2 = document.getElementsByClassName("feedback__avatar2");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n <= 0) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    avatar[i].classList.remove('feedback__avatar1_active')
    avatar2[i].classList.remove('feedback__avatar1_active')
  }

  slides[slideIndex - 1].style.display = 'flex';
  avatar[slideIndex - 1].classList.add('feedback__avatar1_active')
  avatar2[slideIndex - 1].classList.add('feedback__avatar1_active')
  
}

  // Якорь 

  function anchorForForm() {
    fullpage_api.moveTo(9);
  }

  // Owl Carousel

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 4,
    dots: true,
    responsive : {
      0 : {
        items: 1
      },

      514: {
        items: 2
      },
      
      700 : {
        items: 3
      },

      942 : {
        items: 4,
        dots: true,

      }
  }

  });
});
