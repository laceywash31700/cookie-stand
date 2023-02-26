const hours = ['Hours', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total'];
let allTheCities = [];
const sectionElem = document.getElementById('holds table');
const tableElem = document.createElement('table');
sectionElem.appendChild(tableElem);
function City(city, maxCust, minCust, avgCookies) {
  this.city = city;
  this.maxCust = maxCust;
  this.minCust = minCust;
  this.avgCookies = avgCookies;
  this.numberOfCustPerHr = [];
  this.numberOfCookiesPerHr = [];
  this.totalCookiesSold = 0;
  allTheCities.push(this);
}
City.prototype.genRandCustAndCookies = function () {
  for (let i = 0; i < 14; i++) {
    this.numberOfCustPerHr[i] = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    this.numberOfCookiesPerHr[i] = Math.floor(this.numberOfCustPerHr[i] * this.avgCookies);
  }
};
City.prototype.totalCookiesGen = function () {
  for (let i = 0; i < this.numberOfCookiesPerHr.length; i++) {
    this.totalCookiesSold += this.numberOfCookiesPerHr[i];
  }
  this.numberOfCookiesPerHr.push(`${this.totalCookiesSold} sold`);
};
function renderTable() {
  const tableRowElem = document.createElement('tr');
  tableElem.appendChild(tableRowElem);

  const tableDataElem = document.createElement('td');
  tableDataElem.textContent = hours[0];
  tableRowElem.appendChild(tableDataElem);

  for (let i = 1; i < hours.length; i++) {
    const tableHeadElem = document.createElement('th');
    tableHeadElem.textContent = hours[i];
    tableRowElem.appendChild(tableHeadElem);
  }
}


function renderCityTableRow() {
  for (let i = 0; i < allTheCities.length; i++) {
    const tableRowElem = document.createElement('tr');
    tableElem.appendChild(tableRowElem);
    const tableHeadElem = document.createElement('th');
    tableHeadElem.textContent = allTheCities[i].city;
    tableRowElem.appendChild(tableHeadElem);
    console.log(allTheCities[i]);
    for (let j = 0; j < allTheCities[i].numberOfCookiesPerHr.length; j++) {
      const tableDataElem = document.createElement('td');
      tableDataElem.textContent = allTheCities[i].numberOfCookiesPerHr[j];
      tableRowElem.appendChild(tableDataElem);
      console.log(allTheCities[i].numberOfCookiesPerHr[j]);
    }
  }
}

const seattle = new City('Seattle', 23, 65, 6.3);
const tokyo = new City('Tokyo', 3, 24, 1.2);
const dubai = new City('Dubai', 11, 38, 3.7);
const paris = new City('Paris', 20, 38, 2.3);
const chicago = new City('Chicago', 2, 16, 4.6);

seattle.genRandCustAndCookies();
tokyo.genRandCustAndCookies();
dubai.genRandCustAndCookies();
paris.genRandCustAndCookies();
chicago.genRandCustAndCookies();

seattle.totalCookiesGen();
tokyo.totalCookiesGen();
dubai.totalCookiesGen();
paris.totalCookiesGen();
chicago.totalCookiesGen();

renderTable();
renderCityTableRow();

console.log(seattle);
console.log(tokyo);
console.log(dubai);
console.log(paris);
console.log(chicago);
console.log(allTheCities);
