export const carousel = () => {

    const contents = document.querySelector('.carousel-contents');
    const content = document.querySelectorAll('.carousel-content');
  
    const firstClone = content[0].cloneNode(true);
    const lastClone = content[content.length - 1].cloneNode(true);
  
    firstClone.id = 'first-clone';
    lastClone.id = 'last-clone';
  
    contents.appendChild(firstClone);
    contents.insertBefore(lastClone, content[0]);
  
    const realContent = content.length;
  
    let currentIndex = 1;
  
    function updateCarousel() {
      const contentWidth = content[0].getBoundingClientRect().width;
      contents.style.transform = `translateX(-${currentIndex * contentWidth}px)`;
    }
  
    updateCarousel();
  
    let isTransitioning = false;
  
    function moveToCarousel() {
      if (isTransitioning) return;
      isTransitioning = true;
      currentIndex++;
      contents.style.transform = `translateX(-${currentIndex * contentWidth}px)`;
      contents.style.transition = `1.3s`;
    }
  
    function prevCarousel() {
      if (isTransitioning) return;
      isTransitioning = true;
      currentIndex--;
      contents.style.transform = `translateX(-${currentIndex * contentWidth}px)`;
      contents.style.transition = `1.3s`;
    }
  
    contents.addEventListener('transitionend', () => {
      isTransitioning = false;
  
      if (contents.children[currentIndex].id === 'last-clone') {
        currentIndex = realContent;
        contents.style.transition = `none`;
        contents.style.transform = `translateX(-${currentIndex * contentWidth}px)`;
      } else if (contents.children[currentIndex].id === 'first-clone') {
        currentIndex = 1;
        contents.style.transition = `none`;
        contents.style.transform = `translateX(-${currentIndex * contentWidth}px)`;
      }
    }
    );
  
    setInterval(moveToCarousel, 5000);
  
    const leftButton = document.querySelector('.left-button');
    const rightButton = document.querySelector('.right-button');
  
    leftButton.addEventListener('click', prevCarousel);
    rightButton.addEventListener('click', moveToCarousel);
    window.addEventListener('resize',updateCarousel);
  };