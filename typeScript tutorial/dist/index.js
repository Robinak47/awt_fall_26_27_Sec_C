import { Cat } from "./Cat.js";
import { PersianCat } from "./PersianCat.js";
let x = 10;
let y;
y = "meow";
let bool = true;
let arr = [1, 2, 3, 4, 5];
let obj = {
    id: "123",
    name: "meow",
    age: 30,
    getName: function () {
        return this.name;
    },
};
if (typeof obj.cgpa === "number") {
    console.log(obj === null || obj === void 0 ? void 0 : obj.cgpa);
}
let nulVal = null;
let undefineVal = undefined;
//tuple
let user = [1, "mr. Meow"];
function sum(a, b) {
    if (typeof b === "number")
        return a + b;
    else
        return a;
}
const sub = (c, d) => {
    return c - d;
};
console.log(sum(10));
let anyVal = 10;
anyVal = "meow";
console.log(Math.round(anyVal));
let unknownVal = 10;
unknownVal = "meow";
if (typeof unknownVal === "number")
    console.log(Math.round(unknownVal));
function infiniteLoop() {
    while (true) { }
}
let numOrStr = 10;
numOrStr = "moew";
let thor = {
    humanAttribute: true,
    superHumanAttribute: true,
};
console.log(thor.humanAttribute);
console.log(thor.superHumanAttribute);
function getApi(a) {
    return a;
}
var Days;
(function (Days) {
    Days[Days["sunday"] = 0] = "sunday";
    Days[Days["monday"] = 1] = "monday";
    Days[Days["tuesday"] = 2] = "tuesday";
    Days[Days["wednesday"] = 3] = "wednesday";
    Days[Days["thursday"] = 4] = "thursday";
    Days[Days["friday"] = 5] = "friday";
    Days[Days["saturday"] = 6] = "saturday";
})(Days || (Days = {}));
console.log(Days.friday);
let cat = new Cat(50, "burgendy");
// cat.NumberOfLegs = 50;
// cat.Color = "Baby Pink";
console.log(cat.NumberOfLegs);
console.log(cat.Color);
cat.showDetails();
let persianCat = new PersianCat(4, "Deep Blue", "Turkish");
console.log(persianCat.NumberOfLegs);
console.log(persianCat.Color);
console.log(persianCat.Breed);
persianCat.showDetails();
persianCat.doMeowMeow();
//# sourceMappingURL=index.js.map