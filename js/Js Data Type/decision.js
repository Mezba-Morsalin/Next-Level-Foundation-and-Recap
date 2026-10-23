let age = 27;

// if (age >= 18) {
//     console.log("Adult");
// }
// else {
//     console.log("Teenager");
// }

age >=18 ? console.log("Adult") : console.log("Teenager");

let marks = 91;

// if (marks >= 80 || marks >= 90) {
//     console.log("A+");
// }
// else if (marks >= 70) {
//     console.log("A");
// }
// else if (marks >= 60) {
//     console.log("A-");
// }
// else {
//     console.log("Need Improvement");
// }

switch (true) {
    case marks >= 80:
        console.log("A+");
        break;
    case marks >= 70:
        console.log("A+");
        break;
    case marks >= 60:
        console.log("A+");
        break;

    default:
        console.log("Need Improvement");
        break;
}