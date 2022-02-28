"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./composition/MatchReader");
const CsvFileReader_1 = require("./composition/CsvFileReader");
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const Sumary_1 = require("./Sumary");
const HtmlReport_1 = require("./reportTargets/HtmlReport");
const csvFileReader = new CsvFileReader_1.CsvFileReader("football.csv");
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
// matchReader = MatchReader.fromCsv('football.csv') //using static method
matchReader.load();
const summary = new Sumary_1.Summary(new WinsAnalysis_1.WinsAnalysis("Man United"), new HtmlReport_1.HtmlReport());
// uses a static method so we dont have to call new to init. 
const staticSummary = Sumary_1.Summary.winsAnalysisWithHtmlReport("Man United");
summary.buildAndPrintReport(matchReader.matches);
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
