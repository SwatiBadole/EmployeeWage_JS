console.log("Welcome to Employee wage program.");

//UC8
const IS_ABSENT = 0;
const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
const MAX_DAYS_IN_MONTH = 20;

function getWorkingHours(empCheck){
    switch (empCheck){
        case IS_ABSENT:
            return 0;
        
        case IS_FULL_TIME:

            return FULL_TIME_HOURS;
        
        case IS_PART_TIME:
            return PART_TIME_HOURS;
    }
}
let empHours = 0;
let totalWorkingHours = 0;
let totalWorkingDays = 0;
let empDailyWageArray = new Array();
let empDailyWageMap = new Map();

function calculateDailyWage(empHours){
    return empHours * WAGE_PER_HOUR;
}

while (totalWorkingDays < MAX_DAYS_IN_MONTH && totalWorkingHours < MAX_HRS_IN_MONTH) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    empHours = getWorkingHours(empCheck);
    totalWorkingHours = totalWorkingHours + empHours;
    empDailyWageArray.push(calculateDailyWage(empHours))  //Storing daily wage in array.
    empDailyWageMap.set(totalWorkingDays, calculateDailyWage(empHours)); //Storing daily wage in a map.
}
let empWage = calculateDailyWage(totalWorkingHours);
console.log("Total Days: "+totalWorkingDays +" Total Hours: "+totalWorkingHours+ " Employee wage: "+ empWage);
console.log("-----------------------------------------------------------------------------");

console.log(empDailyWageMap);
function totalWages(totalWage, dailyWage){
    return totalWage + dailyWage;
}

console.log("UC 8: Employee Wage map total hours :"+Array.from(empDailyWageMap.values()).reduce(totalWages, 0));

/*
output:
Welcome to Employee wage program.
Total Days: 20 Total Hours: 84 Employee wage: 1680
******************************************************************
Map(20) {
  1 => 160,
  2 => 160,
  3 => 0,
  4 => 80,
  5 => 80,
  6 => 0,
  7 => 160,
  8 => 0,
  9 => 80,
  10 => 80,
  11 => 160,
  12 => 160,
  13 => 0,
  14 => 0,
  15 => 0,
  16 => 160,
  17 => 160,
  18 => 80,
  19 => 160,
  20 => 0
}
UC 8: Employee Wage map total hours :1680
*/