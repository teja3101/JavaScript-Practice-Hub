console.log("Hello")

// Dialogue Boxes >------------------

// 1. alert 
// alert("Don't try to copy paste")

// 2. confirm
// confirm("Are you sure, you want to Delete it?")
// console.log(confirm("Are you sure, you want to Delete it?"))

// 3. prompt
// prompt("Enter your name please...")
// console.log(prompt("Enter your name please..."))


// setTimeout - execute once after the given time 

// 1. using arrow function 
// console.log("Hey, Tejaswini")
// const Greet = () => {
//     console.log("Hello, How are you?");
// }
// setTimeout(Greet, 3000);

// 2. using callback function 
// setTimeout( () => {
//     console.log("Are you crazy???");
// }, 3000);



// setTimeout - execute again and again after the given time 

// 1. using arrow function 
// const Greet = () => {
//     console.log("Hello, How are you?");
// }
// setInterval(Greet, 1000);

// 2. using callback function 
// setInterval( () => {
//     console.log("Are you crazy???");
// }, 1000);

// >------------------ It will print infinity times
// let count = 0
// setInterval( () => {
//     count++
//     console.log("Hello, Tejaswini", count);
// }, 500);


// >------------------ It will print particular times

// create Separate Function and used -
// let count = 0;
// function greet() {
//     count++;
//     console.log("Hello!!!", count);
// }
// let id = setInterval( () => {
//     greet ();
//     if (count == 5){
//         clearInterval(id)
//     }
// }, 1000);


let count = 0;
let id = setInterval(() => {
    count++;
    console.log("Hello!", count);

    if (count === 5) {
        clearInterval(id);
    }
}, 1000);
