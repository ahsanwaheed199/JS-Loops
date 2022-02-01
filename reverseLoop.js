// let arr = [34, 5, 66, 77, 223, 45, 64, 545, 452, 3];

// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(i, arr[i]);
// }

let arr = [
  {
    name: "ali",
    marks: 34,
  },
  {
    name: "aryan",
    marks: 78,
  },
  {
    name: "usama",
    marks: 98,
  },
  {
    name: "raza",
    marks: 67,
  },
];

for (i = arr.length - 1; i >= 0; i--) {
  let student = arr[i];
  console.log(student);
  console.log(`${student.name} got ${student.marks}`);
}
