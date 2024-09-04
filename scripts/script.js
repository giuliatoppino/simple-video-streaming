document.addEventListener("DOMContentLoaded", function () {
    const videoPlayer = document.getElementById("videoPlayer");
    const videoSources = [
        "assets/videos/sample.mp4",
        "assets/videos/danca.mp4"
    ];
    let currentVideoIndex = 0;

    videoPlayer.addEventListener("ended", function () {
        currentVideoIndex++;
        if (currentVideoIndex < videoSources.length) {
            videoPlayer.src = videoSources[currentVideoIndex];
            videoPlayer.play();
        } else {
            currentVideoIndex = 0; // Reinicia a lista de vídeos
            videoPlayer.src = videoSources[currentVideoIndex];
            videoPlayer.play();
        }
    });
});