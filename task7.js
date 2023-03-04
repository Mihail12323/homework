function longestName(strings) {
    let longestString = ' ';
    for (let i = 0; i < strings.length; i++) {
        if (strings[i].length > longestString.length) {
            longestString = strings[i];
        }
    }
    return longestString;
}

// exp. 1 
let arr1 = longestName(['Mihail', 'Filip', 'Ivan']);
console.log('The longest name from array 1 is ' + arr1);

// exp. 2
let arr2 = longestName(['Ivo', 'Mihaela', 'Anastasija']);
console.log('The longest name from array 2 is ' + arr2);

// exp. 3
let arr3 = longestName(['Anabela', 'Ace', 'Tina']);
console.log('The longest name from array 3 is ' + arr3);