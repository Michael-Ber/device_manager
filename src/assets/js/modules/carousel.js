const carousel = (parentSelector, trackSelector, itemSelector, prevSelector, nextSelector, itemInFrame=2, vertical=true) => {

    const parent = document.querySelector(parentSelector),
          track = parent.querySelector(trackSelector),
          items = parent.querySelectorAll(itemSelector),
          prev = parent.querySelector(prevSelector),
          next = parent.querySelector(nextSelector),
          frameHeight = +window.getComputedStyle(parent).height.slice(0, -2) + 70;

    let offset = 0,
        trackHeight;
        
    if(itemInFrame > 1) {
        trackHeight = frameHeight * items.length / itemInFrame;
    }else {
        trackHeight = frameHeight * items.length;
    }
    
    track.style.height = trackHeight + 'px';
    
    prev.addEventListener('click', () => {
        if(offset <= 0) {
            offset = trackHeight - frameHeight;
        }else {
            offset -= frameHeight;
        }
        if(vertical) {
            track.style.transform = `translateY(-${offset}px)`;
        }else {
            track.style.transform = `translateX(-${offset}px)`;
        }
        
    });

    next.addEventListener('click', () => {
        if(offset >= trackHeight - frameHeight) {
            offset = 0;
        }else {
            offset += frameHeight;
        }
        if(vertical) {
            track.style.transform = `translateY(-${offset}px)`;
        }else {
            track.style.transform = `translateX(-${offset}px)`;
        }
        
    });
};
export default carousel;