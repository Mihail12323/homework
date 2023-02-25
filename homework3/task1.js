//task 1 starts here
let numbers = [1,2,3,4,5,6];
let sum = 0;
let average = 0;
let counter = 0;
let arr1 = [];

for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
    average = sum/numbers.length;
}
for(let k = 0; k < numbers.length; k++){
    if(numbers[k] > average){
        counter++;
        arr1.push(numbers[k]);
    }
}

console.log('The number of elements that are bigger than their average ' + ' is ' + counter);
console.log('The numbers are ' + arr1.join(', '));
//task 1 ends here