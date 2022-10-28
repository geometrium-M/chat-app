

class State {
    private appState: any = {};
  
    constructor(){
      console.log(this.appState);
    }
  
    set(key: string, data: Object) {
      this.appState[key] = data;
    }
  
    get(key: string) {
      return this.appState[key]
    }
  
    getState() {
      return this.appState;
    }
  
  }
  
  export const appState = new State()