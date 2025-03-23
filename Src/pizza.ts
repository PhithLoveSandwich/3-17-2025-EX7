import { Food } from "./food";
export class Pizza extends Food{
    constructor(name:string){
        super(name)
    }
    topping():string{
        return `Pizza: ${this.name} added topping.`;
    }
}