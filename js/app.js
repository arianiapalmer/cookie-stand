'use strict';
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// let storeHourlyTotals = [];
let allStores = [];

function Store(name, minCust, maxCust, avgCookieSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.cookiesSoldPerHr = [];
  this.totalSales = 0;
  this.cookiesPerHour();
  allStores.push(this);
}
Store.prototype.custPerHr = function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
};
Store.prototype.cookiesPerHour = function () {
  for(let i=0; i<hours.length; i++){
    let custAtEachHr = this.custPerHr();
    let cookiesSold = Math.ceil(custAtEachHr * this.avgCookieSale);
    this.cookiesSoldPerHr.push(cookiesSold);
    this.totalSales +=cookiesSold;
  }
};

function renderSales(){
  let resultsTable = document.getElementById('results');
  let hoursHead = document.createElement('tr');
  let hoursTH = document.createElement('th');
  hoursTH.textContent = 'Hours'
  hoursHead.appendChild(hoursTH);
  for(let i = 0; i < hours.length; i++){
    let hourData = document.createElement('th');
    hourData.textContent = hours[i];
    hoursHead.appendChild(hourData);
    // tableRow.appendChild(hoursHead);
  }
  let totalsTd = document.createElement('th');
  totalsTd.textContent = "Daily Total";
  hoursHead.appendChild(totalsTd)
  resultsTable.appendChild(hoursHead);
  for (let i = 0; i < allStores.length; i++){
    let storeRow = document.createElement('tr');
    let storeNameTd = document.createElement('td');
    storeNameTd.textContent = allStores[i].name;
    storeRow.appendChild(storeNameTd);
    for (let j = 0; j < hours.length; j++){
      let hourlyData = document.createElement('td');
      hourlyData.textContent = allStores[i].cookiesSoldPerHr[j];
      storeRow.appendChild(hourlyData);
    }
    let storesTotalCell = document.createElement('td');
    storesTotalCell.textContent = allStores[i].totalSales;
    storeRow.appendChild(storesTotalCell);
    resultsTable.appendChild(storeRow);
  }
};
new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 3.7);
new Store('Lima', 2, 16, 4.6);
renderSales();
