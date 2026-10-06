export class Cat {
    constructor(numberOfLegs, color) {
        this.numberOfLegs = numberOfLegs;
        this.color = color;
        this.numberOfLegs = numberOfLegs;
        this.color = color;
    }
    set NumberOfLegs(numberOfLegs) {
        this.numberOfLegs = numberOfLegs;
    }
    get NumberOfLegs() {
        return this.numberOfLegs;
    }
    set Color(color) {
        this.color = color;
    }
    get Color() {
        return this.color;
    }
    showDetails() {
        console.log(`the cat is ${this.color} color and it has ${this.numberOfLegs} legs`);
    }
}
//# sourceMappingURL=Cat.js.map