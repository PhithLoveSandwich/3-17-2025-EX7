export abstract class Instrument {
    constructor(protected name:string) {
    }
    play():string{
        return `เครื่องดนตรี: ${this.name} กำลังบรรเลงอยู่.`;
    }
}