export class Event{
  constructor(stock, type){
    this.stock = stock;
    this.eventType = type;
    this.triggered= false;
  }

}