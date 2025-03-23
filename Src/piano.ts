import { Instrument } from "./instrument";
export class Piano extends Instrument{
    constructor(name:string){
        super(name);
    }
    sited():string{
        return `เปียโน: ${this.name} กำลังมีคนนั่งเล่นอยู่ในตอนนี้.`;
    }
}