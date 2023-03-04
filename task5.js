function avgOfArray(items) {
    let sum = 0;
    let counter = 0;
    for (const item of items) {
        if (typeof item === 'number') {
            sum += item;
        } else {
            counter++;
        }
    }
    return sum / (items.length - counter);
}

// exp. 1
let arr1 = avgOfArray([1, 2, 3, 4, 5, '6']);
console.log('The average of array one is ' + arr1);

// exp. 2
let arr2 = avgOfArray([10, 10, 20, 30, 40, 50]);
console.log('The average of array two is ' + arr2);

// exp. 3
let arr3 = avgOfArray(['5', 25, 11, 13, 15, 110]);
console.log('The average of array three is ' + arr3);