let gameSeq = [];
let userSeq = [];

let btns = ["red", "green", "yellow", "blue"];

let level = 0;
let started = false;

let h2 = document.querySelector("h2");
// step 1
document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game started");
    started = true;
    levelUp();
  }
});
// step 2
function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 300);
}

function levelUp() {
  level++;
  h2.innerText = `Level ${level}`;
  // rand btn
  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  console.log(randBtn);
  console.log(randColor);
  console.log(randIdx);
  btnFlash(randBtn);

  gameSeq.push(randColor); // game ka color push kr diya arr mai
  console.log(gameSeq);
}

// step 3
let allBtns = document.querySelectorAll(".box");

function btnPress() {
  let btn = this;
  btnFlash(btn);
  let userColor = btn.getAttribute("id"); // userColor nikaal liya id attribute se
  userSeq.push(userColor);
  console.log(userSeq);

  checkAns(userSeq.length - 1);
}

// step 4
function checkAns(idx) {
  if (gameSeq[idx] === userSeq[idx]) {
    if (gameSeq.length == userSeq.length) {
      setTimeout(function () {
        userSeq = [];
        levelUp();
      }, 1000);
    }
  } else {
    h2.innerHTML = `Game Over ! <b>Your Score ${level} press any key Start Again`;
    reset();
  }
}

for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}
// step 5
function reset() {
  gameSeq = [];
  userSeq = [];
  started = false;
  level = 0;
}
