export abstract class Food{
    constructor(protected name:string){
    }
    serve():string{
        return `${this.name} เซิฟให้กับลูกค้าแล้ว`
    }
}