class Events {
    private eventsObj: any = {
    };
  
    on(eventName: string, fn: Function) {
      if (!this.eventsObj[eventName]) {
        this.eventsObj[eventName] = [];
      }
      this.eventsObj[eventName].push(fn); 
    }
  
    emit(eventName: string, data: any) {
      const events = this.eventsObj[eventName] as Array<Function>;
      if (!events) return;
  
      events.forEach(fn =>fn(data)); 
   
    }
}
  
  export const events = new Events();