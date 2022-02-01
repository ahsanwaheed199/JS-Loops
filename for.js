// The for loop is frequently used , usually where the loop will be traversed a fixed No. of Time

// let i = 0;
// for (; i < 5; ) {
//   i++; //i=1
//   console.log(i);
// }

// // exmp #2
// let j = 0;
// for (; ; j++) {
//   if (j == 4) {
//     break;
//   }

//   console.log(j);
// }
// console.log("Rest of the code");

// exmp:3

// infinite loop

// for (k = 20; k > 0; k++) {
//   console.log(k);
// }   //bad loop

// exam #4
// let arr = [34, 5, 66, 77, 223, 45, 64, 545, 452, 3];

// for (let i = 0; i < arr.length; i++) {
//   console.log(i, arr[i]);
// }

// let arr = [
//   {
//     name: "ali",
//     marks: 34,
//   },
//   {
//     name: "aryan",
//     marks: 78,
//   },
//   {
//     name: "usama",
//     marks: 98,
//   },
//   {
//     name: "raza",
//     marks: 67,
//   },
// ];

// for (i = 0; i < arr.length; i++) {
//   let student = arr[i];
//   console.log(student);
//   console.log(`${student.name} got ${student.marks}`);
// }

// forOf loop
// create a loop iterationg over iterable objects

// iterable?  arrays and string

// let arr = ["ahsan", "ali", "adeel", 34, 4];

// for (let i of arr) {
//   console.log(i);
// }

// for (let character of "Ahsan Waheed") {
//   console.log(character);
// }

// for of loop with objects
// e.g.

// let movieReviews = {
//   Titanic: 9.3,
//   HongKong: 7.6,
//   Spiderman: 8.9,
// };

// for (let i of movieReviews) {
//   console.log(i); // error:Uncaught TypeError: movieReviews is not iterable
// }
// for (movie of Object.keys(movieReviews)) {
//   console.log(movie);
// }

// let rating = Object.values(movieReviews);

// let average = 0;
// for (i of rating) {
//   console.log(i);
//   average += i;
// }
// average /= rating.length;
// console.log(average);
// we can use Object.keys() for geting keys of object
// and Object.value() for geting values of an object
// console.log(Object.keys(movieReviews));
// console.log(Object.values(movieReviews));

// forIN loop
// it's used to loop through an object's properties.
// Enumerating;
// to lookout the properties of an object

// const student = {
//   name: "Monica",
//   class: 7,
//   age: 12,
// };
// for (let key in student) {
//   // display the properties
//   console.log(key);
//   console.log(student[key]);
// }

// for (let key in [43, 343, 56, 64, 3]) {
//   console.log(key);
// }
