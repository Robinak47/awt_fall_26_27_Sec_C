import { Cat } from "./Cat";

export class PersianCat extends Cat {
  constructor(
    numberOfLegs: number,
    color: string,
    private breed: string,
  ) {
    super(numberOfLegs, color);
    this.breed = breed;
  }

  set Breed(breed: string) {
    this.breed = breed;
  }

  get Breed(): string {
    return this.breed;
  }

  doMeowMeow(): void {
    console.log("I am Parsian Cat and I am Dooing Meow Meow");
  }

  override showDetails(): void {
    super.showDetails();
    console.log(`and the breed of the cat is ${this.breed}`);
  }

  makeSound(): void {
    console.log("meow meow");
  }
}
