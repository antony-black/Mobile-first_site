$(function(){

  // Slider-head

  $('.slider-head').slick({
    prevArrow:'<button class="arrow arrow-prev"><img src="img/head/arrow-left.svg" alt="Prev"></button>',
    nextArrow:'<button class="arrow arrow-next"><img src="img/head/arrow-right.svg" alt="Next"></button>',
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {

        }
      },
      
      {
        breakpoint: 640,
        settings: {
          arrows:false,
        }
      }
    
    ]
  });

  $('.slider-quote').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {

        }
      },
      
      {
        breakpoint: 640,
        settings: {
          arrows:false,
        }
      }
    
    ]
  });
          
  // Video-team
  
  const videoBtn = document.querySelector('#video-btn');
  const videoFile = document.querySelector('#video-content');
  const videoOverlay = document.querySelector('#video-overlay');
  const  videoBtnIcon = document.querySelector('#video-btn-icon');
  const  videoBtnBig = document.querySelector('#video-btn--big');


  videoBtn.addEventListener('click', function () {
    
    function toggleOverlay(event){
      if (event.type === 'mouseleave') {
        videoOverlay.classList.add('hidden');
      } else {
        videoOverlay.classList.remove('hidden');
      }
    }
    
    if (videoFile.paused) {
      videoFile.play();
      videoBtnIcon.src="img/team/pause.svg"

      videoOverlay.onmouseleave = toggleOverlay;
      videoOverlay.onmouseenter = toggleOverlay;



    } else {
      videoFile.pause();
      videoBtnIcon.src="img/team/play-button.svg"

      videoOverlay.onmouseleave = null;
      videoOverlay.onmouseenter = null;
    }
  
  })

  //  Why don't work properly? Overlay&BtnIcon don't vanish
  videoBtnBig.addEventListener('click', function () {
    
    function toggleOverlay(event){
      if (event.type === 'mouseleave') {
        videoOverlay.classList.add('hidden');
      } else {
        videoOverlay.classList.remove('hidden');
      }
    }
    
    if (videoFile.paused) {
      videoFile.play();
      videoBtnIcon.src="img/team/pause.svg"

      videoOverlay.onmouseleave = toggleOverlay;
      videoOverlay.onmouseenter = toggleOverlay;



    } else {
      videoFile.pause();
      videoBtnIcon.src="img/team/play-button.svg"

      videoOverlay.onmouseleave = null;
      videoOverlay.onmouseenter = null;
    }
  
  })


});