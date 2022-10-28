import { actions } from './actions';
import { events } from './events';

class Update {
    timer: number = 0;
    delay: number = 4000;

    constructor() {
        this.onInit()
    }

    onInit() {
        events.on('startChat', ()=> {
            this.getMessages();
            this.startSync()
        })
    }

    startSync() {
        this.timer = setInterval(()=> {actions.requestLastMessages()}, this.delay)
    }

    getMessages() {
        actions.requestAllMessages()
    }
}

export const update = new Update();


