import { Aircraft } from "./aircraft";
export class Helicopter extends Aircraft{
    constructor(model:string,capacity:number){
        super(model,capacity)
    }
    deploy():string{
        return `${this.model} กำลังออกปฎิบัตการอยู่ในตอนนี้ และสามารถบรรจุเจ้าหน้าที่ได้ทั้งหมด: ${this.capacity}`;
    }
}