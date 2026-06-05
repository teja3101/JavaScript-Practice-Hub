console.log("Hello")

let arr = [1, 2, 3, 5]

// for loop - does not returns a new array
for (let v of arr) {
    console.log(v)
}


// let num = for (let v of arr){ console.log(v) }


// by map - returns a new array
let nums = arr.map(n => n)
console.log(nums)

let nums1 = arr.map(n => n + 1)
console.log(nums1)

let arr1 = [4, 5, 6, 7]

// let sum = 0
// for (let v of arr1){
//     sum += v
// }
// console.log(sum)

let sum = []
for (let v of arr1) {
    sum.push(v + 2)
}
console.log(sum)

let sums = arr1.map(v => v + 2)
console.log(sums)


let arr2 = [4, 5, 6, 7, 8, 9, 20, 56, 47]

let gt = []
for (let v of arr2) {
    if (v >= 20) {
            gt.push(v)
    }
}
console.log(gt)


console.log(">------------------")


// by filter
let gts = arr2.filter((v) => v>=20)
console.log(gts)


// print square
let sq = arr.map((v) => v*v)
console.log(sq)

console.log(">------------------")

const employees = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Data Analyst",
    salary: 85000
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "Product Manager",
    salary: 95000
  },
  {
    id: 3,
    name: "Charlie Brown",
    role: "Product Manager",
    salary: 78000
  },
  {
    id: 4,
    name: "Diana Wilson",
    role: "Data Analyst",
    salary: 72000
  },
  {
    id: 5,
    name: "Ethan Davis",
    role: "DevOps Engineer",
    salary: 90000
  }
];

let emp = employees.filter((e) => e.role === "Product Manager")
console.log(emp)


console.log(">------------------")


// by reduce 
let arr3 = [1,2,3,5]

let rd = arr3.reduce((sums, num) => sums + num, 1)
console.log(rd)

let sm = 1
for (let v of arr3){
    sm += v 
}
console.log(sm)


// **map() Tasks**

// Task 1: Increase Marks
let marks = [45,60,78,90,55]
let max = marks.map((v) => v+5)
console.log(max)


// Task 2: Convert Prices to Discounted Prices
// Create a new array with a 10% discount applied to each price.
let prices = [1000, 2000, 1500, 500]
let dis = prices.map((v) => v*0.9)
console.log(dis)


// Task 3: Convert Names to Uppercase
// Create a new array containing all names in uppercase.
let names = ["tejas", "mansi", "revati", "sujal"];
let name = names.map((v) => v.toUpperCase())
console.log(name)


// Task 4: Square Every Number
// Create a new array containing the square of every number.
let nums2 = [2, 3, 4, 5];
let num1 = nums2.map((v) => v*v)
console.log(num1)


// Task 5: Add "Mr./Ms." Prefix
let students = ["Tejas", "Mansi", "Revati"];
let pre = students.map((v) => `Mr./Ms. ${v}`)
console.log(pre)


// Create a new array where every name starts with:
// Student: Tejas
// Student: Mansi
// Student: Revati
let stu = students.map((v) => `Student: ${v}`)
console.log(stu)


// **filter() Tasks**

// Task 1: Find Adult Ages
// Create a new array containing only ages 18 and above.
let ages = [12, 18, 25, 15, 30, 16];
let age = ages.filter((v) => v>=18)
console.log(age)

// Task 2: Find Even Numbers
// Create a new array containing only even numbers.
let nums3 = [1, 2, 3, 4, 5, 6, 7, 8];
let even = nums3.filter((v) => v%2===0)
console.log(even)

// Task 3: Find Expensive Products
// Create a new array containing prices greater than 1000.
let prices1 = [500, 1200, 800, 2500, 600];
let p = prices1.filter((v) => v>1000)
console.log(p)

// Task 4: Find Long Names
// Create a new array containing names whose length is greater than 4.
let names1 = ["Raj", "Tejas", "Amit", "Pratik", "Om"];
let len = names1.filter((v) => v.length>4)
console.log(len)

// Task 5: Find Passed Students
// Create a new array containing marks greater than or equal to 40.
let marks1 = [35, 80, 25, 90, 40, 28];
let pass = marks1.filter((v) => v>=40)
console.log(pass)



// Object-Based map() Tasks

const employees1 = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Data Analyst",
    salary: 10000
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "Product Manager",
    salary: 45000
  },
  {
    id: 3,
    name: "Charlie Brown",
    role: "Product Manager",
    salary: 78000
  },
  {
    id: 4,
    name: "Diana Wilson",
    role: "Data Analyst",
    salary: 55000
  },
  {
    id: 5,
    name: "Ethan Davis",
    role: "DevOps Engineer",
    salary: 90000
  }
];

// Task 1: Get All Employee Names
// Create a new array containing only employee names.
let nm = employees1.map((v) => v.name)
console.log(nm)


// Task 2: Increase Salary
// Increase every employee's salary by 5000 and return a new array.
let sal = employees1.map((v) => v.salary+5000)
console.log(sal)


// Task 3: Get Employee Roles
// Create a new array containing only roles.
let role = employees1.map((v) => v.role)
console.log(role)


// Object-Based filter() Tasks

// Task 1: Find Developers
// Return all employees whose role is "dev".
let role1 = employees1.filter((v) => v.role==="Data Analyst")
console.log(role1)


// Task 2: High Salary Employees
// Return all employees whose salary is greater than 50000.
let sal1 = employees1.filter((v) => v.salary>50000)
console.log(sal1)


// Task 3: Python Developers
// Return all employees whose role is "DevOps Engineer".
let role2 = employees1.filter((v) => v.role==="DevOps Engineer")
console.log(role2)


// Task 4: Salary Between 40k and 60k
// Return employees whose salary is between 40000 and 60000.
let sal2 = employees1.filter((v) => v.salary>=40000 && v.salary<=60000)
console.log(sal2)



// Task 5: Employee ID Greater Than 3
// Return employees whose id is greater than 3.
let ID = employees1.filter((v) => v.id>3)
console.log(ID)


// Mixed Challenge Tasks

// Challenge 1
// First increase every number by 10 using map(), then keep only numbers greater than 13 using filter().
let nums4 = [1, 2, 3, 4, 5];
let gt1 = nums4.map((v) => v+10)
let gt2 = gt1.filter((v) => v>13)
console.log(gt2)


// Challenge 2
// From employees:
// Increase every salary by 5000 using map()
// Then show only employees whose updated salary is greater than 60000 using filter()
let sal3 = employees1.map((v) => v.salary+5000)
let emp1 = sal3.filter((salary) => salary>60000)
console.log(emp1)


// Challenge 3
// Convert all names to uppercase.
// Keep only names whose length is greater than 4.
let names2 = ["tejas", "mansi", "raj", "sujal"];
let nm1 = names2.map((v) => v.toUpperCase())
let nm2 = nm1.filter((v) => v.length>4)
console.log(nm2)