// console.log("Hello World")

let studID = 101;

let studName = "Tejaswini";

let studData = {
    "Id": 101,
    "name": "Tejaswini"
};

let studP = true;

let stud = null;

let stud1;

// Task 1 >-----------------------------------------

// console.log(typeof studID)
// console.log(typeof studName)
// console.log(typeof studData)
// console.log(typeof studP)
// console.log(typeof stud)
// console.log(typeof stud1)



// function stud_Data(x){
//     console.log("Type is: "+typeof(x))
// }
// stud_Data(studID)

// function stud_Data(x){
//     console.log("Type is: "+typeof(x))
// }
// stud_Data(studName)

// function stud_Data(x){
//     console.log("Type is: "+typeof(x))
// }
// stud_Data(studData)

// function stud_Data(x){
//     console.log("Type is: "+typeof(x))
// }
// stud_Data(studP)

// function stud_Data(x){
//     console.log("Type is: "+typeof(x))
// }
// stud_Data(stud)

// function stud_Data(x){
//     console.log("Type is: "+typeof(x))
// }
// stud_Data(stud1)



// Task 2 >-----------------------------------------


function Greet(name = "Guest") {
    if (name == "Guest") {
        console.log("Welcome" + name);
    } else {
        console.log("Welcome " + name + " to the JS Bootcamp");
    }
}
Greet("Tejaswini");
Greet();

