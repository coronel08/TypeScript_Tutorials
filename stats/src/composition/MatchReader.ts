import { dateStringToDate } from "../utils";
import { MatchResult } from "../MatchResult";
import { MatchData } from "../MatchData";
import { CsvFileReader } from "./CsvFileReader";

interface DataReader {
    read(): void;
    data: string[][];
}

export class MatchReader {
    /* created a static method that can be called in index 
    static fromCsv(filename: string): MatchReader {
        return new MatchReader(new CsvFileReader(filename));
    }
    */

    matches: MatchData[] = [];

    constructor(public reader: DataReader) {}

    load(): void {
        this.reader.read();
        // returns array that matches MatchData tupple pattern
        this.matches = this.reader.data.map((row: string[]): MatchData => {
            return [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as MatchResult,
                row[6],
            ];
        });
    }
}
