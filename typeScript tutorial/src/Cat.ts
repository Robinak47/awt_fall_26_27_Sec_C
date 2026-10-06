export abstract class Cat {
  constructor(
    protected numberOfLegs: number,
    protected color: string,
  ) {
    this.numberOfLegs = numberOfLegs;
    this.color = color;
  }

  set NumberOfLegs(numberOfLegs: number) {
    this.numberOfLegs = numberOfLegs;
  }

  get NumberOfLegs(): number {
    return this.numberOfLegs;
  }

  set Color(color: string) {
    this.color = color;
  }

  get Color(): string {
    return this.color;
  }

  showDetails(): void {
    console.log(
      `the cat is ${this.color} color and it has ${this.numberOfLegs} legs`,
    );
  }

  abstract makeSound(): void;
}
