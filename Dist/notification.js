"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushNotification = exports.SMSNotification = exports.EmailNotification = void 0;
class EmailNotification {
    constructor(message) {
        this.message = message;
    }
    send(message) {
        return `Email Send: ${message}`;
    }
}
exports.EmailNotification = EmailNotification;
class SMSNotification {
    constructor(message) {
        this.message = message;
    }
    send(message) {
        return `SMS Send: ${message}`;
    }
}
exports.SMSNotification = SMSNotification;
class PushNotification {
    constructor(message) {
        this.message = message;
    }
    send(message) {
        return `Push Send: ${message}`;
    }
}
exports.PushNotification = PushNotification;
