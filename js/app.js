'use strict';
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// let allStorePerHourTotal = [];
let allStores = [];
let storeForm = document.querySelector('form');
let storeDiv = document.getElementById('store');
let resultsTable = document.createElement('table');
storeDiv.appendChild(resultsTable);

function randomCustPerHr(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function sumArray (arr){
  let total = 0;
  for(let i=0; i<arr.length; i++){
    total += arr[i].arr[i+i];
  }
  return total;
}
function Store(name, minCust, maxCust, avgCookieSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.cookiesSoldPerHr = [];
  this.totalSales = 0;
  this.custPerHr = 0;
  // this.cookiesPerHour();
  allStores.push(this);
}
Store.prototype.getCustPerHr = function () {
  this.custPerHr = randomCustPerHr(this.minCust, this.maxCust);
};
Store.prototype.cookiesPerHour = function () {
  for(let i=0; i<hours.length; i++){
    this.getCustPerHr();
    let cookiePerHr = (Math.floor(this.custPerHr*this.avgCookieSale));
    this.cookiesSoldPerHr.push(cookiePerHr);
    this.totalSales +=cookiePerHr;
  }
};
Store.prototype.render = function(){
  let row2 = document.createElement('tr');
  resultsTable.appendChild(row2);
  let tdCityName = document.createElement('th');
  tdCityName.textContent = `${this.name}`;
  row2.appendChild(tdCityName);
  for(let i=0; i<hours.length; i++){
    let tdCookiesPerHr = document.createElement('td');
    tdCookiesPerHr.textContent = `${this.cookiesSoldPerHr[i]}`;
    row2.appendChild(tdCookiesPerHr);
  }
  // let tdStoreDailyTotals = document.createElement('td');
  // row2.appendChild(tdStoreDailyTotals);
  // let dailyTotalValue =  sumArray(this.cookiesSoldPerHr);
  // tdStoreDailyTotals.textContent = dailyTotalValue;
};
// should there be an if else conditional for rendering stores that already exist?
function headerRow(){
  let hourHeadingRow = document.createElement('tr');
  resultsTable.appendChild(hourHeadingRow);

  let hoursString = document.createElement('th');
  hoursString.textContent = 'Hours';
  hourHeadingRow.appendChild(hoursString);

  for(let i = 0; i < hours.length; i++){
    let hourStringHeading = document.createElement('th');
    hourStringHeading.textContent = hours[i];
    hourHeadingRow.appendChild(hourStringHeading);
  }
  let dailyTotalHead = document.createElement('th');
  hourHeadingRow.appendChild(dailyTotalHead);
  dailyTotalHead.textContent = 'Daily Total';
}
function footerRow (){
  let row3 = document.createElement('tr');
  resultsTable.appendChild(row3);
  let tdTotal = document.createElement('th');
  tdTotal.textContent = 'Totals';
  row3.appendChild(tdTotal);
  let grandTotal = 0;
  for(let i=0; i<hours.length; i++){
    let total = 0;
    for(let j=0; j<allStores.length; j++){
      total += allStores[j].cookiesSoldPerHr[i];
      grandTotal += allStores[j].cookiesSoldPerHr[i];
    }
    let tdDailyTotals = document.createElement('td');
    tdDailyTotals.textContent = `${total}`;
    row3.appendChild(tdDailyTotals);
  }
  let tdGrandTotal = document.createElement('td');
  tdGrandTotal.textContent = `${grandTotal}`;
  row3.appendChild(tdGrandTotal);
}
function renderStore(){
  for(let i=0; i<allStores.length; i++){
    let currentStore = allStores[i];
    currentStore.cookiesPerHour();
    currentStore.getCustPerHr();
    currentStore.render();
  }
}
function handleFormSubmit(event){
  event.preventDefault();
  let name = event.target.storeName.value;
  let minCust = event.target.minCust.value;
  let maxCust = event.target.maxCust.value;
  let avgCookieSale = event.target.avgCookieSale.value;
  new Store(name, minCust, maxCust, avgCookieSale);
  renderStore();
}
storeForm.addEventListener('submit', handleFormSubmit);
new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 3.7);
new Store('Lima', 2, 16, 4.6);


headerRow();
renderStore();
footerRow();
