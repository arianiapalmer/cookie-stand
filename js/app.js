'use strict';
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// let allStorePerHourTotal = [];
let allStores = [];
let storeForm = document.querySelector('form');

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
// function getHourlyTotal(){
//   allStorePerHourTotal.push(allStores.totalSales);
// }



// i need a function for the table heading
// i need a funtion for rending a single store row
// i need a function for rendering the heading
function renderSales(){
  let resultsTable = document.getElementById('results');
  let hourHeadingRow = document.createElement('tr');
  let hoursString = document.createElement('th');
  hoursString.textContent = 'Hours';
  hourHeadingRow.appendChild(hoursString);
  for(let i = 0; i < hours.length; i++){
    let hourStringHeading = document.createElement('th');
    hourStringHeading.textContent = hours[i];
    hourHeadingRow.appendChild(hourStringHeading);
  }
  let dailyTotalHeading = document.createElement('th');
  dailyTotalHeading.textContent = "Daily Total";
  hourHeadingRow.appendChild(dailyTotalHeading)
  resultsTable.appendChild(hourHeadingRow);
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
    resultsTable.appendChild(storeRow)
  }
}
function handleFormSubmit(event){
  event.preventDefault();
  let name = event.target.storeName.value;
  let minCust = event.target.minCust.value;
  let maxCust = event.target.maxCust.value;
  let avgCookieSale = event.target.avgCookieSale.value;
  new Store(name, minCust, maxCust, avgCookieSale);
  renderSales();
}
storeForm.addEventListener('submit', handleFormSubmit);

new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 3.7);
new Store('Lima', 2, 16, 4.6);
renderSales();
