// Generics example
class ArrayOfAnything<T> {
    constructor(public collection: T[]) {}
    get(index: number): T {
        return this.collection[index];
    }
}

new ArrayOfAnything<string>(["a", "b", "c"]);

// Regular Examples ------------------------------------------------------------- 
class ArrayOfNumbers {
    constructor(public collection: number[]) {}
    get(index: number): number {
        return this.collection[index];
    }
}

class ArrayOfStrings {
    constructor(public collection: string[]) {}
    get(index: number): string {
        return this.collection[index];
    }
}
// Regular Examples End ------------------------------------------------------------- 


// Generics example with functions
function printAnything<T>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

// defined type
printAnything<string>(["a", "b", "c"]);
// inferred type
printAnything(["a", "b", "c"]);

// Regular Examples ------------------------------------------------------------- 
function printStrings(arr: string[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
// Regular Examples End ------------------------------------------------------------- 



// Generic Constraints section below
class Car {
    print() {
        console.log("I am a car");
    }
}
class House {
    print() {
        console.log("I am a house");
    }
}
interface Printable {
    print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        arr[i].print();
    }
}
printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars<Car>([new Car(), new Car()]);
