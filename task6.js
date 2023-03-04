function findLongestWord(string) {
    let stringSplit = string.split(' ');
    let longestWord = 0;
    for (let i = 0; i < stringSplit.length; i++) {
        if (stringSplit[i].length > longestWord) {
            longestWord = stringSplit[i].length;
        }
    }
    return longestWord;
}

// exp. 1
let arr1 = findLongestWord('The cat was hungry');
console.log(arr1);

// exp. 2
let arr2 = findLongestWord('He played football all day');
console.log(arr2);

// exp. 3
let arr3 = findLongestWord('I am the best at my school');
console.log(arr3);