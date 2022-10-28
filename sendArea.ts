import { actions } from './actions';
import { events } from './events'

class SendArea {
   
    
    container: HTMLElement;
    form: HTMLFormElement;
    textArea: HTMLTextAreaElement;
    btn: HTMLButtonElement;
    personName: HTMLElement;

    constructor() {
        this.container = document.getElementById('chat-box') as HTMLElement;
        this.form = this.container.querySelector('form') as HTMLFormElement;
        this.textArea = this.form.querySelector('textarea') as HTMLTextAreaElement;
        this.btn = this.form.querySelector('button') as HTMLButtonElement;
        this.personName = this.form.querySelector('p') as HTMLElement;
        console.log('send')

        this.initPhase();
    }

    initPhase() {
        events.on('startChat', (person: string)=> {
            this.container.style.display = 'block';
            this.personName.innerHTML = person;
        })

        this.btn.addEventListener('click', (event)=>{
            this.sendMessage()
            event.preventDefault();
        })
    }

    sendMessage() {
        const messageText = this.textArea.value;       
        actions.submitMessage(messageText);  
        this.textArea.value = ""
    }
}


export const send = new SendArea();