//If-Else Conditional Statements

let x = 10;
if (x > 0) {
    console.log("the number is positive");
}
else if (x < 0) {
    console.log("the number is negative");
}
else {
    console.log("Zero");
}

// Switch case- Statements
let day = prompt("enter number");
switch (day) {
    case "1":
        console.log("Monday");
        break;
    case "2":
        console.log("Tuesday");
        break;
    case "3":
        console.log("Wednesday");
        break;
    case "4":
        console.log("Tuesday");
        break;
    case "5":
        console.log("Friday");
        break;
    case "6":
        console.log("Saturday");
        break;
    case "7":
        console.log("Sunday");
        break;
    // default:
    //     console.log("invalid day");
    //     break;
}

//Ternary Operator
let age = 20;
age >= 18?console.log("Adult"):console.log("Minor");;

//For Loop
for(let i=1;i<11;i++){
    console.log(i);
}

//Reverse For Loop
for(let j=10;j>=1;j--){
    console.log(j);
}