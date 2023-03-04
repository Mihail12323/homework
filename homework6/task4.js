function average (students) {
    let sum = 0;
    for (let i = 0; i < students.length; i++) {
        sum += students[i].grade;
    }
    let average = sum / students.length;
    return average;
}

const students = [
    { name: 'Mihail', grade: 5},
    { name: 'Ivan', grade: 4},
    { name: 'Dragan', grade: 3},
]

let avg = average(students);
console.log('Average = ' + avg);