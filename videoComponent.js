let idleTimer;
const idleVideoContainer = document.getElementById("idleVideoContainer");

function resetIdleTimer() {
    clearTimeout(idleTimer);
    idleVideoContainer.innerHTML = ""; // 確保完全移除影片
    idleVideoContainer.style.display = "none"; // 隱藏影片

    idleTimer = setTimeout(() => {
        idleVideoContainer.style.display = "flex";
        idleVideoContainer.innerHTML = `
            <video id="introVideo" autoplay loop>
                <source src="./video/0116富山大補帖.mp4" type="video/mp4">
            </video>`;
        let introVideo = document.getElementById("introVideo");
        
        // **手動取消靜音，確保聲音播放**
        introVideo.muted = false;
        introVideo.volume = 1; // 設定最大音量
        introVideo.play();
    }, 30000); // 設定閒置時間（30秒）
}

// **確保影片載入後可以播放**
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        let introVideo = document.getElementById("introVideo");
        if (introVideo) {
            introVideo.muted = false;
            introVideo.volume = 1;
            introVideo.play();
        }
    }, 500);
});

// **監聽使用者事件**
document.addEventListener("mousemove", resetIdleTimer);
document.addEventListener("keydown", resetIdleTimer);
document.addEventListener("click", resetIdleTimer);
document.addEventListener("scroll", resetIdleTimer);

// **啟動計時器**
resetIdleTimer();
