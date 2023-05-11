'use strict';
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let seattle = {
  minCust: 23,
  maxCust:65,
  avgCookieSale: 6.3,
  custPerHr: function(){
    return Math.floor(Math.random() * (10 - 0) + 0);
  }
};
let tokyo = {
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  custPerHr: function(){
    return Math.floor(Math.random() * (10 - 0) + 0);
  }
};
let dubai = {
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  custPerHr: function(){
    return Math.floor(Math.random() * (10 - 0) + 0);
  }
};
let paris = {
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  custPerHr: function(){
    return Math.floor(Math.random() * (10 - 0) + 0);
  }
};
let london = {
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  custPerHr: function(){
    return Math.floor(Math.random() * (10 - 0) + 0);
  }
};
