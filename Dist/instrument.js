"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instrument = void 0;
class Instrument {
    constructor(name) {
        this.name = name;
    }
    play() {
        return `เครื่องดนตรี: ${this.name} กำลังบรรเลงอยู่.`;
    }
}
exports.Instrument = Instrument;
