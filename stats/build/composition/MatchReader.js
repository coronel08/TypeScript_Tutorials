"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const utils_1 = require("../utils");
class MatchReader {
    constructor(reader) {
        this.reader = reader;
        /* created a static method that can be called in index
        static fromCsv(filename: string): MatchReader {
            return new MatchReader(new CsvFileReader(filename));
        }
        */
        this.matches = [];
    }
    load() {
        this.reader.read();
        // returns array that matches MatchData tupple pattern
        this.matches = this.reader.data.map((row) => {
            return [
                (0, utils_1.dateStringToDate)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6],
            ];
        });
    }
}
exports.MatchReader = MatchReader;
