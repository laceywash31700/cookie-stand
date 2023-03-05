const hours = ['Hours & Location', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Grand Total'];
const allTheCities = [];
const arrayOfHourlyTotals = [];
const addStoreEvent = document.getElementById('add-store-event');
const sectionElem = document.getElementById('holds-table');
const tableElem = document.createElement('table');
sectionElem.appendChild(tableElem);
let hourlyTotal = 'Total Cookies Per Hr';



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
  this.numberOfCookiesPerHr.push(this.totalCookiesSold);
};


function renderTableHeader() {
  const tableHeaderElem = document.createElement('thead');
  tableElem.appendChild(tableHeaderElem);

  const tableRowElem = document.createElement('tr');
  tableHeaderElem.appendChild(tableRowElem);

  const tableDataElem = document.createElement('td');
  tableDataElem.textContent = hours[0];
  tableRowElem.appendChild(tableDataElem);

  for (let i = 1; i < hours.length; i++) {
    const tableHeadElem = document.createElement('th');
    tableHeadElem.textContent = hours[i];
    tableRowElem.appendChild(tableHeadElem);
  }
}


function renderTableBody() {
  const tableBodyElem = document.createElement('tbody');
  tableElem.appendChild(tableBodyElem);

  for (let i = 0; i < allTheCities.length; i++) {
    const tableRowElem = document.createElement('tr');
    tableBodyElem.appendChild(tableRowElem);
    const tableHeadElem = document.createElement('th');
    tableHeadElem.textContent = allTheCities[i].city;
    tableRowElem.appendChild(tableHeadElem);
    for (let j = 0; j < allTheCities[i].numberOfCookiesPerHr.length; j++) {
      const tableDataElem = document.createElement('td');
      tableDataElem.textContent = allTheCities[i].numberOfCookiesPerHr[j];
      tableRowElem.appendChild(tableDataElem);
    }
  }
}


function renderTableFooter(){
  const tablefooterElem = document.createElement('tfoot');
  tableElem.appendChild(tablefooterElem);

  const tableRowElem = document.createElement('tr');
  tablefooterElem.appendChild(tableRowElem);

  const tableHeadElem = document.createElement('th');
  tableHeadElem.textContent = hourlyTotal;
  tableRowElem.appendChild(tableHeadElem);


  for( let i = 0; i < allTheCities[0]['numberOfCookiesPerHr'].length; i++){
    let totalSumByHr = 0;
    for( let j = 0; j < allTheCities.length; j++){
      totalSumByHr += allTheCities[j].numberOfCookiesPerHr[i];
    }
    arrayOfHourlyTotals.push(totalSumByHr);
    const tableDataElem = document.createElement('td');
    tableDataElem.textContent = totalSumByHr;
    tableRowElem.appendChild(tableDataElem);
  }
}


function handleSubmit(event){
  event.preventDefault();
  console.log('I Got What You Putting Down!');
  const oldTableBody = document.querySelector('tbody');
  const oldTablefooter = document.querySelector('tfoot');

  let city = event.target.city.value;
  let maxCust = +event.target.maxCust.value;
  let minCust = +event.target.minCust.value;
  let avgCookiesSold = +event.target.avgCookiesSold.value;

  function removeTable(table){
    while(table.firstChild){
      table.removeChild(table.firstChild);
    }
  }

  const newStore = new City(city,maxCust,minCust,avgCookiesSold);



  newStore.genRandCustAndCookies();
  newStore.totalCookiesGen();


  removeTable(oldTablefooter);
  removeTable(oldTableBody);

  renderTableBody();
  renderTableFooter();

  console.log(newStore);
  addStoreEvent.reset();
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

renderTableHeader();
renderTableBody();
renderTableFooter();


console.log(seattle);
console.log(tokyo);
console.log(dubai);
console.log(paris);
console.log(chicago);

addStoreEvent.addEventListener('submit', handleSubmit);
