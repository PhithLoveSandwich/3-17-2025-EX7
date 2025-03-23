"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Piano = void 0;
const instrument_1 = require("./instrument");
class Piano extends instrument_1.Instrument {
    constructor(name) {
        super(name);
    }
    sited() {
        return `เปียโน: ${this.name} กำลังมีคนนั่งเล่นอยู่ในตอนนี้.`;
    }
}
exports.Piano = Piano;
