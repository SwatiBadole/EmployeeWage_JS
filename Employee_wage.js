console.log("Welcome to Employee wage program.");

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HOURS_IN_MONTH = 160;

let totalEmployeeHours = 0;
let totalWorkingDays = 0;
let totalEmployeeWage = 0;
let dayCounter = 0;

function getWorkingHours(employeeCheck) {

    switch (employeeCheck) {

        case IS_PART_TIME:
            console.log("Employee works Part Time");
            return PART_TIME_HOURS;

        case IS_FULL_TIME:
            console.log("Employee works Full Time");
            return FULL_TIME_HOURS;

        default:
            console.log("Employee is ABSENT");
            return 0;
    }
}

function calculateDailyWage(employeeHours) {
    return employeeHours * WAGE_PER_HOUR;
}

let employeeDailyWageArray = new Array();
let employeeDailyWageMap = new Map();
let employeeDailyHoursMap = new Map();

while (totalEmployeeHours <= MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let employeeCheck = Math.floor(Math.random() * 10) % 3;
    let employeeHours = getWorkingHours(employeeCheck);
    totalEmployeeHours += employeeHours;
    employeeDailyWageArray.push(calculateDailyWage(employeeHours));
    employeeDailyHoursMap.set(totalWorkingDays, employeeHours);
    employeeDailyWageMap.set(totalWorkingDays, calculateDailyWage(employeeHours));
}

//USe Case - 9
const findTotal = (totalValue, dailyValue) => {
    return totalValue + dailyValue;
}
let count = 0;
let totalHours = Array.from(employeeDailyHoursMap.values()).reduce(findTotal, 0);
let totalWage = employeeDailyWageArray.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);
console.log("Employee Wage Using Arrow Function : \nTotal Hours : " + totalHours + "\nTotal Employee Wage : " + totalWage);

let nonWorkingDays = new Array();
let partTimeWorkingDays = new Array();
let fullTimeWorkingDays = new Array();
employeeDailyHoursMap.forEach((value, key) => {
    if(value == 8)
        fullTimeWorkingDays.push(key);
    else if(value == 4){
        partTimeWorkingDays.push(key);
    }
    else
        nonWorkingDays.push(key);
});

console.log("Full Working Days : " + fullTimeWorkingDays);
console.log("Part Working Days : " + partTimeWorkingDays);
console.log("Non Working Days : " + nonWorkingDays);


/*output:
Welcome to Employee wage program.
Employee works Part time
Employee Wage Using Arrow Function :
Total Hours : 76
Total Employee Wage : 1520
Full Working Days : 3,4,8,20
Part Working Days : 1,6,9,10,11,12,15,16,17,18,19
Non Working Days : 2,5,7,13,14

*/