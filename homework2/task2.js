//Calculate the grade point average for given grades.
//task 2 starts here
let grades = [6, 7, 8, 9, 10];
let totalGrade = 0;

for (let grade of grades) {
  totalGrade += grade; 
}
let averageGradePoint = totalGrade / grades.length;
console.log('The average grade point is'  + averageGradePoint );
//task 2 ends here