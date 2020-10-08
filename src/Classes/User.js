export class User{

  #password;
  constructor(username, password){
    this.username = username;
    this.#password=password;
    this.theme:"default";
    this.events=[];
	  this.watchlists=[];
    this.active_stocks:[];

	  this.portfolio = {
      deposit:0,
      net_value:0,
      profit_or_loss:0,
      orders:[],
      transactions:[],
      owned_stock:[],
      stock_details:[],

      history:{
        profit_or_loss:[],
        deposits:[],
        withdrawals:[],
        orders:[],
        stock_details:[],
      }
    }

    this.Robotrade_portfolio:{
        trading_style:"normal",
        deposit:0,
        amount_allocated:0,
        net_value:0,
        profit_or_loss:0,
        trade_with_profits:false,
        orders:[],
        stocks_to_trade:[],
        

        history:{
          profit_or_loss:[],
          deposits:[],
          withdrawals:[],
          orders:[],
          stock_details:[],
         }
      }

  }

  executeOrder(order){
    if(order.isOrderValid()){
        return true;
    }else{
        return false;
    }
  }

  checkPassword(passwordEntry){
      return this.#password === passwordEntry;
  }

}
