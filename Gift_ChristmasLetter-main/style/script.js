$(document).ready(function () {
  const envelope = $('#envelope');
  const openBtn = $("#openBtn");
  const resetBtn = $("#resetBtn");

  let currentPage = 1;
  const totalPages = 23;
  let isOpen = false;

  envelope.on('click', function () {
      if (isOpen) nextLyric();
  });

  openBtn.on('click', function () {
      envelope.removeClass("close").addClass("open");
      isOpen = true;
      openBtn.hide();
      resetBtn.show();
  });

  resetBtn.on('click', function () {
      envelope.removeClass("open").addClass("close");
      isOpen = false;
      setTimeout(function () {
          currentPage = 1;
          updateActivePage();
          resetBtn.hide();
          openBtn.show();
      }, 600);
  });

  function nextLyric() {
      currentPage = currentPage < totalPages ? currentPage + 1 : 1;
      updateActivePage();
  }

  function updateActivePage() {
      $(".lyric-page").removeClass("active");
      $("#page" + currentPage).addClass("active");
  }
});

const openBtn = document.getElementById("openBtn");
const resetBtn = document.getElementById("resetBtn");
const envelope = document.getElementById("envelope");
const audio = document.getElementById("sound");

let hasPlayed = false;

function playAudioOnce() {
    audio.currentTime = 21;
    if (!hasPlayed) {
        audio.play().then(() => {
            hasPlayed = true;
        }).catch((e) => {
            console.log("Không thể phát nhạc:", e);
        });
    }
}

openBtn.addEventListener("click", function () {
    envelope.classList.remove("close");
    envelope.classList.add("open");
    openBtn.style.display = "none";
    resetBtn.style.display = "inline-block";
    playAudioOnce();
});

resetBtn.addEventListener("click", function () {
    envelope.classList.remove("open");
    envelope.classList.add("close");
    openBtn.style.display = "inline-block";
    resetBtn.style.display = "none";
    playAudioOnce();
});
// ====== TẠO SAO NGẪU NHIÊN ======
const starField = document.querySelector('.star-field');

for (let i = 0; i < 200; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = 2 + Math.random() * 3;

    star.style.left = x + 'vw';
    star.style.top = y + 'vh';
    star.style.animationDelay = delay + 's';
    star.style.animationDuration = duration + 's';

    starField.appendChild(star);
}
// ====== HIỆU ỨNG BÔNG TUYẾT RƠI ======
function createSnowflake() {
    const snow = document.createElement("div");
    snow.classList.add("snowflake");
    snow.textContent = "❄";

    // Vị trí và tốc độ rơi ngẫu nhiên
    snow.style.left = Math.random() * 100 + "vw";
    snow.style.animationDuration = 5 + Math.random() * 5 + "s"; 
    snow.style.fontSize = (10 + Math.random() * 15) + "px"; 

    document.body.appendChild(snow);

    // Xóa sau khi rơi xong
    setTimeout(() => {
        snow.remove();
    }, 10000);
}

// Tạo bông tuyết liên tục
setInterval(createSnowflake, 150);