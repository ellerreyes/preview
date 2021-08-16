const cells = document.getElementsByClassName('cells');
let gameActive = true;
let board = [
  [ '','','' ],
  [ '','','' ],
  [ '','','' ]
];
let gameState = ["", "", "", "", "", "", "", "", ""];

function gamePage(mark) {
  //console.log(mark);
  //currentPlayer = mark;
  // const gamePageDiv = document.createElement('div');
  // gamePageDiv.id = 'gamePageDiv';

  const tttLogo = document.createElement('img');
  tttLogo.id = 'tttLogo';
  tttLogo.src ='assets/tttLogo.png'
 
  const boardDiv = document.createElement('div');
  boardDiv.className = 'boardDiv';

  let id = 0;
  board.forEach(function(row){
    row.forEach(function(item){
      const cell = document.createElement("div");
      cell.className = "cells";
      cell.id = id;
      boardDiv.appendChild(cell);
      id++;
    });
  });

  const playersDiv = document.createElement('div');
  playersDiv.id = 'playersDiv';

  const xPlayer = document.createElement('div');
  xPlayer.id = 'xPlayer';
  xPlayer.innerText = 'Player X';

  const oPlayer = document.createElement('div');
  oPlayer.id = 'oPlayer';
  oPlayer.innerText = 'Player O';

  //appending items
  //document.body.appendChild(gamePageDiv);
  document.body.appendChild(tttLogo);
  document.body.appendChild(boardDiv);
  document.body.appendChild(playersDiv);
  //gamePageDiv.append(tttLogo, boardDiv, playersDiv)
  playersDiv.append(xPlayer, oPlayer);

  //initial color of players' div at the bottom
  if(mark === 'X') {
    //currentPlayerDiv = xPlayer;
    xPlayer.style.backgroundColor = '#48675a'
    oPlayer.style.backgroundColor = 'transparent'
  }else if(mark === 'O') {
    //currentPlayerDiv = oPlayer;
    oPlayer.style.backgroundColor = '#665743' 
    xPlayer.style.backgroundColor = 'transparent'
  }

  /*** event listener ***/
  document.querySelectorAll('.cells').forEach(cell => cell.addEventListener('click', clicked));
}

function clicked(e) {
  const clickedCell = e.target;
  const clickedCellId = parseInt(clickedCell.getAttribute('id'));
  if (gameState[clickedCellId] !== "" || !gameActive ) {
    return;
  }
  cellPlayed(clickedCell, clickedCellId);
  checkWin();
}

function cellPlayed(clickedCell, clickedCellId) {
  clickedCell.innerHTML = `<span>${mark}</span>`;
  gameState[clickedCellId] = mark;

  markColor(clickedCell);
}

const moveClasses = [
  {move: "X", class: "red"},
  {move: "O", class: "blue"},
];

const markColor = clickedCell => {
  const cellClass = moveClasses.find(obj => obj.move === clickedCell.value).class;
  if(cellClass) {
    clickedCell.classList.add(cellClass)
  }
};

// function markColor(clickedCell) {
//   let marked = clickedCell.value
//   if(marked === 'X') {
//     marked.style.color = 'red';
//   }else if(marked === 'O') {
//     marked.style.color = 'blue';
//   }
// }


const winningCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function checkWin(){
  let roundWon = false;
  for (let i = 0; i <= 7; i++) {
    const win = winningCombo[i];
    let a = gameState[win[0]];
    let b = gameState[win[1]];
    let c = gameState[win[2]];
    if (a === '' || b === '' || c === '') {
      continue;
    }
    if (a === b && b === c) {
      roundWon = true;
      break
    }
  }
  let roundDraw = !gameState.includes("");

  if (roundWon) {
    modal(false);
  }else if (roundDraw) {
    modal(true);
  }
  playerDivTurn();
}

function playerDivTurn() {
  //currentPlayer = currentPlayer === "X" ? "O" : "X";
  mark = mark === "X" ? "O" : "X";
  const xPlayer = document.getElementById('xPlayer');
  const oPlayer = document.getElementById('oPlayer');

  if(mark === 'X') {
    xPlayer.style.backgroundColor = '#48675a'
    oPlayer.style.backgroundColor = 'transparent'
  } else if(mark === 'O') {
    oPlayer.style.backgroundColor = '#665743' 
    xPlayer.style.backgroundColor = 'transparent'
  }
  
}


function modal(draw) {
  const modalWrapper = document.createElement('div');
  modalWrapper.id = 'modalWrapper';
  document.body.appendChild(modalWrapper); 

  const blackDiv = document.createElement('div');
  blackDiv.id = 'blackDiv';
  
  const winDiv = document.createElement('div') 
  winDiv.id = 'winDiv';

  if (draw){
    winDiv.innerHTML = `DRAW`;
  }else{
    winDiv.innerHTML = `<span>PLAYER ${mark} WINS</span>`;
  }
    
  modalWrapper.append(winDiv, blackDiv)

  const okBtn = document.createElement('button');
  okBtn.id = 'okBtn';
  okBtn.innerHTML = 'OK'
  winDiv.append(okBtn)

  okBtn.addEventListener('click', () =>{
    modalWrapper.style.display = 'none';
    gameActive = false
  

  })

}

