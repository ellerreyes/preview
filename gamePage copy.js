const cells = document.getElementsByClassName('cell');
let board = [
  [ '','','' ],
  [ '','','' ],
  [ '','','' ]
];

function gamePage(mark) {
  const tttLogo = document.createElement('img');
  tttLogo.id = 'tttLogo';
  tttLogo.src ='assets/tttLogo.png'
 
  const bigDiv = document.createElement('div');
  bigDiv.className = 'bigDiv';

  board.forEach(function(row){
    row.forEach(function(col){
      const cell = document.createElement("div");
      cell.className = "cell";
      bigDiv.appendChild(cell);
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
  document.body.appendChild(tttLogo);
  document.body.appendChild(bigDiv);
  document.body.appendChild(playersDiv);
  playersDiv.append(xPlayer, oPlayer);

  //player chosen from startPage and initial turn div color
  if(mark === 'X') {
    currentPlayer = xPlayer;
    xPlayer.style.backgroundColor = '#48675a'
    oPlayer.style.backgroundColor = 'transparent'
  }else if(mark === 'O') {
    currentPlayer = oPlayer;
    oPlayer.style.backgroundColor = '#665743' 
    xPlayer.style.backgroundColor = 'transparent'
  }
  //invoke
  clicked(mark, currentPlayer);
}

/************ functions *************/
let moveCount = 0;

function clicked(mark, currentPlayer) {
  for (let cell of cells){
    cell.addEventListener('click', () => {
     cell.innerHTML = `<span>${mark}</span>`;
     if(mark === 'X') {
        cell.style.color = '#48675a';
        mark = 'O';
        currentPlayer = oPlayer;
        xPlayer.style.backgroundColor = 'transparent'
     }else if(mark === 'O'){
       cell.style.color = '#665743';
       mark = 'X';
       currentPlayer = xPlayer;
       oPlayer.style.backgroundColor = 'transparent'
     }
     player(mark, currentPlayer);
     moveCount++;
     gameState(cells, moveCount, mark);
     
    }, {once: true});
  }
}

//toggle assignment of color to the div
function player(mark, currentPlayer) {
  if(mark === 'X') {
    currentPlayer.style.backgroundColor = '#48675a';
  }else if(mark === 'O') {
    currentPlayer.style.backgroundColor = '#665743';
  }
}

function gameState(cells, moveCount, lastMove) {
  let drawState = false;
  
  if (lastMove === 'X'){
    lastMove = 'O';
  }else if(lastMove === 'O'){
    lastMove = 'X'
  }

  //horizontal
  if(cells[0].textContent === cells[1].textContent && cells[0].textContent === cells[2].textContent && cells[0].textContent !== '')  {
   modal(lastMove,drawState);
  } 
  else if(cells[3].textContent === cells[4].textContent && cells[3].textContent === cells[5].textContent  && cells[3].textContent !== '') {
    modal(lastMove,drawState);
  }

  else if(cells[6].textContent === cells[7].textContent && cells[6].textContent === cells[8].textContent  && cells[6].textContent !== '') {
    modal(lastMove,drawState);
  }
  //vertical
  else if(cells[0].textContent === cells[3].textContent && cells[0].textContent === cells[6].textContent  && cells[0].textContent !== '') {
    modal(lastMove,drawState);
  }
  else if(cells[1].textContent === cells[4].textContent && cells[1].textContent === cells[7].textContent && cells[1].textContent !== '') {
    modal(lastMove,drawState);
  }
  else if(cells[2].textContent === cells[5].textContent && cells[2].textContent === cells[8].textContent && cells[2].textContent !== '') {
    modal(lastMove,drawState);
  }
  //diagonal
  else if(cells[0].textContent === cells[4].textContent && cells[0].textContent === cells[8].textContent  && cells[0].textContent !== '') {
    modal(lastMove,drawState);
  }
  else if(cells[2].textContent === cells[4].textContent && cells[2].textContent === cells[6].textContent  && cells[2].textContent !== '') {
    modal(lastMove,drawState);
  } else if (moveCount === 9) {
    drawState = true;
    modal(lastMove,drawState);
  }
}


function modal(markWin, drawState) {

  const blackDiv = document.createElement('div');
  blackDiv.id = 'blackDiv';
  document.body.appendChild(blackDiv);
  
  const winDiv = document.createElement('div') 
  winDiv.id = 'winDiv';
  if (drawState){
    winDiv.innerHTML = `DRAW`;
  }else{
    winDiv.innerHTML = `the player ${markWin} wins`;
  }
  
  document.body.appendChild(winDiv);  

  const okBtn = document.createElement('button');
  okBtn.id = 'okBtn';
  okBtn.innerHTML = 'OK'
  winDiv.append(okBtn)
  
  
  // if(moveCount === 10) {
  //   winDiv.innerHTML = isDraw;
  // } else {
  //   winDiv.innerHTML = playerWins;
  // }
}


// okBtn.addEventListener('click', () => {
//   console.log('hello')
// })