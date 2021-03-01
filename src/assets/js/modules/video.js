const video = (playerId, triggerSelector) => {
    const btnPlay = document.querySelector(triggerSelector); 
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    let player;
    function onYouTubeIframeAPIReady() {
        player = new YT.Player(playerId, {
            height: '360',
            width: '640',
            videoId: 'B6uQB17FDyU',
            events: {
            'onReady': onPlayerReady
            }
        });
    }
    function onPlayerReady(event) {
        event.target.playVideo();
    }
    
    btnPlay.addEventListener('click', () => {
        onYouTubeIframeAPIReady();
    });
};

export default video;