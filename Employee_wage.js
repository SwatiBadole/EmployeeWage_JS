//Use Case - 10

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HOURS_IN_MONTH = 160;

let totalEmployeeHours = 0;
let totalWorkingDays = 0;

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

let employeeDailyWageAndHoursArray = new Array();

while (totalEmployeeHours <= MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let employeeCheck = Math.floor(Math.random() * 10) % 3;
    let employeeHours = getWorkingHours(employeeCheck);
    totalEmployeeHours += employeeHours;
    employeeDailyWageAndHoursArray.push(
        {

            dayNumber: totalWorkingDays,
            dailyHours: employeeHours,
            dailyWage: calculateDailyWage(employeeHours),
            toString() {
                return "\nDay" + this.dayNumber + " => Working Hours = " + this.dailyHours + " And Wage Earned = " + this.dailyWage
            },
        });
}

console.log("\nShowing Daily Wages and Hours Worked Using Objects : " + employeeDailyWageAndHoursArray);
console.log(employeeDailyWageAndHoursArray);