let studentName = 'Maria';
let age = 18;
const school = 'Sacred Heart College';

console.log(studentName);
console.log(age);
console.log(school);

age = 19;               
console.log(age);

let fullName = 'Juan Dela Cruz';   // String
let score = 95;                    // Number
let gpa = 1.25;                    // Number (decimals are also Number)
let isEnrolled = true;             // Boolean
let middleName;                    // Undefined (no value assigned)
let nickname = null;               // Null (intentionally empty)

console.log(fullName);
console.log(score);
console.log(gpa);
console.log(isEnrolled);
console.log(middleName);
console.log(nickname);      // surprise! write down what you see

let a = '10';
let b = 10;
console.log(typeof a);
console.log(typeof b);
console.log(a + b);     // what is the result?
console.log(a - b);     // and this one?

let x = 17;
let y = 5;

console.log(x + y);   // addition
console.log(x - y);   // subtraction
console.log(x * y);   // multiplication
console.log(x / y);   // division
console.log(x % y);   // modulus (remainder)
console.log(x ** 2);  // exponent

let total = 100;
total += 20;   // total = total + 20
console.log(total);
total -= 10;
console.log(total);
total *= 2;
console.log(total);
total++;       // increment
console.log(total);

console.log(5 > 3);
console.log(5 < 3);
console.log(5 >= 5);
console.log(5 == '5');    // loose equality
console.log(5 === '5');   // strict equality
console.log(5 !== 6);

let hasID = true;
let hasTicket = false;

console.log(hasID && hasTicket);   // AND
console.log(hasID || hasTicket);   // OR
console.log(!hasID);               // NOT

console.log('Shown in the browser console');
alert('Shown in a popup box');
document.write('Written directly on the page');

document.getElementById('output').textContent = 'This text was placed by JavaScript!';

let name = prompt('What is your name?');
alert('Hello, ' + name + '!');

let num1 = prompt('Enter the first number:');
let num2 = prompt('Enter the second number:');

console.log(num1 + num2);                   // what do you get?
console.log(Number(num1) + Number(num2));   // and now?

let isStudent = confirm('Are you a student?');
console.log(isStudent);   // true if OK, false if Cancel

let name1 = 'Ana';
let course = 'BS Computer Science';
let year = 1;

// Old way
let msg1 = 'My name is ' + name + ', a ' + year + 'st year ' + course + ' student.';

// Template literal
let msg2 = `My name is ${name}, a ${year}st year ${course} student.`;

console.log(msg1);
console.log(msg2);

let price = 250;
let qty = 3;
console.log(`Total: PHP ${price * qty}`);
console.log(`Is the total above 500? ${price * qty > 500}`);

let receipt = `===== RECEIPT =====
Item:     Notebook
Quantity: ${qty}
Total:    PHP ${price * qty}
===================`;
console.log(receipt);

let user = prompt('Enter your name:');
let favoriteLanguage = prompt('Enter your favorite programming language:');
document.getElementById('output').textContent =
  `Hi ${user}! ${favoriteLanguage} is a great choice.`;

let age1 = Number(prompt('Enter your age:'));

if (age1 >= 18) {
  console.log('You are an adult.');
}

if (age >= 18) {
  console.log('You can vote.');
} else {
  console.log('You are too young to vote.');
}

let grade = Number(prompt('Enter your grade (0-100):'));

if (grade >= 90) {
  console.log('Excellent');
} else if (grade >= 80) {
  console.log('Very Good');
} else if (grade >= 75) {
  console.log('Passed');
} else {
  console.log('Failed');
}

let hasID1 = confirm('Do you have your school ID?');
let isMorning = confirm('Is it morning?');

if (hasID1 && isMorning) {
  console.log('You may enter the campus.');
} else {
  console.log('Access denied.');
}

let day = prompt('Enter a day (mon, tue, wed...):').toLowerCase();

switch (day) {
  case 'mon':
    console.log('Start of the week!');
    break;
  case 'fri':
    console.log('Almost the weekend!');
    break;
  case 'sat':
  case 'sun':
    console.log('Weekend!');
    break;
  default:
    console.log('A regular weekday.');
}

let score3 = 82;
let result = score3 >= 75 ? 'Passed' : 'Failed';
console.log(`Result: ${result}`);
