interface Appliance{
    turnOn():string
    turnOff():string
}
export {Appliance}

class Refrigerator implements Appliance {
    constructor(protected model:string,protected name:string){
    }
    turnOn():string{
        return `${this.model} : ${this.name} Trun on now.`
    }
    turnOff():string{
        return `${this.model} : ${this.name} Trun off now.`
    }
}
export {Refrigerator}

class WashingMachine implements Appliance {
    constructor(protected model:string,protected name:string){
    }
    turnOn():string{
        return `${this.model} : ${this.name} Trun on now.`
    }
    turnOff():string{
        return `${this.model} : ${this.name} Trun off now.`
    }
}
export {WashingMachine}

class Microwave implements Appliance {
    constructor(protected model:string,protected name:string){
    }
    turnOn():string{
        return `${this.model} : ${this.name} Trun on now.`
    }
    turnOff():string{
        return `${this.model} : ${this.name} Trun off now.`
    }
}
export {Microwave}

