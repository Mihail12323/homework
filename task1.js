function sumOfArray(items) {
    let sum = 0;
    for (const item of items) {
        if (typeof item === 'number') {
            sum += item;
        }
    }
    return sum;
}

// exp. 1
const arr1 = sumOfArray([1, 2, 3, 4, 5]);
console.log('The sum of arr1 is ' + arr1);

// exp. 2
const arr2 = sumOfArray([75, 16, ';', '$']);
console.log('The sum of arr2 is ' + arr2);

// exp. 3
const arr3 = sumOfArray([-21, 86, '-16', 36, 'p']);
console.log('The sum of arr3 is ' + arr3);