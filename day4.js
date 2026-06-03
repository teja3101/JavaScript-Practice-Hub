console.log("Hello")

// document.getElementById("two").innerHTML = "Hello From DOM"    

function greet() {
    console.log("Greet fucntion")
}
// greet()                //  manual calling from 


function message() {
    document.getElementById("two").innerHTML = "Hello From DOM"
}

function checkLogin() {
    console.log("Checking login details....")

    let un = document.getElementById("uname").value
    let pwd = document.getElementById("pass").value
    let msg = document.getElementById("msg")

    console.log(un)
    console.log(pwd)

    if (un === "Tejaswini" && pwd === "teju31") {
        msg.innerHTML = "Login Successul"
        msg.style.color = "Blue"
    } else {
        msg.innerHTML = "Invalid Credentials"
        msg.style.color = "Red"
    }

}

function change() {
  let t = document.getElementById("change");

  if (t.innerHTML == "Hello, Welcome to Day 4") {
    t.innerHTML = "Change By DOM";
    t.style.backgroundColor = "red";
  }
  
  else if (t.innerHTML == "Change By DOM") {
    t.innerHTML = "DOM Manipulation";
    t.style.backgroundColor = "pink";
  } 
  
  else if (t.innerHTML == "DOM Manipulation") {
    t.innerHTML = "Document & querySelector";
    t.style.backgroundColor = "yellow";
  } 
  
  else {
    t.innerHTML = "Hello, Welcome to Day 4";
    t.style.backgroundColor = "#51c43d";
 }

 console.log("change button clicked...");
}