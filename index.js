console.log("Hello, World! My first JavaScript code.");
for(let i = 0; i < 10; i++){
    console.log(i)
}


// checking if the member is eligible to vote
// Age is 18 or above to vote
let age = 17;
function checkAge(age) {
if (age >= 18){
    console.log("Yes!! You can vote.");
} else if (age < 18 && age >= 0){
    console.log("No!! You cannot vote.");
}
}
checkAge(age);


// Sum of Array;
let arr = [1, 2, 3, 4, 5];
let sum = 0;
function sumArray (arr){
 for (num of arr) {
    sum += num
 }
 console.log("Sum of Array is: " + sum);
}
sumArray(arr);


// Calculator function;
 
function add(x, y){
    return x + y;
}
function subtract(x, y){
    return x - y;
}
function multiply(x, y){
    return x * y;
} 
function divide(x, y){
    return x / y;
} 

function Calculator(operator, num1, num2){
    return operator(num1, num2);
}
console.log("Addition: " + Calculator(add, 10, 5));



const price = 275;
const lowDiscount = price/100*10;
const normalDiscount = price/100*15;
const highDiscount = price/100*30;

if (price <= 100){
    console.log("Your Total amount after discount is", `₹${Math.floor(price - lowDiscount)}`)
} else if (price > 100 && price <= 500){
    console.log("Your Total amount after discount is", `₹${Math.floor(price - normalDiscount)}`)
} else if (price >= 10000 && price <= 50000){
    console.log("Your Total amount is",`₹${Math.floor(price - highDiscount)}`, "after high discount")
} else {
    console.log(price, "ka hai Bhai!")
};
// console.log(lowDiscount, normalDiscount, highDiscount);



const  users = [
    { user: 1, name: "Salman", age: 20, address: "Mumbai" },
    { user: 2, name: "Siddiqui", age: 21, address: "UP" },
    { user: 3, name: "Ananya", age: 24, address: "Bangalore" },
    { user: 4, name: "Vikram", age: 28, address: "Delhi" },
    { user: 5, name: "Meera", age: 22, address: "Chennai" },
    { user: 6, name: "Arjun", age: 25, address: "Hyderabad" },
    { user: 7, name: "Priya", age: 23, address: "Pune" },
    { user: 8, name: "Rohan", age: 27, address: "Kolkata" },
    { user: 9, name: "Sana", age: 26, address: "Ahmedabad" },
    { user: 10, name: "Kabir", age: 29, address: "Jaipur" }
];

const idToRemove = 2;

const newArray = users.filter(item => item.id !== idToRemove);
console.log(newArray);




const newUser = {user: 11, name: "Kahkasha", age: 17, address: "My heart"}

const newUsers = users.push(newUser)

console.log(users);

const array1 = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];
const array2 = [{ id: 3, name: 'C' }, { id: 4, name: 'D' }];

const mergedArray = [...array1, ...array2];
console.log(mergedArray);




for(let user of users){
    const allNames = user.name;
    const ages = user.age;
    const address = user.address;
    console.log(allNames, ages, address)
}

console.log(users.length)
console.log(users[user = 3].name)
users[user = 1].name = "Mohd Salman";

users[user = 9].name = "Kabir Khan";

const targetUser = users.find(u => {
 return   u.user === 2;
})
if(targetUser){
    targetUser.name = "Salman Siddiqui";
}

console.log(targetUser)

