import { MatchResult } from "./MatchResult";

import { MatchReader } from "./composition/MatchReader";
import { CsvFileReader } from "./composition/CsvFileReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Sumary";
import { HtmlReport } from "./reportTargets/HtmlReport";

const csvFileReader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(csvFileReader);
// matchReader = MatchReader.fromCsv('football.csv') //using static method
matchReader.load();


const summary = new Summary(
    new WinsAnalysis("Man United"),
    new HtmlReport()
);

// uses a static method so we dont have to call new to init. 
const staticSummary = Summary.winsAnalysisWithHtmlReport("Man United")
summary.buildAndPrintReport(matchReader.matches)

// Inheritance(is a relationship between 2 classes) vs Composition(has a relationship between 2 classes)

/*
// Composition
import { MatchReader } from "./composition/MatchReader"
import { CsvFileReader } from "./composition/CsvFileReader"

// create an object that satisfies the "DataReader" inheritance
const csvFileReader = new CsvFileReader("football.csv")
// Create an instance pf MatchReader and pass in something satisfying the "DataReader" interface
const matchReader = new MatchReader(csvFileReader)
matchReader.load()

let manUnitedWins = 0 

for(let match of matchReader.matches){
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin){
    manUnitedWins ++
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin){
    manUnitedWins ++
  }
}
// console.log(matches)
console.log(`Man united won ${manUnitedWins} games`)
*/

/*
// Inheritance 
import {MatchReader} from "./inheritance/MatchReader"
// CsvFileReader is now an abstract base class inherited in MatchReader

const reader = new MatchReader("football.csv")
reader.read()

let manUnitedWins = 0

  for(let match of reader.data){
    if (match[1] === "Man United" && match[5] === MatchResult.HomeWin){
      manUnitedWins ++
    } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin){
      manUnitedWins ++
    }
  }
  // console.log(matches)
  console.log(`Man united won ${manUnitedWins} games`)
*/
