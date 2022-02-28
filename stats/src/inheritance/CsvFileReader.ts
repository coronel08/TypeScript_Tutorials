import fs from "fs"


// convention is to name a generic <T> for type 
export abstract class CsvFileReader<T>{
  data : T[] = []

  constructor(public filename: string){}

  // abstract method/function, implemented by child class
  abstract mapRow(row:string[]):T


  read(): void{
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8"
      })
      .split("\n")
      .map((row:string):string[] => {
        return row.split(",")
      })  
      // returns array that matches MatchData tupple pattern
      .map( this.mapRow )      
    }
}

