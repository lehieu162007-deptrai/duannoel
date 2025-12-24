$(document).ready(function () {

    const envelope = $("#envelope");
    const openBtn = $("#openBtn");
    const resetBtn = $("#resetBtn");
    const audio = $("#sound")[0];

    let currentPage = 1;
    const totalPages = 23;
    let isOpen = false;
    let hasPlayed = false;

    // ====== KHỞI TẠO ======
    $(".lyric-page").removeClass("active");
    $("#page1").addClass("active");
    resetBtn.hide();

    // ====== MỞ THƯ ======
    openBtn.on("click", function () {
        envelope.removeClass("close").addClass("open");
        isOpen = true;

        openBtn.hide();
        resetBtn.show();

        playAudioOnce();
    });

    // ====== CLICK PHONG BÌ → ĐỔI TRANG ======
    envelope.on("click", function () {
        if (!isOpen) return;

        currentPage = currentPage < totalPages ? currentPage + 1 : 1;
        updatePage();
    });

    // ====== RESET ======
    resetBtn.on("click", function () {
        envelope.removeClass("open").addClass("close");
        isOpen = false;

        setTimeout(() => {
            currentPage = 1;
            updatePage();
            resetBtn.hide();
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

        audio.currentTime = 21;
        audio.volume = 0.6;

        audio.play().then(() => {
            hasPlayed = true;
        }).catch(err => {
            console.log("Không thể phát nhạc:", err);
        });
    }

    // ====== SAO LẤP LÁNH ======
    const starField = document.querySelector('.star-field');

    for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.animationDelay = Math.random() * 5 + 's';
        star.style.animationDuration = (2 + Math.random() * 3) + 's';

        starField.appendChild(star);
    }

    // ====== TUYẾT RƠI ======
    function createSnowflake() {
        const snow = document.createElement("div");
        snow.classList.add("snowflake");
        snow.textContent = "❄";

        snow.style.left = Math.random() * 100 + "vw";
        snow.style.animationDuration = (5 + Math.random() * 5) + "s";
        snow.style.fontSize = (10 + Math.random() * 15) + "px";

        document.body.appendChild(snow);

        setTimeout(() => snow.remove(), 10000);
    }

    setInterval(createSnowflake, 150);
});
