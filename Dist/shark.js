"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shark = void 0;
const fish_1 = require("./fish");
class Shark extends fish_1.Fish {
    constructor(species) {
        super(species);
    }
    hunt() {
        return `${this.species} กำลังออกล่าอยู่ในตอนนี้.`;
    }
}
exports.Shark = Shark;
