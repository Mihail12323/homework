function maxElement(items) {
    let max = items[0];
    for (const item of items) {
        if (max < item) {
            max = item;
        }
    }
    return max;
}

// exp. 1
let arr1 = maxElement([6, 1, 3, 11, 4, 5, 6, 17]);
console.log('The maximum number is  ' + arr1);

// exp. 2
let arr2 = maxElement([0, -15, 8, 2, 35, 44, 10*9, 56]);
console.log('The maximum number is  ' + arr2);

// exp. 3
let arr3 = maxElement([0, 111, 49/7, 21, 51, 5*3, -21, '#']);
console.log('The maximum number is ' + arr3);