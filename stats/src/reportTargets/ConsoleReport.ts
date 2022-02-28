import { OutputTarget } from "../Sumary";

export class ConsoleReport implements OutputTarget{
    print(report: string): void {
        console.log(report)
    }
}