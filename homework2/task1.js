//Find the factorial for the number 5 using do-while statement.
//task 1 starts here
let num = 5;
let factorial = 1;
do {
  factorial *= num;
  num--;
} while (num > 0);
console.log(factorial);
//task 1 ends here
