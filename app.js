const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// const salesChart = {
//   header: 'Company Sales by Location',
//   render: function(){
//     const headerElm = document.getElementById('sales-header');
//     const h1Elem = document.createElement('h1');
//     h1Elem.textContent = this.header;
//     headerElm.appendChild(h1Elem);

//   },
// };
// console.log(salesChart.render());


const seattle = {

  location: 'Seattle',
  min: 23,
  max: 65,
  avgCookieSales: 6.3,
  numberOfCustomersPerHour: [],
  numberOfCookiesSoldPerHour: [],
  totalNumberOfCookiesSold: 0,


  randomCustomerAndCookieGenerator: function () {
    for (let i = 0; i < hours.length; i++) {
      this.numberOfCustomersPerHour[i] = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
      this.numberOfCookiesSoldPerHour[i] = Math.floor(this.numberOfCustomersPerHour[i] * this.avgCookieSales);
    }
  },


  totalNumberOfCookiesSoldGenerator: function () {
    for (let i = 0; i < this.numberOfCookiesSoldPerHour.length; i++) {
      this.totalNumberOfCookiesSold += this.numberOfCookiesSoldPerHour[i];
    }
  },


  render: function () {
    const sectionElem1 = document.getElementById('seattle-location');
    const h2Elem = document.createElement('h2');
    h2Elem.textContent = this.location;
    sectionElem1.appendChild(h2Elem);

    const ulElm = document.createElement('ul');
    sectionElem1.appendChild(ulElm);
    for(let i=0; i < this.numberOfCustomersPerHour.length; i++){
      const liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.numberOfCookiesSoldPerHour[i]} Cookies sold`;
      ulElm.appendChild(liElem);
    }

    const liElem = document.createElement('li');
    liElem.textContent = `Total Cookies sold: ${this.totalNumberOfCookiesSold}`;
    ulElm.appendChild(liElem);


  },
};
seattle.randomCustomerAndCookieGenerator();
seattle.totalNumberOfCookiesSoldGenerator();
seattle.render();
console.log(seattle);

const tokyo = {

  location: 'Tokyo',
  min: 3,
  max: 24,
  avgCookieSales: 1.2,
  numberOfCustomersPerHour: [],
  numberOfCookiesSoldPerHour: [],
  totalNumberOfCookiesSold: 0,


  randomCustomerAndCookieGenerator: function () {
    for (let i = 0; i < hours.length; i++) {
      this.numberOfCustomersPerHour[i] = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
      this.numberOfCookiesSoldPerHour[i] = Math.floor(this.numberOfCustomersPerHour[i] * this.avgCookieSales);
    }
  },


  totalNumberOfCookiesSoldGenerator: function () {
    for (let i = 0; i < this.numberOfCookiesSoldPerHour.length; i++) {
      this.totalNumberOfCookiesSold += this.numberOfCookiesSoldPerHour[i];
    }
  },



  render: function () {
    const sectionElem2 = document.getElementById('tokyo-location');
    const h2Elem = document.createElement('h2');
    h2Elem.textContent = this.location;
    sectionElem2.appendChild(h2Elem);

    const ulElm = document.createElement('ul');
    sectionElem2.appendChild(ulElm);
    for(let i=0; i < this.numberOfCustomersPerHour.length; i++){
      const liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.numberOfCookiesSoldPerHour[i]} Cookies sold`;
      ulElm.appendChild(liElem);
    }

    const liElem = document.createElement('li');
    liElem.textContent = `Total Cookies sold: ${this.totalNumberOfCookiesSold}`;
    ulElm.appendChild(liElem);
  },
};

tokyo.randomCustomerAndCookieGenerator();
tokyo.totalNumberOfCookiesSoldGenerator();
tokyo.render();
console.log(tokyo);


