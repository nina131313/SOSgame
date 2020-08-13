$(function() {
  $('.header__dropdown').on('click', function() {
    $('.header__box-list').toggleClass('active');
  });

  $('.about__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: false,
    infinite: false,
    nextArrow: '<button class="slick__arrow slick__arrow-next"><svg width="18" height="38" viewBox="0 0 18 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.82153 1.95628L1.82153 36.0297L15.5642 19.1837L1.82153 1.95628Z" stroke="white" stroke-width="3.36454" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    dots: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          autoplay: true,
        }
      },
    ]
  });

  $('.features__box').on('click', function() {
    $(this).children('.features__text').addClass('active');
    $(this).children('.features__name').addClass('active');
  });

  $(".header__scroll").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

  $('.header__button').on('click', function() {
    $(this).toggleClass('active');
    $('.header__list').toggleClass('active');
  });
  
  new WOW().init();
});