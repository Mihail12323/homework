//task 4 starts here
let arr = [1, 2, 4, 6, 7, 11];
let arr1 = [];

for (let i = 0; i < arr.length; i++) {
    let isPrime = true;

    for (let k = 2; k < arr[i]; k++) {
        if (arr[i] % k === 0) {
            isPrime = false;
        }
    }

    if (isPrime) {
        arr1.push(arr[i]);
    }
}

console.log('The numbers are ' + arr1.join(', '));
//task 4 ends here