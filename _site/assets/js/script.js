document.addEventListener("DOMContentLoaded", function () {
  const open = document.getElementById("menu-open-btn");
  const close = document.getElementById("menu-close-btn");
  const nav = document.getElementById("nav-container");

  open.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
  close.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  /* SOUND PAGE AUDIOS */
  document.querySelectorAll(".player").forEach((player) => {
    const audio = player.querySelector("audio");
    const playButton = player.querySelector(".play-btn");
    const pauseButton = player.querySelector(".pause-btn");
    const durationDisplay = player.querySelector(".duration");

    function formatDuration(value) {
      const minute = Math.floor(value / 60);
      const second = Math.floor(value % 60);
      return minute + ":" + (second < 10 ? "0" + second : second);
    }
    console.log({ audio, player });
    audio.addEventListener("loadedmetadata", function () {
      durationDisplay.textContent = formatDuration(audio.duration);
    });

    player.addEventListener("click", function (e) {
      e.stopPropagation();
      document.querySelectorAll("audio").forEach((el) => {
        if (el !== audio) {
          el.pause();
          el.parentElement.querySelector(".pause-btn").classList.add("hide");
          el.parentElement.querySelector(".play-btn").classList.remove("hide");
        }
      });
      audio.play();
      pauseButton.classList.remove("hide");
      playButton.classList.add("hide");
    });

    pauseButton.addEventListener("click", function (e) {
      e.stopPropagation();
      audio.pause();
      pauseButton.classList.add("hide");
      playButton.classList.remove("hide");
    });
  });

  /* SCROLL TO TOP */
  const scrollTopBtn = document.getElementById("scroll-top");
  if(scrollTopBtn){
    scrollTopBtn.addEventListener("click", scrollTop);
    function scrollTop() {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  }


  // 
});
