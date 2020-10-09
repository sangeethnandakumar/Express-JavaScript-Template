var systemBaseModule = (function () {

    //APIs exposed
    return {
        playMusic: play,
        pauseMusic: pause,
        showUpNext: showNextTrack,
        addTrack: addTrackToMusicQueue
    }

    //Public functions


    //Private functions
    function play() {
        console.log('Im playing the next song!');
    }
   
})();
