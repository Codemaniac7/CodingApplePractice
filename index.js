$('.slide-1').on('click', function() {
    $('.slide-container').css('transform', 'translateX(0vw)');
    지금사진 = 1;
    console.log(지금사진);
  });
  
  $('.slide-2').on('click', function() {
    $('.slide-container').css('transform', 'translateX(-100vw)');
    지금사진 = 2;
    console.log(지금사진);
  });
  
  $('.slide-3').on('click', function() {
    $('.slide-container').css('transform', 'translateX(-200vw)');
    지금사진 = 3;
    console.log(지금사진);
  });