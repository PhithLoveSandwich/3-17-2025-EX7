import { Aircraft } from "./aircraft";
export class Airplane extends Aircraft{
    constructor(model:string,capacity:number){
        super(model,capacity)
    }
    flight():string{
        return `${this.model} กำลังออกเที่ยวบินในตอนนี้ และสามารถบรรจุผู้โดยสารได้ทั้งหมด: ${this.capacity}`;
    }
}