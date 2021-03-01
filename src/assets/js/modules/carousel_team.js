const carouselTeam = (parentSelector, photoTrackSelector, contentTrackSelector, photoFrameSelector, contentFrameSelector, photoItemSelector, contentItemSelector, prevSelector, nextSelector, photoActiveClass, contentActiveClass) => {
    const parent = document.querySelector(parentSelector),
          photoTrack = parent.querySelector(photoTrackSelector),
          contentTrack = parent.querySelector(contentTrackSelector),
          photoFrame = parent.querySelector(photoFrameSelector),
          contentFrame = parent.querySelector(contentFrameSelector),
          photoItem = parent.querySelectorAll(photoItemSelector),
          contentItem = parent.querySelectorAll(contentItemSelector),
          prev = parent.querySelector(prevSelector),
          next = parent.querySelector(nextSelector),
          photoFrameWidth = +window.getComputedStyle(photoFrame).width.slice(0, -2),
          contentFrameWidth = +window.getComputedStyle(contentFrame).width.slice(0, -2);
    
    let offsetPhoto = 0, 
    offsetContent = 0, 
    photoTrackWidth = photoFrameWidth * photoItem.length, 
    contentTrackWidth = contentFrameWidth * contentItem.length,
    slideIndex = 1;

    photoTrack.style.width = photoTrackWidth + 'px';
    contentTrack.style.width = contentTrackWidth + 'px';

    (function init ()  {

        offsetPhoto = slideIndex * photoFrameWidth;
        offsetContent = slideIndex * contentFrameWidth;
        photoTrack.style.transform = `translateX(-${offsetPhoto}px)`;
        contentTrack.style.transform = `translateX(-${offsetContent}px)`;
    })();

    prev.addEventListener('click', () => {
        if(offsetPhoto <= 0) {
            offsetPhoto = photoTrackWidth - photoFrameWidth;
            offsetContent = contentFrameWidth * (contentItem.length - 1);
            slideIndex = photoItem.length - 1;
        }else {
            offsetPhoto -= photoFrameWidth;
            offsetContent -= contentFrameWidth;
            slideIndex -= 1;
        }
        removeActive();
        photoTrack.style.transform = `translateX(-${offsetPhoto}px)`;
        photoItem[slideIndex].classList.add(photoActiveClass);
        contentTrack.style.transform = `translateX(-${offsetContent}px)`;
        contentItem[slideIndex].classList.add(contentActiveClass);
    });

    next.addEventListener('click', () => {
        if(offsetPhoto >= photoTrackWidth - photoFrameWidth) {
            offsetPhoto = 0;
            offsetContent = 0;
            slideIndex = 0;
        }else {
            offsetPhoto += photoFrameWidth;
            offsetContent += contentFrameWidth;
            slideIndex += 1;
        }
        removeActive();
        photoTrack.style.transform = `translateX(-${offsetPhoto}px)`;
        photoItem[slideIndex].classList.add(photoActiveClass);
        contentTrack.style.transform = `translateX(-${offsetContent}px)`;
        contentItem[slideIndex].classList.add(contentActiveClass);
    });

    function removeActive () {
        photoItem.forEach(item => {
            item.classList.remove(photoActiveClass);
        });
        contentItem.forEach(item => {
            item.classList.remove(contentActiveClass);
        });
    }

};

export default carouselTeam;