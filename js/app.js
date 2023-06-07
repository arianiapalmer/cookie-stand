'use strict';
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let allStores = [];
let storeList = document.getElementById('storeList');
function custPerHr(minCust, maxCust){
  return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
}
function cookiesPerHr(store){
  for(let i=0; i<hours.length; i++){
    let custAtEachHr = custPerHr(store.minCust, store.maxCust);
    let cookiesSold = Math.ceil(custAtEachHr * store.avgCookieSale);
    store.cookiesSoldPerHr.push(cookiesSold);
  }
}
function sumArray (store){
  let total = 0;
  for(let i=0; i<store.cookiesSoldPerHr.length; i++){
    total += store.cookiesSoldPerHr[i];
  }
  return total;
}
function renderList(store){
  let storeH3 = document.createElement('h3');
  storeList.appendChild(storeH3);
  storeH3.textContent = `${store.name}`;
  let unorderedList = document.createElement('ul');
  storeList.appendChild(unorderedList);
  for(let i=0; i<hours.length; i++){
    let listItem = document.createElement('li');
    unorderedList.appendChild(listItem);
    listItem.textContent = `${hours[i]}: ${store.cookiesSoldPerHr[i]} cookies`;
  }
  let dayTotal = sumArray(store);
  let listItem = document.createElement('li');
  unorderedList.appendChild(listItem);
  listItem.textContent = `Total: ${dayTotal} cookies`;
}
function renderStores(stores){
  for(let i=0; i<stores.length; i++){
    cookiesPerHr(stores[i]);
    renderList(stores[i]);
  }
}
let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust:65,
  avgCookieSale: 6.3,
  cookiesSoldPerHr: [],
};
let tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust:24,
  avgCookieSale: 1.2,
  cookiesSoldPerHr: [],
};

let dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust:38,
  avgCookieSale: 3.7,
  cookiesSoldPerHr: [],
};

let paris = {
  name: 'Paris',
  minCust: 20,
  maxCust:38,
  avgCookieSale: 2.3,
  cookiesSoldPerHr: [],
};

let london = {
  name: 'London',
  minCust: 2,
  maxCust:16,
  avgCookieSale: 4.6,
  cookiesSoldPerHr: [],
};

allStores.push(seattle, tokyo, dubai, paris, london);
console.log(allStores);
renderStores(allStores);
