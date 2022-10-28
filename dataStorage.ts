import { actions } from './actions';

class dataStorage {

    user: string = '';

    constructor() {
        console.log('storage')
        this.start();
    }

    start() {

        this.user = localStorage.getItem('userName') as string;
        if(this.user) {
            actions.setUser(this.user)
        }   
             
    }
}

export const storage = new dataStorage();



