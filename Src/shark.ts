import { Fish } from "./fish"
export class Shark extends Fish{
    constructor(species:string){
        super(species)
    }
    hunt():string{
        return `${this.species} กำลังออกล่าอยู่ในตอนนี้.`;
    }
}