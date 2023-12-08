$('.slider-one').slick({
    infinite: true,
    slidesToScroll: 2,
    slidesToShow: 6,
    // autoplay: true,
    // autoplaySpeed: 5000,
    responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          }
        }
       
      ],
});
$('.slider-two').slick({
  infinite: true,
  slidesToScroll: 2,
  slidesToShow: 3,
  // autoplay: true,
  // autoplaySpeed: 5000,
  responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      }
     
    ],
});
