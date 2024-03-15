const music = new Audio("assets/music/1.mp3");
// music.play();

const songs = [
  {
    id: "1",
    songName: ` Hãy Trao Cho Anh <br />
    <div class="subtitle">Sơn Tùng MTP</div>`,
    poster: "assets/img/1.jpg",
  },
  {
    id: "2",
    songName: ` Đừng Về Trễ <br />
    <div class="subtitle">Sơn Tùng</div>`,
    poster: "assets/img/2.jpg",
  },
  {
    id: "3",
    songName: ` Ngủ Một Mình <br />
    <div class="subtitle">Hieuthuhai</div>`,
    poster: "assets/img/3.jpg",
  },
  {
    id: "4",
    songName: ` Ánh Nắng Của Anh <br />
    <div class="subtitle">Đức Phúc</div>`,
    poster: "assets/img/4.jpg",
  },
  {
    id: "5",
    songName: ` Buồn Hay Vui <br />
    <div class="subtitle">MCK</div>`,
    poster: "assets/img/5.jpg",
  },
  {
    id: "6",
    songName: ` Nếu Lúc Đó <br />
    <div class="subtitle">TLinh</div>`,
    poster: "assets/img/6.jpg",
  },
  {
    id: "7",
    songName: ` Chỉ Một Đêm Nữa Thôi <br />
    <div class="subtitle">MCK</div>`,
    poster: "assets/img/7.jpg",
  },
  {
    id: "8",
    songName: `Bông Hoa Đẹp Nhất <br />
    <div class="subtitle">Quân AP</div>`,
    poster: "assets/img/8.jpg",
  },
  {
    id: "9",
    songName: ` Chúng ta của tương lai <br />
    <div class="subtitle">Sơn Tùng</div>`,
    poster: "assets/img/9.jpg",
  },
  {
    id: "10",
    songName: ` Pho Real <br />
    <div class="subtitle">bbno$, LowG, AnhPhan</div>`,
    poster: "assets/img/10.jpg",
  },
  {
    id: "11",
    songName: `Nâng Chén Tiêu Sầu <br />
    <div class="subtitle">Bích Phương</div>`,
    poster: "assets/img/11.jpg",
  },
  {
    id: "12",
    songName: ` Tháng Tư Là Lời Nói Dối Của Em <br />
    <div class="subtitle">Hà Anh Tuấn</div>`,
    poster: "assets/img/12.jpg",
  },
  {
    id: "13",
    songName: ` Ngày Đầu Tiên <br />
    <div class="subtitle">Đức Phúc</div>`,
    poster: "assets/img/13.jpg",
  },
  {
    id: "14",
    songName: ` Nấu Ăn Cho Em <br />
    <div class="subtitle">Đen Vâu</div>`,
    poster: "assets/img/14.jpg",
  },
  {
    id: "15",
    songName: ` Nhạc Của Rừng <br />
    <div class="subtitle">Đen Vâu</div>`,
    poster: "assets/img/15.jpg",
  },
  {
    id: "16",
    songName: ` Sau Lời Từ Khước <br />
    <div class="subtitle">Phan Mạnh Quỳnh</div>`,
    poster: "assets/img/16.jpg",
  },
];

Array.from(document.getElementsByClassName("songItem")).forEach(
  (element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].poster;
    element.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
  }
);

let masterPlay = document.getElementById("masterPlay");
let wave = document.getElementsByClassName("wave")[0];

masterPlay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    masterPlay.classList.remove("bx-play");
    masterPlay.classList.add("bx-pause");
    wave.classList.add("active2");
  } else {
    music.pause();
    masterPlay.classList.add("bx-play");
    masterPlay.classList.remove("bx-pause");
    wave.classList.remove("active2");
  }
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("playListPlay")).forEach(
    (element) => {
      element.classList.add("bx-play-circle");
      element.classList.remove("bx-pause-circle");
    }
  );
};
const makeAllBackgrounds = () => {
  Array.from(document.getElementsByClassName("songItem")).forEach((element) => {
    element.computedStyleMap.background = "rgb(105,105,170,0)";
  });
};

let index = 0;
let poster_master_play = document.getElementById("poster_master_play");
let title = document.getElementById("title");
Array.from(document.getElementsByClassName("playListPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      index = e.target.id;
      makeAllPlays();
      e.target.classList.remove("bx-play-circle");
      e.target.classList.add("bx-pause-circle");
      music.src = `assets/music/${index}.mp3`;
      poster_master_play.src = `assets/img/${index}.jpg`;
      music.play();
      let song_title = songs.filter((ele) => {
        return ele.id == index;
      });
      song_title.forEach((ele) => {
        let { songName } = ele;
        title.innerHTML = songName;
      });
      masterPlay.classList.remove("bx-play");
      masterPlay.classList.add("bx-pause");
      wave.classList.add("active2");
      music.addEventListener("ended", () => {
        masterPlay.classList.add("bx-play");
        masterPlay.classList.remove("bx-pause");
        wave.classList.remove("active2");
      });
      makeAllBackgrounds();
      Array.from(document.getElementsByClassName("songItem"))[
        `${index - 1}`
      ].style.background = "rgb(105,105,170,0.1)";
    });
  }
);

