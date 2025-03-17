import { Drink } from "./drink";
export class Coffee extends Drink{
    constructor(name:string){
        super(name)
    }
    hot():string{
        return `${this.name} กำลังอุ่นได้พอดี.`;
    }
}