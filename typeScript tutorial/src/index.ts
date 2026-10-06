import { Cat } from "./Cat";
import { PersianCat } from "./PersianCat";

let x: number = 10;

let y: string;
y = "meow";

let bool: boolean = true;

let arr: number[] = [1, 2, 3, 4, 5];

type Obj = {
  id: string;
  name: string;
  age: number;
  cgpa?: number;
  getName(): string;
};

let obj: Obj = {
  id: "123",
  name: "meow",
  age: 30,

  getName: function () {
    return this.name;
  },
};

if (typeof obj.cgpa === "number") {
  console.log(obj?.cgpa);
}

let nulVal: null = null;
let undefineVal: undefined = undefined;

//tuple

let user: [number, string] = [1, "mr. Meow"];

function sum(a: number, b?: number): number {
  if (typeof b === "number") return a + b;
  else return a;
}

const sub = (c: number, d: number): number => {
  return c - d;
};

console.log(sum(10));

let anyVal: any = 10;
anyVal = "meow";
console.log(Math.round(anyVal));

let unknownVal: unknown = 10;
unknownVal = "meow";
if (typeof unknownVal === "number") console.log(Math.round(unknownVal));

function infiniteLoop(): never {
  while (true) {}
}

let numOrStr: number | string = 10;
numOrStr = "moew";

type Human = {
  humanAttribute: boolean;
};

type SuperHuman = {
  superHumanAttribute: boolean;
};

type Avenger = Human & SuperHuman;

let thor: Avenger = {
  humanAttribute: true,
  superHumanAttribute: true,
};

console.log(thor.humanAttribute);
console.log(thor.superHumanAttribute);

function getApi(a: boolean | string): string | boolean {
  return a;
}

enum Days {
  sunday,
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
}

console.log(Days.friday);

// let cat: Cat = new Cat(50, "burgendy");
// // cat.NumberOfLegs = 50;
// // cat.Color = "Baby Pink";
// console.log(cat.NumberOfLegs);
// console.log(cat.Color);
// cat.showDetails();

let persianCat: PersianCat = new PersianCat(4, "Deep Blue", "Turkish");
console.log(persianCat.NumberOfLegs);
console.log(persianCat.Color);
console.log(persianCat.Breed);
persianCat.showDetails();
persianCat.doMeowMeow();
