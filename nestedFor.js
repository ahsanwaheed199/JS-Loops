// for (i = 0; i < 10; i++) {
//   console.log(`Outerloop${i}`);
//   for (j = 10; j >= 0; j -= 3) {
//     console.log(`inner loop${j}`);
//     for (k = 2; k <= 20; k += 2) {
//       console.log(k);
//     }
//   }
// }

// examp # GameBoard

// let countScore = 0;
// let gameBoard = [
//   [34, 53, 32, 12],
//   [3, 53, 1, 5],
//   [34, 53, 6, 23],
//   [1, 6, 5, 73],
// ];

// for (i = 0; i < gameBoard.length; i++) {
//   console.log(gameBoard[i]);
//   let row = gameBoard[i];
//   for (j = 0; j < row.length; j++) {
//     console.log(row[j]);
//     countScore += row[j];
//   }
// }

// console.log(countScore);

// Break Statment

for (i = 0; i < 10; i++) {
  console.log(`Outerloop${i}`);
  for (j = 10; j >= 0; j -= 3) {
    console.log(`inner loop${j}`);
    for (k = 2; k <= 20; k += 2) {
      if (k == 4) break;
      console.log(k);
    }
  }
}
