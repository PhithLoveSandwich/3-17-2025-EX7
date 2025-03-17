import { Drink } from "./drink";
export class Juice extends Drink{    
    constructor(name:string){
        super(name)
    }
    fresh():string{
        return`${this.name} ดื่มแล้วสดชื่นมาก.`;
    }
}