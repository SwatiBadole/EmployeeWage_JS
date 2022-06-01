console.log("welcome to Employee_wage App");

//UC1 :Ability to Check Employee is present or Absent
const IS_ABSENT=0;
let empCheck = Math.floor(Math.random() *10) % 2;
if(empCheck == IS_ABSENT){
    console.log("Employee is absent");
    //return;
}
else{
    console.log("Employee is present");
}