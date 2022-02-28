// Class as Javascript
class Person{
  constructor(id, name){
    this.id = id
    this.name = name
  }

  callName(){
    console.log(`Hello from ${this.name}`)
  }
}

// Extend Person Class
class Employee extends Person{
  constructor(id, name){
    super(id, name)
  }

  callName(){
    console.log(`Employee ${this.id}, ${this.name} works at bank`)
  }
}

let john = new Employee(1,"Papa John")
john.callName()



// Class as Typescript
/*
class Person{
  id:number
  name:string

  constructor(id:number , name:string){
    this.id = id
    this.name = name
  }

  callName(): void{
    console.log(`Hello from ${this.name}`)
  }
}

let john = new Person(1,"John Snow")
john.callName()
*/