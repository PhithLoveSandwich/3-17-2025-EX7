export abstract class Aircraft {
    constructor(protected model:string, protected capacity:number) {
    }
    fly():string{
        return `${this.model} กำลังบินอยู่ในน่านฟ้านี้.`;
    }
}