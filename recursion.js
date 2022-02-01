// Recursion looping

let countdown = function (value) {
  if (value > 0) {
    console.log(value);
    return countdown(value - 1);
  } else {
    return value;
  }
};
countdown(10);

// exmp:
var factorial = function (number) {
  if (number <= 0) {
    // terminal case
    return 1;
  } else {
    // block to execute
    return number * factorial(number - 1);
  }
};
console.log(factorial(6));
