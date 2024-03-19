$('.nav').slicknav({
    prependTo:'.mobilemenu'
});
// For colorbox 
$(document).ready(function(){
  $(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});
  $('.container .medium-card').matchHeight();
});

$('.icon-car').owlCarousel({
    loop:true,
    margin:1,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        600:{
            items:2
        },
        700:{
            items:3
        },
        900:{
            items:6
        },
        1000:{
            items:6
        }
    }
  })

$('#gallary-car').owlCarousel({
  loop:true,
  margin:1,
  nav:true,
//   autoWidth:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:4
      }
  }
})







