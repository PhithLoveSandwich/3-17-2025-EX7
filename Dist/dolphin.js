"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dolphin = void 0;
const fish_1 = require("./fish");
class Dolphin extends fish_1.Fish {
    constructor(species) {
        super(species);
    }
    play() {
        return `${this.species} กำลังว่ายน้ำเล่นกับคลื่นตอนนี้.`;
    }
}
exports.Dolphin = Dolphin;
