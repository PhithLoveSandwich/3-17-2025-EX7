"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microwave = exports.WashingMachine = exports.Refrigerator = void 0;
class Refrigerator {
    constructor(model, name) {
        this.model = model;
        this.name = name;
    }
    turnOn() {
        return `${this.model} : ${this.name} Trun on now.`;
    }
    turnOff() {
        return `${this.model} : ${this.name} Trun off now.`;
    }
}
exports.Refrigerator = Refrigerator;
class WashingMachine {
    constructor(model, name) {
        this.model = model;
        this.name = name;
    }
    turnOn() {
        return `${this.model} : ${this.name} Trun on now.`;
    }
    turnOff() {
        return `${this.model} : ${this.name} Trun off now.`;
    }
}
exports.WashingMachine = WashingMachine;
class Microwave {
    constructor(model, name) {
        this.model = model;
        this.name = name;
    }
    turnOn() {
        return `${this.model} : ${this.name} Trun on now.`;
    }
    turnOff() {
        return `${this.model} : ${this.name} Trun off now.`;
    }
}
exports.Microwave = Microwave;
