const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const allTheCities = [];
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
  for (let i = 0; i < hours.length; i++) {
    this.numberOfCustPerHr[i] = Math.floor(Math.random()*(this.maxCust - this.minCust + 1) + this.minCust);
    this.numberOfCookiesPerHr[i] = Math.floor(this.numberOfCustPerHr[i]*this.avgCookies);
  }
};

City.prototype.totalCookiesGen = function () {
  for (let i = 0; i < this.numberOfCookiesPerHr.length; i++) {
    this.totalCookiesSold += this.numberOfCookiesPerHr[i];
  }
};

City.prototype.render = function() {
  const sectionElem1 = document.getElementById('seattle-location');
  const h2Elem = document.createElement('h2');
  h2Elem.textContent = this.city;
  sectionElem1.appendChild(h2Elem);

  const ulElm = document.createElement('ul');
  sectionElem1.appendChild(ulElm);
  for(let i=0; i < this.numberOfCookiesPerHr.length; i++){
    const liElem = document.createElement('li');
    liElem.textContent = `${hours[i]}: ${this.numberOfCookiesPerHr[i]} Cookies sold`;
    ulElm.appendChild(liElem);
  }

  const liElem = document.createElement('li');
  liElem.textContent = `Total Cookies sold: ${this.totalNumberOfCookiesSold}`;
  ulElm.appendChild(liElem);
};

const seattle = new City('Seattle', 23, 65, 6.3);
seattle.genRandCustAndCookies();
seattle.totalCookiesGen();
console.log(seattle);

const tokyo = new City('Tokyo',3,24,1.2);
tokyo.genRandCustAndCookies();
tokyo.totalCookiesGen();
console.log(tokyo);


const dubai = new City('Dubai',11,38,3.7);
dubai.genRandCustAndCookies();
dubai.totalCookiesGen();
console.log(dubai);

const paris = new City('Paris',20,38,2.3);
paris.genRandCustAndCookies();
paris.totalCookiesGen();
console.log(paris);

const chicago = new City('Chicago',2,16,4.6);
chicago.genRandCustAndCookies();
chicago.totalCookiesGen();
console.log(chicago);

console.log(allTheCities);
//   render: function () {
//     const sectionElem5 = document.getElementById('chicago-location');
//     const h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.location;
//     sectionElem5.appendChild(h2Elem);

//     const ulElm = document.createElement('ul');
//     sectionElem5.appendChild(ulElm);
//     for(let i=0; i < this.numberOfCustomersPerHour.length; i++){
//       const liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.numberOfCookiesSoldPerHour[i]} Cookies sold`;
//       ulElm.appendChild(liElem);
//     }

//     const liElem = document.createElement('li');
//     liElem.textContent = `Total Cookies sold: ${this.totalNumberOfCookiesSold}`;
//     ulElm.appendChild(liElem);
//   },

