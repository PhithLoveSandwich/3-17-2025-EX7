import { Shark } from "./shark";
import { Dolphin } from "./dolphin";
const s1 = new Shark("ปลาฉลามมาโก้");
const d1 = new Dolphin("โลมาปากขวด");
console.log();
console.log("--------------------------------------------------");
console.log(`${s1.swim()}`);
console.log(`${s1.hunt()}`);
console.log(`${d1.swim()}`);
console.log(`${d1.play()}`);
console.log("--------------------------------------------------");
console.log();
import { Coffee } from "./coffee";
import { Juice } from "./juice";
const C1 = new Coffee("กาแฟอเมริกาโน่");
const J1 = new Juice("น้ำมิกซ์เบอรรี่");
console.log("--------------------------------------------------");
console.log(`${C1.serve()}`);
console.log(`${C1.hot()}`);
console.log(`${J1.serve()}`);
console.log(`${J1.fresh()}`);
console.log("--------------------------------------------------");
console.log()
import { Helicopter } from "./helicopter";
import { Airplane } from "./airplane";
const H1 = new Helicopter("AH-MK1",2)
const A1 = new Airplane("Airbus A350",50)
console.log("--------------------------------------------------");
console.log(`${H1.fly()}`);
console.log(`${H1.deploy()}`);
console.log(`${A1.fly()}`);
console.log(`${A1.flight()}`);
console.log("--------------------------------------------------");
console.log();
import { Guitar } from "./guitar";
import { Piano } from "./piano";
const G1 = new Guitar("Veelah V1-DCE");
const P1 = new Piano("Kawai KDP120");
console.log("--------------------------------------------------");
console.log(`${G1.play()}`)
console.log(`${G1.pined()}`)
console.log(`${P1.play()}`)
console.log(`${P1.sited()}`);
console.log("--------------------------------------------------");
console.log();
import { Pizza } from "./pizza";
import { Sushi } from "./sushi";
const PZ1 = new Pizza("Roman Pizza");
const S1 = new Sushi("Maki");
console.log("--------------------------------------------------");
console.log(`${PZ1.serve()}`)
console.log(`${PZ1.topping()}`)
console.log(`${S1.serve()}`)
console.log(`${S1.vasabi()}`)
console.log("--------------------------------------------------");
console.log();
import { PushNotification } from "./notification";
import { EmailNotification } from "./notification";
import { SMSNotification } from "./notification";
const EM1 = new EmailNotification("664259020@webmail.npru.ac.th");
const PN1 = new PushNotification("Thanawat Srisaeng")
const SM1 = new SMSNotification("0855564028")
console.log("--------------------------------------------------");
console.log(`${EM1.send("เมลล์ทดสอบ")}`)
console.log(`${PN1.send("เมลล์ทดสอบ")}`)
console.log(`${SM1.send("เมลล์ทดสอบ")}`)
console.log("--------------------------------------------------");
console.log();
import { Refrigerator } from "./appliance";
import { WashingMachine } from "./appliance";
import { Microwave } from "./appliance";
const R1 = new Refrigerator("HRSN9552DDXTH","HITACHI")
const W1 = new WashingMachine("WA75H4000SG/ST","Samsung ")
const M1 = new Microwave("MWP-MM20P","TOSHIBA")
console.log("--------------------------------------------------");
console.log(`${R1.turnOn()}`)
console.log(`${R1.turnOff()}`)
console.log(`${W1.turnOn()}`)
console.log(`${W1.turnOff()}`)
console.log(`${M1.turnOn()}`)
console.log(`${M1.turnOff()}`)
console.log("--------------------------------------------------");
console.log();