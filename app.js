{ /* 슬라이드 쇼 */
  let slideIndex = 0;
  const slides = document.querySelectorAll('.slide');
  const slideWrapper = document.querySelector('.slide-wrapper');
  // const totalSlides = slides.length;
  document.getElementById('next').addEventListener('click', showNextSlide);
  document.getElementById('prev').addEventListener('click', showPrevSlide);
  function showNextSlide() {
    console.log(slideIndex);
    if(slideIndex==0){
      slideWrapper.style.marginLeft="-100%";
      slideIndex++;
    }else if(slideIndex==1){
      slideWrapper.style.marginLeft="-200%";
      slideIndex++;
    }else{
      slideWrapper.style.marginLeft="0px";
      slideIndex = 0;
    }
  }
  function showPrevSlide() {
    console.log(slideIndex);
    if(slideIndex==1){
      slideWrapper.style.marginLeft="0px";
      slideIndex--;
    }else if(slideIndex==2){
      slideWrapper.style.marginLeft="-100%";
      slideIndex--;
    }else{
      slideWrapper.style.marginLeft="-200%";
      slideIndex = 2;
    }
  }
  setInterval(showNextSlide, 10000);
}
{ /* modal */
  const closeBtn = document.querySelectorAll('.close-btn');
  const modalContainer = document.getElementById('modal-container')
  closeBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      modalContainer.classList.remove('show');
    });
  });
}