//task 3 starts here
let numbers = [1, 2, 3, 4, 5,];
let sum = 3;
let check = false;

for (let i = 0; i < numbers.length; i++) {
    for (let k = i + 1; k < numbers.length; k++) {
        if (numbers[i] + numbers[k] === sum) {
            console.log(numbers[i] + ' and ' + numbers[k]);
            check = true;
            break;
        }
    }
}
//task 3 ends here