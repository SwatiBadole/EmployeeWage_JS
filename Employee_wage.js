console.log("Welcome to Employee wage program.");

//UC 2
const IS_ABSENT = 0;
const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const WAGE_PER_HOUR = 20;

let empHours = 0;
let empCheck = Math.floor(Math.random()*10)%3;

switch (empCheck){
    case IS_ABSENT:
        empHours = 0
        console.log("Employee is ABSENT.");
        break;
    
    case IS_FULL_TIME:
        empHours = FULL_TIME_HOURS;
        break;
    
    case IS_PART_TIME:
        empHours = PART_TIME_HOURS;
        break;
}

let empWage = empHours * WAGE_PER_HOUR;
console.log("Employee wage: "+ empWage);