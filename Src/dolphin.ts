import { Fish } from "./fish"
export class Dolphin extends Fish{
    constructor(species:string){
        super(species)
    }
    play():string{
        return `${this.species} กำลังว่ายน้ำเล่นกับคลื่นตอนนี้.`;
    }
}