import { actions } from "./actions";
import { events } from "./events";

class Form {

    container: HTMLElement;
    form: HTMLFormElement;
    input: HTMLInputElement;
    btn: HTMLButtonElement;

    constructor() {
        this.container = document.getElementById('form') as HTMLElement;
        this.form = this.container.querySelector('form') as HTMLFormElement;
        this.input = this.form.querySelector('input') as HTMLInputElement;
        this.btn = this.form.querySelector('button') as HTMLButtonElement; 
        console.log('dev');
        this.start();
    }

    start() {

        const val = localStorage.getItem('userName');
        this.input.value = val as string;
        
        this.btn.addEventListener('click', (event) => {
            event.preventDefault();
            this.getPersonName();
        })

        events.on('startChat',()=> {
            this.container.style.display = 'none';  
        })
    }

    getPersonName() {
        const data = this.input.value;
        actions.setUser(data);
    }
}

export const form = new Form();