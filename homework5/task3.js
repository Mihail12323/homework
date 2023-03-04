function reverseArrayElements(arr) {
    return arr.reverse().join(' , ');
}

// exp. 1
let arr1 = reverseArrayElements([5, 4, 3, 2, 1]);
console.log('The reverse of the arr1 is : ' + arr1);

// exp. 2
let arr2 = reverseArrayElements([30, 25, 20, 15, 10, 5]);
console.log('The reverse of the arr2 is: ' + arr2);

// exp.3
let arr3 = reverseArrayElements([1, 2, 3, 4, 5]);
console.log('The reverse of the arr3 is: ' + arr3);