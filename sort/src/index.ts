import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// Sort a numbers List
const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort()
console.log(numbersCollection.data);


// Sort a string
const charactersCollection = new CharactersCollection("Xaayb")
charactersCollection.sort()
console.log(charactersCollection.data)

//Linked List 
const linkedList= new LinkedList()
linkedList.add(100)
linkedList.add(-10)
linkedList.add(-3)
linkedList.add(4)
linkedList.sort()
linkedList.print()