interface Notification{
    send(message: string):string
}
export {Notification}

class EmailNotification implements Notification{
    constructor(protected message:string){
    }
    send(message: string):string{
        return `Email Send: ${message}`
    }
}
export {EmailNotification}

class SMSNotification implements Notification{
    constructor(protected message:string){
    }
    send(message: string):string{
        return `SMS Send: ${message}`
    }
}
export {SMSNotification}

class PushNotification  implements Notification{
    constructor(protected message:string){
    }
    send(message: string):string{
        return `Push Send: ${message}`
    }
}
export {PushNotification }