$(document).ready(function () {

    const envelope = $("#envelope");
    const openBtn = $("#openBtn");
    const returnBtn = $("#returnBtn");
    const audio = $("#sound")[0];

    let currentPage = 1;
    const totalPages = 23;
    let isOpen = false;
    let hasPlayed = false;

    // Init
    $(".lyric-page").removeClass("active");
    $("#page1").addClass("active");
    returnBtn.hide();

    // MỞ THƯ
    openBtn.on("click", function () {
        envelope.removeClass("close").addClass("open");
        isOpen = true;

        openBtn.hide();
        returnBtn.show();

        playAudioOnce(); // 🔊 PHÁT NHẠC
    });

    // CLICK PHONG BÌ → ĐỔI TRANG
    envelope.on("click", function () {
        if (!isOpen) return;

        currentPage = currentPage < totalPages ? currentPage + 1 : 1;
        updatePage();
    });

    // ĐÓNG THƯ
    returnBtn.on("click", function () {
        envelope.removeClass("open").addClass("close");
        isOpen = false;

        setTimeout(() => {
            currentPage = 1;
            updatePage();
            returnBtn.hide();
            openBtn.show();
        }, 600);

        audio.pause();
        audio.currentTime = 0;
        hasPlayed = false;
    });

    function updatePage() {
        $(".lyric-page").removeClass("active");
        $("#page" + currentPage).addClass("active");
    }

    function playAudioOnce() {
        if (hasPlayed) return;

        audio.volume = 0.6;
        audio.currentTime = 0;

        audio.play().then(() => {
            hasPlayed = true;
            console.log("🎵 Nhạc đang phát");
        }).catch(err => {
            console.log("❌ Không phát được nhạc:", err);
        });
    }
});
