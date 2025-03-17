export abstract class Fish{
    constructor(protected species:string){
    }
    swim():string{
        return `${this.species} กำลังว่ายน้ำอยู่ในทะเลแทบนี้.`;
    }
}