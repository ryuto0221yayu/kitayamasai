"use strict";

{
  const b = document.getElementById("b-b-b");
  const audio = new Audio("img/ジャグ.wav");
  const atari = document.getElementById("big");
  const hazure = document.getElementById("reg");

  addEventListener("keydown",function() {
    let ran = Math.floor(Math.random() * 3);
    console.log(ran);
    if(ran == 1){
      audio.play();
      atari.classList.add("bigbig");
      document.querySelector("#bgi").classList.replace("jya", "jyb");
      console.log(document.querySelector("#bgi"));
    }else {
      hazure.classList.add("regreg");
      return;
    }
  },false);
}

