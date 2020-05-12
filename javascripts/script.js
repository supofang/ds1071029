$(document).ready(function () {
  $('.js-fancybox').fancybox({
    maxWidth: 1024,
    maxHeight: 728,
    padding: 0,
    margin: 0,
    fitToView: false,
    width: '75%',
    height: '60%',
    autoSize: false,
    closeClick: false,
    openEffect: 'none',
    closeEffect: 'none',
  });

  var num = $('.num span').text();
  var w = num / 500;
  $(window).scroll(function () {
    if ($(window).scrollTop() >= $('.js-line').offset().top) {
      $('.outLine-on ').css('bottom', 100-w + '%');

      if (w>=20) {
        $('.outLine-point:eq(0),.text:eq(0)').addClass('on');
      } 
      if (w>=40) {
        $('.outLine-point:eq(0),.text:eq(0)').addClass('on');
        $('.outLine-point:eq(1),.text:eq(1)').addClass('on');       
      } 
      if (w>=60){
        $('.outLine-point:eq(0),.text:eq(0)').addClass('on');
        $('.outLine-point:eq(1),.text:eq(1)').addClass('on');   
        $('.outLine-point:eq(2),.text:eq(2)').addClass('on');       
      } 
      if (w>=80){
        $('.outLine-point:eq(0),.text:eq(0)').addClass('on');
        $('.outLine-point:eq(1),.text:eq(1)').addClass('on');   
        $('.outLine-point:eq(2),.text:eq(2)').addClass('on'); 
        $('.outLine-point:eq(3),.text:eq(3)').addClass('on');   
      } 
      if (w>=100){
        $('.outLine-point,.text').addClass('on');   
      }
    }
    
  });

  
  /*SROLL*/
  $('.arrow').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
      "scrollTop": $(".step").offset().top
    })
  });

  /*TAB*/
  $('.js-tab').find('.js-tabs li:eq(0)').addClass('current');
  $('.js-tabs li').on('click', function (g) {
    var tab = $(this).closest('.js-tab')
      , index = $(this).closest('li').index();

    tab.find('.js-tabs > li').removeClass('current');
    $(this).closest('li').addClass('current');

    tab.find('.js-tab-content,.js-tab-content2').find('.js-tabs-item').not('.js-tabs-item:eq(' + index + ')').hide().fadeOut();
    tab.find('.js-tab-content,.js-tab-content2').find('.js-tabs-item:eq(' + index + ')').fadeIn();

    g.preventDefault();
  });

  /*AUDIOS*/
  $('.btn-audio').on('click', function (e) {
    e.preventDefault();
    var myAudio = $(this).next();
    myAudio[0].play();
  })
  
  var audios = $('.audios').find('audio');
  // 暂停函数
  function pauseAll() {
    var self = this;
    [].forEach.call(audios, function (i) {
      // 将audios中其他的audio全部暂停
      i !== self && i.pause();
      i.currentTime = 0;
    })
  }
  // 给play事件绑定暂停函数
  [].forEach.call(audios, function (i) {
    i.addEventListener("play", pauseAll.bind(i));
  })
})