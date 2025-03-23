import { Food } from "./food";
export class Sushi extends Food{
    constructor(name:string){
        super(name)
    }
    vasabi():string{
        return `Sushi: ${this.name} added vasabi.`;
    }
}