"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fish = void 0;
class Fish {
    constructor(species) {
        this.species = species;
    }
    swim() {
        return `${this.species} กำลังว่ายน้ำอยู่ในทะเลแทบนี้.`;
    }
}
exports.Fish = Fish;
