var burger       = $('body').find('.burger')[0],
      nav          = $('body').find('nav'),
      slidePrev    = $('body').find('.prev')[0],
      slideNext    = $('body').find('.next')[0],
      slider       = $('body').find('.slider')[0],
      slide        = $(slider).find('.item'),
      slideOffset  = $(slider).offset().left,
      offsetSlider = 0,
      currTrans    = $(slider).css('transform').split(/[()]/)[1],
      posx         = currTrans.split(',')[4];;

$(function() {
  sliderInit();
});

$(burger).on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('change');
  $(nav).toggleClass('change');
  $('body').toggleClass('change');
});


$(slidePrev).on('click', function (e) {
  e.preventDefault();
  offsetSlider += $(slide).outerWidth(true);
  if (posx < 0) {
    $(slider).css({'transform': 'translateX(' + (offsetSlider) + 'px)'});
  } else {
    $(slider).css({'transform': 'translateX(' + '0px)'});
  }
});

$(slideNext).on('click', function (e) {
  e.preventDefault();
  offsetSlider -= $(slide).outerWidth(true);
  var limit = (sliderInit() * -1);

  console.log("PosX: " + posx + "    limit: " + limit);
  if (posx < limit) {
    $(slider).css({'transform': 'translateX(' + (offsetSlider) + 'px)'});
  }
});

var timer;
$(window).on('resize', function () {
  clearTimeout(timer);

  timer = setTimeout(function () {
    isMobile();
  }, 250);
});

function sliderInit () {
  var minWidth = 0;
  $(slide).each(function () {
    minWidth += $(this).outerWidth(true);
  });

  $(slider).css({'min-width' : (minWidth + 24) + 'px'});
  $(slider).css({'transform': 'translateX(' + (offsetSlider) + 'px)'});

  return minWidth;
}

function isMobile () {
  var wWidth = $('body').width();
  if (wWidth < 768) {

  } else {
    $(burger).removeClass('change');
    $(nav).removeClass('change');
    $('body').removeClass('change');
  }
}