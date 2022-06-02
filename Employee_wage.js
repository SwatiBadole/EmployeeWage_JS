//UC11:object operation using arrow function.
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
let employeeDailyWageAndHoursArray = new Array();

function calculateDailyWage(empHours){
    return empHours * WAGE_PER_HOUR;
}

while (totalWorkingDays < MAX_DAYS_IN_MONTH && totalWorkingHours < MAX_HRS_IN_MONTH) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    empHours = getWorkingHours(empCheck);
    totalWorkingHours = totalWorkingHours + empHours;
    employeeDailyWageAndHoursArray.push({
        dayNum: totalWorkingDays,
        dailyHours: empHours,
        dailyWage: calculateDailyWage(empHours),
        toString(){
            return '\nDay'+ this.dayNum + ' => Working hours is '+ this.dailyHours + ' and wage earned = ' + this.dailyWage
        },
    })
}
let empWage = calculateDailyWage(totalWorkingHours);

//11A:calculate total wage and total hours worked



let totalWages = employeeDailyWageAndHoursArray
    .filter(dailyHoursAndWage => dailyHoursAndWage.dailyWage > 0)
    .reduce((totalWages, dailyHoursAndWage) => totalWages += dailyHoursAndWage.dailyWage, 0);

let totalHours = employeeDailyWageAndHoursArray
    .filter(dailyHoursAndWage => dailyHoursAndWage.dailyHours > 0)
    .reduce((totalHours, dailyHoursAndWage) => totalHours += dailyHoursAndWage.dailyHours, 0);
console.log("\nTotal Hours = " + totalHours + "\nTotal Wages = " + totalWages);

//11B:show the full working days using foreach
process.stdout.write("\nLogging Full Work Days : ");
employeeDailyWageAndHoursArray
    .filter(dailyHoursAndWage => dailyHoursAndWage.dailyHours == 8)
    .forEach(dailyHoursAndWage => process.stdout.write(dailyHoursAndWage.toString()));

//11C:show part working days using map by redusing to string array
let partTimeWorkingDaysStringArray = employeeDailyWageAndHoursArray
    .filter(dailyHoursAndWage => dailyHoursAndWage.dailyHours == 4)
    .map(dailyHoursAndWage => dailyHoursAndWage.toString());
console.log("\n\nPart Time Working Days : " + partTimeWorkingDaysStringArray);

//11D:no working days only using map function
let nonWorkingDaysNumber = employeeDailyWageAndHoursArray
    .filter(dailyHoursAndWage => dailyHoursAndWage.dailyHours == 0)
    .map(dailyHoursAndWage => dailyHoursAndWage.dayNum);
console.log("\nNon Working Days : " + nonWorkingDaysNumber);