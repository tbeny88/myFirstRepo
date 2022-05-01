//let fullName= "Tal Hagay Ben Yehuda";
//let age= 35;
//let city= "Rishon Letzion"
//
//console.log(fullName);
//console.log(age);
//console.log(city);
//
//if(age == 35) {
//    console.log("bla bla bla");
//}
////
//const MAX_HEIGHT= 200;
//const MIN_HEIGHT= 150;
//let height= 160;
//
//if (height <= MAX_HEIGHT) {
//    console.log("Too High");
//}
//
//else if (height >= MIN_HEIGHT) {
//    console.log("OK");
//
//}
// else 
//  {
//      console.log("Not Allowed"); 
//}
//
//function sayHi(firstName, lastName){
//    console.log("Hi " + firstName + " " + lastName);
//}
//
//sayHi("Tal", "Hagay-Ben Yehuda");
//
//
//function sum (firstNum, secondNum){
//    console.log(firstNum + secondNum);
//}
//
//sum(1,4);

//החזרת ערך של פונקציה

//function doSomeThing(){
//    return 10; //מילה שמורה להחזרת הערך בפונקציה
//}
//let result = doSomeThing();
//
//console.log(result);


function bmi(weight, height) {
    return weight / (height * height);
}

console.log (bmi(60, 1.65));
