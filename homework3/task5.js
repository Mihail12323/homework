// task 5 starts here
let arr = [1, 0, -1, 2, 3, -10];
let positiveNumbers = [];
let sum = 0;

for (const item of arr) {
    if (item > 0) {
        positiveNumbers.push(item);
        sum += item;
    }
}
console.log(sum + ' is the sum of all the positive numbers');
//task 5 ends here