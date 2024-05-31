"use strict";

{
  const b = document.getElementById("b-b-b");
  const audio = new Audio("img/ジャグ.wav");
  const atari = document.getElementById("big");
  const hazure = document.getElementById("reg");
  const bg = document.getElementById("bgi");
  addEventListener("keydown",function() {
    let ran = Math.floor(Math.random() * 3);
    console.log(ran);
    if(ran == 1){
      b.classList.add("act");
      audio.play();
      atari.classList.add("bigbig");
      Element.style.backgroundImage = "url(img/マイジャグ.png)";
    }else {
      hazure.classList.add("regreg");
      return;
    }
  },false);
}

