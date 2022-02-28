import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  let todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID: ${id}.
    Has a title of: ${title}.
    Is it finished? ${completed}.
  `);
};





// add section7.41 to notes









// Class as Typescript
class Person1 {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  /* shortcut same as above
  constructor(public id:number, public name:string){}
  */

  callName(): void {
    console.log(`Hello from ${this.name}`);
  }
}

// Class that extends Person
class Employee1 extends Person1 {
  constructor(public job: string, id: number, name: string) {
    super(id, name);
  }

  callName(): void {
    console.log(`${this.name} is ${this.id} at the following job ${this.job}`);
  }
}

let john1 = new Person1(1, "John Snow");
john1.callName();

let tim = new Employee1("Bank", 2, "Timothy Snow");
tim.callName();
