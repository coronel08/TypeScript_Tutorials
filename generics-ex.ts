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

// Generics example
class ArrayOfAnything<T> {
    constructor(public collection: T[]) {}
    get(index: number): T {
        return this.collection[index];
    }
}

new ArrayOfAnything<string>(["a", "b", "c"]);

function printStrings(arr: string[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

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
