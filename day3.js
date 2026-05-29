// ternary operators


// spread operators


// Homework

// let person = {
//     name = "ABC",
//     fare = 1200,
//     isPrimeUser = true,
//     promoCode = "RIDE50",
//     enterCode = "RIDE50"
// };

// let oldLocation = ["Pune", "Mumbai"];
// let newLocation = ["Nashik", "Nagpur"];

// function discountCheck(amount){
//     let discount = amount > 2000 ? 40 :
//                    amount > 1000 ? 30 :
//                    amount > 500 ? 10 : 0;

//                    return discount;
// }
// let disPercent = discountCheck(person.fare) 
// console.log(disPercent)


let person = {
  name: "ABC",
  fare: 1200,
  isPrimeUser: true,
  promoCode: "RIDE50",
  enterCode: "RIDE50"
};

let oldLocation = ["Pune", "Mumbai"];
let newLocation = ["Nashik", "Nagpur"];

function discountCheck(amount) {
  let discount =
    amount > 2000 ? 40 :
    amount > 1000 ? 30 :
    amount > 500 ? 10 : 0;

  return discount;
}

let rideType = person.isPrimeUser ?
            (promoCode == enterCode ? "Prime User" : "Enter code is Mismatched" )
            : "Not a Prime User";
            console.log(rideType)

