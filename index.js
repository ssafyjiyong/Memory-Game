let timerId;
let time = 0;
const stopwatch = document.getElementById("stopwatch");
let  hour, min, sec;

// 시간(int)을 시, 분, 초 문자열로 변환
function getTimeFormatString() {
  hour = parseInt(String(time / (60 * 60)));
  min = parseInt(String((time - (hour * 60 * 60)) / 60));
  sec = time % 60;

  return String(hour).padStart(2, '0') + ":" + String(min).padStart(2, '0') + ":" + String(sec).padStart(2, '0');
}

function printTime() {
  time++;
  stopwatch.innerText = getTimeFormatString();
}

//시계 시작 - 재귀호출로 반복실행
function startClock() {
  printTime();
  stopClock();
  timerId = setTimeout(startClock, 1000);
}

//시계 중지
function stopClock() {
    if (timerId != null) {
        clearTimeout(timerId);
    }
}

// 시계 초기화
function resetClock() {
    stopClock()
    stopwatch.innerText = "00:00:00";
    time = 0;
}

const cardArray = [
  {
    name:"BarbaraPalvin",
    img:"./imgs/BarbaraPalvin1.jpg",
    id: null,
    done: false,
  },
  {
    name:"BarbaraPalvin",
    img:"./imgs/BarbaraPalvin2.jpg",
    id: null,
    done: false,
  },
  {
    name:"EmmaMackey",
    img:"./imgs/EmmaMackey1.jpg",
    id: null,
    done: false,
  },
  {
    name:"EmmaMackey",
    img:"./imgs/EmmaMackey2.jpg",
    id: null,
    done: false,
  },
  {
    name:"EmmaWatson",
    img:"./imgs/EmmaWatson1.jpg",
    id: null,
    done: false,
  },
  {
    name:"EmmaWatson",
    img:"./imgs/EmmaWatson2.jpg",
    id: null,
    done: false,
  },
  {
    name:"KeiraKnightley",
    img:"./imgs/KeiraKnightley1.jpg",
    id: null,
    done: false,
  },
  {
    name:"KeiraKnightley",
    img:"./imgs/KeiraKnightley2.jpg",
    id: null,
    done: false,
  },
  {
    name:"KiernanShipka",
    img:"./imgs/KiernanShipka1.jpg",
    id: null,
    done: false,
  },
  {
    name:"KiernanShipka",
    img:"./imgs/KiernanShipka2.jpg",
    id: null,
    done: false,
  },
  {
    name:"KristenStewart",
    img:"./imgs/KristenStewart1.jpg",
    id: null,
    done: false,
  },
  {
    name:"KristenStewart",
    img:"./imgs/KristenStewart2.jpg",
    id: null,
    done: false,
  },
  {
    name:"MargotRobbie",
    img:"./imgs/MargotRobbie1.jpg",
    id: null,
    done: false,
  },
  {
    name:"MargotRobbie",
    img:"./imgs/MargotRobbie2.jpg",
    id: null,
    done: false,
  },
  {
    name:"RileyKeough",
    img:"./imgs/RileyKeough1.jpg",
    id: null,
    done: false,
  },
  {
    name:"RileyKeough",
    img:"./imgs/RileyKeough2.jpg",
    id: null,
    done: false,
  },
]

const gameDOM = [];
let clickFirst = -1
let clickSecond = -1
let clickCount = 0

const getGameDOM = function () {
  const rows = document.querySelectorAll(".container .row")
  for (let i = 0; i < rows.length; i++) {
    gameDOM[i] = rows[i].querySelectorAll(".column")
  }
}

const setIDtoCardArray = () => {
  cardArray[0].id = "0-0";
  cardArray[1].id = "0-1";
  cardArray[2].id = "0-2";
  cardArray[3].id = "0-3";
  cardArray[4].id = "1-0";
  cardArray[5].id = "1-1";
  cardArray[6].id = "1-2";
  cardArray[7].id = "1-3";
  cardArray[8].id = "2-0";
  cardArray[9].id = "2-1";
  cardArray[10].id = "2-2";
  cardArray[11].id = "2-3";
  cardArray[12].id = "3-0";
  cardArray[13].id = "3-1";
  cardArray[14].id = "3-2";
  cardArray[15].id = "3-3";
}

const createBoard = () => {
  for (let i =0; i < gameDOM.length; i++) {
    for (let j =0; j < gameDOM[i].length; j++) {
      const card = document.createElement("img")
      card.setAttribute("src", "./imgs/main.jpg")
      card.classList.add("eachImg")
      gameDOM[i][j].appendChild(card)
    }
  }
}

const setClickHistory = (location) => {
  if (clickFirst === -1) {
    clickFirst = location
  } else {
    clickSecond = location
  }
}

const backFlip = () => {
  const parsedIdFirst = cardArray[clickFirst].id.split("-")
  const parsedIdSecond = cardArray[clickSecond].id.split("-")
  setTimeout(() => {    
    gameDOM[parsedIdFirst[0]][parsedIdFirst[1]].querySelector("img").src = "./imgs/main.jpg"
    gameDOM[parsedIdSecond[0]][parsedIdSecond[1]].querySelector("img").src = "./imgs/main.jpg"
  }, 500);
}

const isFinished = () => {
  let trueCnt = 0
  for ( info of cardArray) {
    if (info.done) {
      trueCnt++
    }
  }
  if (trueCnt === 16) {
    stopClock()
    const restartBtn = document.querySelector("#restartBtn")
    restartBtn.style.display = "block"
    restartBtn.style.visibility = "visible"
    alert("축하합니다!" + getTimeFormatString() + "를 기록하셨습니다!");
  }
}

const isCorrect = () => {
  if (cardArray[clickFirst].name === cardArray[clickSecond].name) {
    cardArray[clickFirst].done = true
    cardArray[clickSecond].done = true
  } else {
    backFlip()
  }
}

let isProcessing = false;

const flip = (location) => {
  if (isProcessing) return;

  if (!cardArray[location].done) {
    setClickHistory(location);
    const parseId = cardArray[location].id.split("-")
    gameDOM[parseId[0]][parseId[1]].querySelector("img").src = cardArray[location].img
    clickCount++
    if (clickCount === 2) {
      isProcessing = true
      clickCount = 0
      isCorrect()
      isFinished()
      isProcessing = false
    }
    if (clickFirst !== -1 && clickSecond !== -1) {
      clickFirst = -1
      clickSecond = -1
    }
  }
}


onload = () => {
  getGameDOM();
  for (let i = cardArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [cardArray[i], cardArray[j]] = [cardArray[j], cardArray[i]];
  }
  setIDtoCardArray();
  createBoard();
  startClock();
}


const restartGame = () => {
  resetClock();
  for (let i = cardArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [cardArray[i], cardArray[j]] = [cardArray[j], cardArray[i]];
  }

  for (let i = 0; i < cardArray.length; i++) {
    cardArray[i].done = false;
  }

  for (let i = 0; i < gameDOM.length; i++) {
    for (let j = 0; j < gameDOM[i].length; j++) {
      let card = gameDOM[i][j].querySelector("img");
      if (card) {
        card.remove();
      }
    }
  }
  setIDtoCardArray();
  createBoard();
  startClock();
}