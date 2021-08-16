const cols = 3
const rows = 3
let mark = null;
let squares = [
  [ '','','' ],
  [ '','','' ],
  [ '','','' ]
];


for(let i = 0; i <= rows-1; i++) {
  for(let j = 0; j <= cols-1 ; j++){
    mark = board[i][j];
    //console.log(mark); //will iterate all
  }
  console.log(mark); // last 3 ends vertically of inner array
}

/* where the loop ends */
//console.log(mark);

const xSign = 'X';
const oSign = 'O';

// xBtn.addEventListener('click', () => {
//   xBtn.style.backgroundColor = '#48675a'
//   oBtn.style.backgroundColor = '#e6ac27'
//   mark = xSign;
// });
// const winningCombo = [
//   [0,1,2]
//   [3,4,5]
//   [6,7,8]
//   [0,3,6]
//   [1,4,7]
//   [2,5,8]
//   [0,4,8]
//   [2,4,6]
// ]

// function winCheck() {
//   for(let loop of winningCombo) {
//     if loop ===
//   }
// 

// oBtn.addEventListener('click', () => {
//   xBtn.style.backgroundColor = '#48675a'
//   oBtn.style.backgroundColor = '#e6ac27'
//   mark = oSign;
// });


/*for(let i = 0; i < board.length; i++) {
  for(let j = 0; j < board[i].length; j++){
    const cell = document.createElement("div");
    cell.className = "cell";
    bigDiv.appendChild(cell);
  }
}*/




const firstTurn = () => {
 
}

const currentPlayer = () => {

}