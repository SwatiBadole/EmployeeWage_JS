console.log("Welcome to Employee wage program.");

//UC7
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

function calculateDailyWage(empHours){
    return empHours * WAGE_PER_HOUR;
}

while (totalWorkingDays < MAX_DAYS_IN_MONTH && totalWorkingHours < MAX_HRS_IN_MONTH) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    empHours = getWorkingHours(empCheck);
    totalWorkingHours = totalWorkingHours + empHours;
    empDailyWageArray.push(calculateDailyWage(empHours))  //Storing daily wage in array.
}
let empWage = calculateDailyWage(totalWorkingHours);
console.log("Total Days: "+totalWorkingDays +" Total Hours: "+totalWorkingHours+ " Employee wage: "+ empWage);

//UC 7A
let totEmpWage = 0;

function sum(dailyWage){
    totEmpWage += dailyWage;
}
empDailyWageArray.forEach(sum);
console.log("UC7 A >> Total Days: "+totalWorkingDays +" Total Hours: "+totalWorkingHours+ " Employee wage: "+ empWage);

function totalWages(totalWage, dailyWage){
    return totalWage + dailyWage;
}

console.log("UC7 A >> Employee Wage with reduce: "+ empDailyWageArray.reduce(totalWages,0));

console.log("-------------------------------------------------------");


//UC 7B : Show the day along with Daily wage using Array map helper function.

let dailyCounter = 0;

function mapDayWithWage(dailyWage){
    dailyCounter++;
    return dailyCounter + " = " + dailyWage;
}
let mapDayWithWageArray = empDailyWageArray.map(mapDayWithWage);
console.log("UC7 B: Daily wage map:")
console.log(mapDayWithWageArray);


console.log("-------------------------------------------------------");

//UC 7C : Show days when full time wage of 160 were earned.

function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArray = mapDayWithWageArray.filter(fullTimeWage);
console.log("UC7 C: Daily wage filter when full time wage earned");
console.log(fullDayWageArray);
console.log("-------------------------------------------------------")



//UC 7D : Find the first occurence when full time wage earned using find function.

function findFulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC7 D: First time fulltime wage was earned on day "+fullDayWageArray.find(findFulltimeWage));
console.log("-------------------------------------------------------")

//UC 7E : Check if every element of fulltime wage is truely holding full time wage.

function isAllFulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC6 E: Check all elements have full time wage: "+fullDayWageArray.every(isAllFulltimeWage));
console.log("-------------------------------------------------------")

//UC 7 F: Check if there is any part time wage

function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
}
console.log("UC7 F: Check if there is any part time wage: "+ mapDayWithWageArray.some(isAnyPartTimeWage));
console.log("-------------------------------------------------------")

//UC 7 G : Find the number of days the employee worked.

function totalDaysWorked(numOfDays, dailyWage){
    if(dailyWage > 0) return numOfDays+1;
    return numOfDays;
}
console.log("UC7 G: Number of days Employee worked: "+ empDailyWageArray.reduce(totalDaysWorked, 0));

/* Output:

 */