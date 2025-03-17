export abstract class Drink{
    constructor(protected name:string){
    }
    serve():string{
        return `${this.name} ทำการเสริฟให้กับลูกค้าแล้ว.`;
    }
}