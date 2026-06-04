console.log("Hello, it's Day 5")

// if statement

let a = 86;
if (a > 90) {
    console.log("a is greater than 90");
}

let b = 50;
if (b < 90) {
    console.log("b is smaller than 90");
}

let age = 20;
if (age >= 18) {
    console.log("You are an adult");
}

// Conditions:
// The customer's age must be at least 21.
// If the age condition is satisfied, check if their annual income is at least ₹500,000.
// If the income condition is also satisfied, check if their credit score is at least 750.
// If all conditions are met, display: Premium Loan Approved
let age1 = 25;
annual_income = 600000;
credit_score = 800;
if (age1 >= 21) {
    if (annual_income >= 500000) {
        if (credit_score >= 750) {
            console.log("Premium Loan Approved")
        }
    }

}



// if-else statement

let c = 90;
if (c > 100) {
    console.log("c is greater number")
}
else {
    console.log("c is smaller number")
}


let age2 = 31;
if (age2 >= 18) {
    console.log("You are eligible for voting")
}
else {
    console.log("You are not eligible for voting")
}

// Conditions:
// If the student has scored 40 or more marks:
//             - If the score is 75 or above: Passed with Distinction, Otherwise: Passed
// If the student has scored less than 40: Failed
let score = 50;
if (score >= 40) {
    if (score >= 75) {
        console.log("Passed with Distinction")
    }
    else {
        console.log("Passed")
    }
}
else {
    console.log("Failed")
}


// if-else ladder statement

// Write a program that assigns a grade based on a student's marks.
// Conditions:
// Marks ≥ 90 → Grade A
// Marks ≥ 75 → Grade B
// Marks ≥ 50 → Grade C
// Otherwise → Grade F
let marks = 55;
if (marks >= 90) {
    console.log("A")
}
else if(marks >= 75){
    console.log("B")
}
else if(marks >= 50){
    console.log("C")
}
else {
    console.log("F")
}

