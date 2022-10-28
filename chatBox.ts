import { events } from "./events";
import { iMessage } from "./types";
import {actions} from './actions';
import { update } from './update';
import { appState } from "./state";
class chatBox {

    container: HTMLElement;
    chat: HTMLElement;


    constructor() {
        this.container = document.getElementById('chat-box') as HTMLElement;
        this.chat = this.container.querySelector('.chat') as HTMLElement;
        console.log('chat')
        this.initPhase(); 
    }

    initPhase() {
        events.on('receivedAllMessages', (() => {
            this.prepareDataForUpdate()
        }))

        events.on('userSendMessage',() => {
          this.prepareDataForUpdate()
        })
    }

    prepareDataForUpdate() {
      const arrMessages = appState.get('messages').slice(-5);
      const user = appState.get('user');
      this.updateView(arrMessages,user);
    }

    updateView(arrMessages:Array<iMessage>, user:any) {

     const htmlArr: any = [];

        arrMessages.forEach((el:iMessage) => {
            if (el.user === user) {
            
            let html = ` <div class="d-flex flex-row justify-content-start mb-4">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                alt="avatar 1" style="width: 45px; height: 100%;">
              <div class="p-3 ms-3" style="border-radius: 15px; background-color: rgba(57, 192, 237,.2);">
                <p class="small mb-0">${el.message}</p>
              </div>
            </div>`
            htmlArr.push(html);

            } else {
                let html = `
                <div class="d-flex flex-row justify-content-end mb-4">
                <div class="p-3 me-3 border" style="border-radius: 15px; background-color: #fbfbfb;">
                  <p class="small mb-0">${el.message}</p>
                </div>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                  alt="avatar 1" style="width: 45px; height: 100%;">
                  
              </div>`
              htmlArr.push(html);
               
            }
            
            const str = htmlArr.join('');
            this.chat.innerHTML = str
        })  
    }
}

export const chat = new chatBox();