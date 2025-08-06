const num1 = 30;
const num2 = 10;
const isStudent = false;
let age = 18;
let loop = 0;

// division
const divisionNumber = num1 / num2;
// Logical not
if(!isStudent){
    console.log('You are not a student');
}
// increment oparator
while(loop <= 10){
    console.log('This line will repeat ' + loop + ' times');
    loop++;
}

// decrement oparator
while(age > 0){
    console.log('This line prints the number of time of the age');
    age--;
}

console.log(divisionNumber);
// ternary operator
const vote = age >= 18 ? 'You can vote' : 'You need to be 18 to vote';
console.log(vote);