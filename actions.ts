import { events } from "./events";
import { api } from "./request";
import { appState } from "./state";
import { iMessage } from "./types";




class Actions {
   

    constructor() {}

  setUser(person:string) {
        appState.set('user', person);
        events.emit('startChat', person);
    }
  
  submitMessage(messageText: string) {
    const user = appState.get('user');
    const message = {
      user,
      message: messageText
    }
    api.postMessage(message).then((data)=>{
      console.log(data)
      const id = data.messageId;
      const messages = [...appState.get('messages')]
      messages.push({...message, id })
      appState.set('messages', messages );
      events.emit('userSendMessage',data)
    })

  }


  requestAllMessages() {
    api.getAllMessages().then((data)=> {
      console.log(data, 'from index')

      appState.set('messages',data.messages);
      const messages = appState.get('messages');

      const user = appState.get('user');
      events.emit('receivedAllMessages',{messages,user}); 
    })
 }

  requestLastMessages() {
    const allMessages = appState.get('messages');
    const lastMessage = allMessages[allMessages.length - 1];
    const lastId = lastMessage.id;
    console.log(lastId)
    
    api.getMessagesSinceId(lastId).then((data)=>{
      console.log(data)
      const allMessages = appState.get('messages');
      const lastMessages = data.messages;
  
      const messages = allMessages.concat(lastMessages);
      appState.set('messages', messages)
      if (data.messages.length > 0) {
        events.emit('receivedAllMessages', messages)
      }
   })
  }
}

  


export const actions = new Actions();