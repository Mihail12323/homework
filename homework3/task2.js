//task 2 starts here
let strings = ["Jocka", "Test", "Test1", "Test", "Marko", "Marko"];
let duplicate = 0;
let check = false;

for (let i = 0; i < strings.length; i++) {
    for (let k = i + 1; k < strings.length; k++) {
        if (strings[i] === strings[k]) {
            duplicate = strings[i];
            check = true;
        }
    }
    if (check) { 
        break;
    }
}

if (check) {
    console.log('The string that appears more than once is ->   ' + duplicate);
} else {
    console.log('There are no strings that appear more than once');
}
//task 2 ends here