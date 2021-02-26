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
    
    let offsetPhoto, 
    offsetContent, 
    photoTrackWidth = photoFrameWidth * photoItem.length, 
    contentTrackWidth = contentFrameWidth * contentItem.length,
    slideIndex=1;


    photoTrack.style.width = photoTrackWidth + 'px';
    contentTrack.style.width = contentTrackWidth + 'px';

    (function init ()  {
        offsetPhoto = slideIndex * photoFrameWidth;
        // offsetContent = slideIndex * contentFrameWidth;
        photoTrack.style.transform = `translateX(-${offsetPhoto}px)`;
        // contentTrack.style.transform = `translateX(-${offsetContent}px)`;
    })();

    prev.addEventListener('click', () => {
        console.log('here');
    });

    next.addEventListener('click', () => {
        if(offsetPhoto >= photoTrackWidth) {
            offsetPhoto = 0;
            offsetContent = 0;

        }else {
            offsetPhoto += photoFrameWidth;
            offsetContent += contentFrameWidth;
        }
        photoTrack.style.transform = `translateX(-${offsetPhoto}px)`;
        contentTrack.style.transform = `translateX(-${offsetContent}px)`;
    });

};

export default carouselTeam;