//zadaca 1 starts here
let char = "a";

if (typeof char == 'string') {
    if (char == "a" || char == "A" || char == "e" || char == "E" || char == "i" || char == "I" || char == "o" || char == "O" || char == "u" || char == "U") {
        console.log("Vowel")
    } else {
        console.log("Consonant")
    }
} else {
    console.log("Invalid Character")
}
//zadaca 1 ends here

//zadaca 2 starts here
let a = 12;
let b = 10;
let c = 3;

if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number'){
    if (a+b>c && a+c>b && b+c>a){
        console.log("This is a possible triangle");
    }
    else{
        console.log("This is NOT a possible triangle");
    }
}
else {
    console.log("Invalid variables");
}
//zadaca 2 ends here

//zadaca 3 starts here
let points = 60;

switch (typeof points === 'number') {
    case (points >= 0 && points < 50):
        console.log('not enough points')
        break;
    case (points >= 50 && points < 60):
        console.log(6)
        break;
    case (points >= 60 && points < 70):
        console.log(7)
        break;
    case (points >= 70 && points < 80):
        console.log(8)
        break;
    case (points >= 80 && points < 90):
        console.log(9)
        break;
    case (points >= 90 && points < 100):
        console.log(10)
        break;
    default:
        console.log('invalid numbers')
}
//zadaca 3 ends here

//zadaca 4 starts here
let a = "c";

switch (a) {
    case "c":
    case "k":
        console.log("circle");
        break;
    case "p":
    case "m":
    case "n":
        console.log("square");
        break;
    default:
        console.log("triangle");
}
//zadaca 4 ends here

//zadaca 5 starts here
let a = 10;
let b = 2;
let operator = "*";

switch (typeof a == 'number' && typeof b == 'number') {
case true:
    switch(operator) {
    case '+':
        console.log(a + b);
        break;
    case '-':
        console.log(a - b);
        break;
    case '/':
        switch(w == 0){
            case true:
                console.log("Devided by 0");
                break;
            case false:
                console.log(a / b);
        }
        break;
    case '*':
        console.log(a * b);
        break;
    default:
        console.log("Invalid operator");
}
break;
case false:
    console.log("Invalid Number")
}
//zadaca 5 ends here