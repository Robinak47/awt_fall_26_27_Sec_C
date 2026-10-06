console.log("hello students");

let x = 10;
console.log(x);

var y = 30;
console.log(y);

const p = 3.1416;
console.log(p);

//function and arrow functions

function sum(a, b) {
    return a + b;
}


console.log(sum(10, 20));

const summation = (a, b) => a + b;

console.log("from arrow: " + summation(10, 20));

function greet() {
    return "hello";
}
console.log(greet());

const greetArrow = name => "hello " + name;
console.log(greetArrow("mr.meow"));


const func = function () {
    return "anonymous";
}

console.log(func());

const withdraw = (bal, amount) => {
    if ((bal - amount) > 0) {
        return true;
    }
    else {
        return false;
    }
}

const flag = withdraw(2000, 3000);
if (flag) {
    console.log("successful");
}
else {
    console.log("failed");
}


//array

let numArray = [1, 2, 3, 4, 5];
console.log(numArray);

numArray.push(6);
console.log(numArray);

const newNumArray = numArray.map(element => element + 5);
console.log(newNumArray);

const filterNumArray = numArray.filter(element => element > 2);
console.log(filterNumArray);

const reducedValue = numArray.reduce((sum, elememnt) => {
    return sum + elememnt
}, 0);
console.log(reducedValue);


console.log(numArray.some(elememnt => elememnt > 5));
console.log(numArray.every(elememnt => elememnt > 0));

//object
const student = {
    id: "24-98789-2",
    name: "Mr. meow",
    greet: function () {
        const sayName = () => {
            console.log("Hello " + this.name);
        }

        sayName();
    }
}

student.dept = "cse";

console.log(student.id);
console.log(student.name);
console.log(student.dept);

console.log(student["id"]);
student.greet();

//array destructuring

let arr2 = [10, 20, 30, 40, 50];

const [v1, v2, v3, v4, v5] = arr2;
console.log(v1, v2, v3, v4, v5);

let a = 10;
let b = 20;

[a, b] = [b, a];
console.log(a, b);

const person = {
    name: "Mr. meow",
    age: 20,
    money: 10,
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    }
}

const { name: newName, age: newAge, money: newMoney, address: {
    city: newCity, country: newCountry
} } = person;
console.log(newName, newAge, newMoney, newCity, newCountry);

//spread

const testArr = [20, 30, 40, 50, 60];
function test(a, b, c, d, e) {
    return a + b + c + d + e;
}
console.log(test(...testArr));

const university = {
    name: "aiub",
    location: "kuril"
}

const university2 = {
    ...university,
    creditFee: 8000,
}

console.log(university2.name, university2.location, university2.creditFee);



const testArr2 = [...testArr];
testArr.push(70);
console.log(testArr2);

//rest op

const [vt1, vt2, ...rest] = testArr;
console.log(vt1, vt2, rest);

function multiplication(...numberArray) {
    let mul = 1;
    for (let i of numberArray) {
        mul = mul * i;
    }

    return mul;
}

console.log(multiplication(10, 20, 40, 50, 50));

//forEach

let testForEach = [100, 200, 300, 400, 500];

testForEach.forEach(elememnt => {
    console.log(elememnt);
})



//syncronous operation
console.log("A");
console.log("B");
console.log("C");

//asyncronous nature of js

// console.log("Asyncronous");
// console.log("A");
// setTimeout(() => {
//     console.log("B");
// }, 10000);
// console.log("C");

// const intervalId = setInterval(() => { console.log("Hi"); }, 2000);
// setTimeout(() => {
//     clearInterval(intervalId);
// }, 12000);



///Promise

// function testPromise() {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             let stimulator = false;
//             if (stimulator) {
//                 resolve("sucess");
//             }
//             else {
//                 reject("failed");
//             }

//         }, 5000);

//     })
// }

// testPromise().then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log("Thanks buddy!");
// })


//async await

async function getUserData() {
    return new Promise((resolve, reject) => {

        let admin = true;
        if (admin) {
            resolve({ userId: 50 });
        }
        else {
            reject("you are not an Admin");
        }

    })
}

async function getResult(userId) {
    const userResult = [{ userId: 30, result: "Pass" }, { userId: 40, result: "Failed" }];

    return new Promise((resolve, reject) => {
        for (let user of userResult) {
            if (user.userId === userId) {
                resolve({ result: user.result });
            }
        }

        reject("user Not Found");

    })
}

async function execution() {
    try {
        const user = await getUserData();
        const userResult = await getResult(user.userId);
        console.log(userResult.result);
    }
    catch (error) {
        console.log(error);
    }

}

execution();

