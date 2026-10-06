import { Cat } from "./Cat.js";
export class PersianCat extends Cat {
    constructor(numberOfLegs, color, breed) {
        super(numberOfLegs, color);
        this.breed = breed;
        this.breed = breed;
    }
    set Breed(breed) {
        this.breed = breed;
    }
    get Breed() {
        return this.breed;
    }
    doMeowMeow() {
        console.log("I am Parsian Cat and I am Dooing Meow Meow");
    }
}
//# sourceMappingURL=PersianCat.js.map