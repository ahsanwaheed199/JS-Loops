// Math.random(); //generates a random no. like 0.4334, 0.65443
// if we want that the No. is less then 50 then we writer Math.random()*50 or any no. you want
// Math.floor(); //convert the floating point no. into integer

// let target = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);

// while (target !== guess) {
//   console.log(`Target: ${target} Guess: ${guess}`);
//   guess = Math.floor(Math.random() * 10);
// }
// console.log(`Target: ${target} Guess: ${guess}`);
// console.log("Congratullation!");

// Break Statmetn

let target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (true) {
  if (target === guess) break;
  console.log(`Target: ${target} Guess: ${guess}`);
  guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log("Congratullation!");
