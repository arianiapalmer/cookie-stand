'use strict';
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let storeHourlyTotals = [];
let seattle = {
  minCust: 23,
  maxCust:65,
  avgCookieSale: 6.3,
  // storeHourlyTotals: [],
  custPerHr: function(){
    return Math.floor(Math.random() * (10 - 0) + 0);
  },
  cookiesPerHr: function(){
    let custAtEachHr = this.custPerHr();
    for(let i=0; i<hours.length; i++){
      let cookiesSold = custAtEachHr * this.avgCookieSale;
      storeHourlyTotals.push(cookiesSold);
    }
  },
};
console.log(seattle);
let tokyo = {
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  // storeHourlyTotals: [],
  custPerHr: function(){
    return Math.floor(Math.random() * (10 - 0) + 0);
  },
  cookiesPerHr: function(){
    let custAtEachHr = this.custPerHr();
    for(let i=0; i<hours.length; i++){
      let cookiesSold = custAtEachHr * this.avgCookieSale;
      storeHourlyTotals.push(cookiesSold);
    }
  },
};
let dubai = {
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  // storeHourlyTotals: [],
  custPerHr: function(){
    return Math.floor(Math.random() * (10 - 0) + 0);
  },
  cookiesPerHr: function(){
    let custAtEachHr = this.custPerHr();
    for(let i=0; i<hours.length; i++){
      let cookiesSold = custAtEachHr * this.avgCookieSale;
      storeHourlyTotals.push(cookiesSold);
    }
  },
};
let paris = {
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  // storeHourlyTotals: [],
  custPerHr: function(){
    return Math.floor(Math.random() * (10 - 0) + 0);
  },
  cookiesPerHr: function(){
    let custAtEachHr = this.custPerHr();
    for(let i=0; i<hours.length; i++){
      let cookiesSold = custAtEachHr * this.avgCookieSale;
      storeHourlyTotals.push(cookiesSold);
    }
  },
};
let london = {
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  // storeHourlyTotals: [],
  custPerHr: function(){
    return Math.floor(Math.random() * (10 - 0) + 0);
  },
  cookiesPerHr: function(){
    let custAtEachHr = this.custPerHr();
    for(let i=0; i<hours.length; i++){
      let cookiesSold = custAtEachHr * this.avgCookieSale;
      storeHourlyTotals.push(cookiesSold);
    }
  },
};

// renderHourlySales: function(){
  //   for(let i=0; i<hours.length; i++){
      
  //   }
  // }
  // cookiesPerHr: function(){
  //   for(let i=0; i<hours.length; i++){
  //     let hourSale = this.custPerHr() * this.avgCookieSale;
  //     this.storeHourlyTotals.push(hourSale);
  //   }