const dubai = {

  location: 'Dubai',
  minCustomerPerHour: 11,
  maxCustomerPerHour: 38,
  avgCookieSales: 3.7,
  numberOfCustomersPerHour: [],
  numberOfCookiesSoldPerHour: [],
  totalNumberOfCookiesSold: 0,


  randomCustomerAndCookieGenerator: function () {
    for (let i = 0; i < hours.length; i++) {
      this.numberOfCustomersPerHour[i] = Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1) + this.minCustomerPerHour);
      this.numberOfCookiesSoldPerHour[i] = Math.floor(this.numberOfCustomersPerHour[i] * this.avgCookieSales);
    }
  },


  totalNumberOfCookiesSoldGenerator: function () {
    for (let i = 0; i < this.numberOfCookiesSoldPerHour.length; i++) {
      this.totalNumberOfCookiesSold += this.numberOfCookiesSoldPerHour[i];
    }
  },


  render: function () {
    const sectionElem3 = document.getElementById('dubai-location');
    const h2Elem = document.createElement('h2');
    h2Elem.textContent = this.location;
    sectionElem3.appendChild(h2Elem);

    const ulElm = document.createElement('ul');
    sectionElem3.appendChild(ulElm);
    for(let i=0; i < this.numberOfCustomersPerHour.length; i++){
      const liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.numberOfCookiesSoldPerHour[i]} Cookies sold`;
      ulElm.appendChild(liElem);
    }

    const liElem = document.createElement('li');
    liElem.textContent = `Total Cookies sold: ${this.totalNumberOfCookiesSold}`;
    ulElm.appendChild(liElem);
  },
};
dubai.randomCustomerAndCookieGenerator();
dubai.totalNumberOfCookiesSoldGenerator();
dubai.render();
console.log(dubai);

const paris = {
  location: 'Paris',
  min: 20,
  max: 38,
  avgCookieSales: 2.3,
  numberOfCustomersPerHour: [],
  numberOfCookiesSoldPerHour: [],
  totalNumberOfCookiesSold: 0,


  randomCustomerAndCookieGenerator: function () {
    for (let i = 0; i < hours.length; i++) {
      this.numberOfCustomersPerHour[i] = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
      this.numberOfCookiesSoldPerHour[i] = Math.floor(this.numberOfCustomersPerHour[i] * this.avgCookieSales);
    }
  },


  totalNumberOfCookiesSoldGenerator: function () {
    for (let i = 0; i < this.numberOfCookiesSoldPerHour.length; i++) {
      this.totalNumberOfCookiesSold += this.numberOfCookiesSoldPerHour[i];
    }
  },


  render: function () {
    const sectionElem4 = document.getElementById('paris-location');
    const h2Elem = document.createElement('h2');
    h2Elem.textContent = this.location;
    sectionElem4.appendChild(h2Elem);

    const ulElm = document.createElement('ul');
    sectionElem4.appendChild(ulElm);
    for(let i=0; i < this.numberOfCustomersPerHour.length; i++){
      const liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.numberOfCookiesSoldPerHour[i]} Cookies sold`;
      ulElm.appendChild(liElem);
    }

    const liElem = document.createElement('li');
    liElem.textContent = `Total Cookies sold: ${this.totalNumberOfCookiesSold}`;
    ulElm.appendChild(liElem);
  },
};
paris.randomCustomerAndCookieGenerator();
paris.totalNumberOfCookiesSoldGenerator();
paris.render();
console.log(seattle);


const chicago = {

  location: 'Chicago',
  min: 2,
  max: 16,
  avgCookieSales: 4.6,
  numberOfCustomersPerHour: [],
  numberOfCookiesSoldPerHour: [],
  totalNumberOfCookiesSold: 0,


  randomCustomerAndCookieGenerator: function () {
    for (let i = 0; i < hours.length; i++) {
      this.numberOfCustomersPerHour[i] = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
      this.numberOfCookiesSoldPerHour[i] = Math.floor(this.numberOfCustomersPerHour[i] * this.avgCookieSales);
    }
  },


  totalNumberOfCookiesSoldGenerator: function () {
    for (let i = 0; i < this.numberOfCookiesSoldPerHour.length; i++) {
      this.totalNumberOfCookiesSold += this.numberOfCookiesSoldPerHour[i];
    }
  },


  render: function () {
    const sectionElem5 = document.getElementById('chicago-location');
    const h2Elem = document.createElement('h2');
    h2Elem.textContent = this.location;
    sectionElem5.appendChild(h2Elem);

    const ulElm = document.createElement('ul');
    sectionElem5.appendChild(ulElm);
    for(let i=0; i < this.numberOfCustomersPerHour.length; i++){
      const liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.numberOfCookiesSoldPerHour[i]} Cookies sold`;
      ulElm.appendChild(liElem);
    }

    const liElem = document.createElement('li');
    liElem.textContent = `Total Cookies sold: ${this.totalNumberOfCookiesSold}`;
    ulElm.appendChild(liElem);
  },
};
chicago.randomCustomerAndCookieGenerator();
chicago.totalNumberOfCookiesSoldGenerator();
chicago.render();
console.log(chicago);
