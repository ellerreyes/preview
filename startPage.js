let mark = null;
startPage();  

function startPage() {
  const mainDiv = document.createElement('div');
  mainDiv.id = 'mainDiv';

  const tttDiv = document.createElement('div');
  tttDiv.id = 'tttDiv';
  tttDiv.innerText = 'TIC TAC TOE';
  const tttLogo = document.createElement('img');
  tttLogo.id = 'tttLogo';
  tttLogo.src = '/assets/tttLogo.png';
  const chooseMarkDiv = document.createElement('div');
  chooseMarkDiv.innerText = 'FIRST TURN';
  chooseMarkDiv.id = 'chooseMarkDiv';

  const marksDiv = document.createElement('div');
  marksDiv.id = 'marksDiv';

  const xBtn = document.createElement('button');
  xBtn.innerText = 'X';
  xBtn.id = 'xBtn';
  const oBtn = document.createElement('button');
  oBtn.innerText = 'O';
  oBtn.id = 'oBtn';
  const startGameBtn = document.createElement('button');
  startGameBtn.innerText = 'START GAME';
  startGameBtn.id = 'startGameBtn';

  //appending items
  document.body.appendChild(mainDiv);
  marksDiv.append(xBtn, oBtn);
  chooseMarkDiv.appendChild(marksDiv);
  mainDiv.append(tttDiv, tttLogo, chooseMarkDiv, startGameBtn);

}

/************ event listeners *************/
xBtn.addEventListener('click', () => {
  xBtn.style.backgroundColor = '#48675a'
  oBtn.style.backgroundColor = '#e6ac27'
  mark = 'X';
});

oBtn.addEventListener('click', () => {
  oBtn.style.backgroundColor = '#665743'
  xBtn.style.backgroundColor = '#e6ac27'
  mark = 'O';
});

startGameBtn.addEventListener('click', () => {
  if(mark !== null) {
    hidestartPage();
    gamePage(mark);
  } else {
    alert('choose your mark');
  }
});

/********** functions *************/

function hidestartPage() {
  const hideMainDiv = document.getElementById('mainDiv');
  hideMainDiv.style.display = 'none';
}


