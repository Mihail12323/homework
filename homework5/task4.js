function isEven(item) {
    if (item % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function evenNumbers(items) {
    const evenArr = [];
    for (const item of items) {
        if (isEven(item)) {
            evenArr.push(item);
        }
    }
    if (evenArr.length === 0) {
        evenArr.push("None");
    }
    return evenArr;
}

console.log('The even numbers are: ');

// exp. 1
let arr1 = evenNumbers([1, 2, 3, 4, 5]);
console.log('Array 1:  ' + arr1.join(' , '));

// exp. 2
let arr2 = evenNumbers([1, 2, 6, 9, 8, 4]);
console.log('Array 2:  ' + arr2.join(' , '));

// exp.3
let arr3 = evenNumbers([4, 2, 64, 11, 21]);
console.log('Array 3:  ' + arr3.join(' , '));