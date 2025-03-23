import { Instrument } from "./instrument";
export class Guitar extends Instrument{
    constructor(name:string){
        super(name)
    }
    pined():string{
        return `กีตาร์: ${this.name} ดีดอยู่ในตอนนี้.`;
    }
}