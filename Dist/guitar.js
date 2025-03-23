"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guitar = void 0;
const instrument_1 = require("./instrument");
class Guitar extends instrument_1.Instrument {
    constructor(name) {
        super(name);
    }
    pined() {
        return `กีตาร์: ${this.name} ดีดอยู่ในตอนนี้.`;
    }
}
exports.Guitar = Guitar;
