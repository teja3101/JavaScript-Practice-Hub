// a = "Tejaswini"
// console.log(a)


// var (old way - function scoped)
var a = 31;
a = 21;                // reassign allowed
var a = 30;           // redeclare allowed
console.log(a);


// let (modern - block scoped)
let b = 10;
b = 20;              // reassign allowed
// let b = 30;      // redeclare not allowed
console.log(b);


// const (constant - block scoped)
const c = 63;
// c = 55;               -not allowed (cannot reassign)
// const c = 25;         -not allowed (cannot redeclare)
console.log(c);