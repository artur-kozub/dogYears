// the variable 'myAge' equals to my age
const myAge = 5;
// the first two dog's life yoars are equals to 10.5, thus we have to initialize the value to earlyYears which is two
let earlyYears = 2;
earlyYears *= 10.5;
// since we have accounted 2 years of my Age, we have subtract 2 actual years from myAge variable and assign it to the new variable
let laterYears = myAge - 2;
//the next line means that the next 21 years will count ass 4 dog's years each
laterYears *= 4;
//console.log(earlyYears, laterYears); this one just for testing purposes
// in the next line we calcualte my age into actual dog's years
let myAgeInDogYears = earlyYears + laterYears;
let myName = 'Arthur'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);