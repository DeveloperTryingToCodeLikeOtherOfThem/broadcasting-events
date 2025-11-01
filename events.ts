namespace events {
   export enum BroadcastMessage {
       //% block="message1"
      Message1,
      //% block="message2"
      Message2
   }

    let _id: BroadcastMessage


     //% blockId="events_on_receive_broadcast" block="on receive $message"
    //% color.shadow="color_enum_shim"
   //% weight=99
    export function onReceive(message: BroadcastMessage, handler: () => void) {
        if (_id === message) handler()
        else return
    }
    
   //% blockId=events_broadcast
    //% block="broadcast $message"
    //% color.shadow="color_enum_shim" weight=100
    export function broadcast(message: BroadcastMessage) {
        _id = message
    }
}