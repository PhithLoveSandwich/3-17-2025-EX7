"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Helicopter = void 0;
const aircraft_1 = require("./aircraft");
class Helicopter extends aircraft_1.Aircraft {
    constructor(model, capacity) {
        super(model, capacity);
    }
    deploy() {
        return `${this.model} กำลังออกปฎิบัตการอยู่ในตอนนี้ และสามารถบรรจุเจ้าหน้าที่ได้ทั้งหมด: ${this.capacity}`;
    }
}
exports.Helicopter = Helicopter;