let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];

music.addEventListener("timeupdate", () => {
  let music_curr = music.currentTime;
  let music_dur = music.duration;

  let min = Math.floor(music_dur / 60);
  let sec = Math.floor(music_dur % 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }
  currentEnd.innerText = `${min}:${sec}`;

  let min1 = Math.floor(music_curr / 60);
  let sec1 = Math.floor(music_curr % 60);
  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }
  currentStart.innerText = `${min1}:${sec1}`;

  let progressbar = parseInt((music.currentTime / music.duration) * 100);
  seek.value = progressbar;
  let seekbar = seek.value;
  bar2.style.width = `${seekbar}%`;
  dot.style.left = `${seekbar}%`;
});

seek.addEventListener("change", () => {
  music.currentTime = (seek.value * music.duration) / 100;
});

music.addEventListener("ended", () => {
  masterPlay.classList.add("bx-play");
  masterPlay.classList.remove("bx-pause");
  wave.classList.remove("active2");
});

let vol_icon = document.getElementById("vol_icon");
let vol = document.getElementById("vol");
let vol_dot = document.getElementById("vol_dot");
let vol_bar = document.getElementsByClassName("vol_bar")[0];

vol.addEventListener("change", () => {
  if (vol.value == 0) {
    vol_icon.classList.add("bx-volume-mute");
    vol_icon.classList.remove("bx-volume-low");
    vol_icon.classList.remove("bx-volume-full");
  } else if (vol.value > 0 && vol.value < 50) {
    vol_icon.classList.remove("bx-volume-mute");
    vol_icon.classList.add("bx-volume-low");
    vol_icon.classList.remove("bx-volume-full");
  } else {
    vol_icon.classList.remove("bx-volume-mute");
    vol_icon.classList.remove("bx-volume-low");
    vol_icon.classList.add("bx-volume-full");
  }

  let vol_a = vol.value;
  vol_bar.style.width = `${vol_a}%`;
  vol_dot.style.left = `${vol_a}%`;
  music.volume = vol_a / 100;
});

let back = document.getElementById("back");
let next = document.getElementById("next");

back.addEventListener("click", () => {
  index = -1;
  if (index < 1) {
    index = Array.from(document.getElementsByClassName("songItem")).length;
  }
  music.src = `assets/music/${index}.mp3`;
  poster_master_play.src = `assets/img/${index}.jpg`;
  music.play();
  let song_title = songs.filter((ele) => {
    return ele.id == index;
  });
  song_title.forEach((ele) => {
    let { songName } = ele;
    title.innerHTML = songName;
  });
  makeAllPlays();
  document.getElementById(`${index}`).classList.remove("bx-play");
  document.getElementById(`${index}`).classList.add("bx-pause");
  makeAllBackgrounds();
  Array.from(document.getElementsByClassName("songItem"))[
    `${index - 1}`
  ].style.background = "rgb(105,105,170,0.1)";
});

next.addEventListener("click", () => {
  index -= 0;
  index += 1;
  if (index > Array.from(document.getElementsByClassName("songItem")).length) {
    index = 1;
  }
  music.src = `assets/music/${index}.mp3`;
  poster_master_play.src = `assets/img/${index}.jpg`;
  music.play();
  let song_title = songs.filter((ele) => {
    return ele.id == index;
  });
  song_title.forEach((ele) => {
    let { songName } = ele;
    title.innerHTML = songName;
  });
  makeAllPlays();
  document.getElementById(`${index}`).classList.remove("bx-play");
  document.getElementById(`${index}`).classList.add("bx-pause");
  makeAllBackgrounds();
  Array.from(document.getElementsByClassName("songItem"))[
    `${index - 1}`
  ].style.background = "rgb(105,105,170,0.1)";
});

let left_scroll = document.getElementById("left_scroll");
let right_scroll = document.getElementById("right_scroll");
let pop_song = document.getElementsByClassName("pop_song")[0];

left_scroll.addEventListener("click", () => {
  pop_song.scrollLeft -= 330;
});

right_scroll.addEventListener("click", () => {
  pop_song.scrollLeft += 330;
});

let left_scrolls = document.getElementById("left_scrolls");
let right_scrolls = document.getElementById("right_scrolls");
let item = document.getElementsByClassName("item")[0];

left_scrolls.addEventListener("click", () => {
  item.scrollLeft -= 330;
});

right_scrolls.addEventListener("click", () => {
  item.scrollLeft += 330;
});
