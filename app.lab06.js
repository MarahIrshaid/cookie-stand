
'use strict'

var seattle = {
    operationHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    minHourlyCustomers: 23,
    maxHourlyCustomers: 65,
    AvgCookiePerSale: 6.3,
    customerPerHour: [],
    cookiesPerHour: [],


    customerNum: function () {

        for (var i = 0; i < this.operationHours.length; i++) {

            this.customerPerHour[i] = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
        }
        //console.log(this.customerPerHour);

        return [this.customerPerHour[i]];

    },


    avgCookiesPurchasedPerHour: function () {


        for (var x = 0; x < this.operationHours.length; x++) {
            var cookiesPerHour = 1;
            this.cookiesPerHour[x] = Math.floor(this.customerPerHour[x] * Math.floor(this.AvgCookiePerSale));
            // console.log(this.cookiesPerHour);

        }
    },

    salesResult: function () {
        var parentD2 = document.getElementById('one');
        var h1D1 = document.createElement('h3');
        parentD2.appendChild(h1D1);
        h1D1.textContent = `Seattle`;

        for (var d = 0; d < this.operationHours.length; d++) {
            var parentD1 = document.getElementById('one');
            var ulD1 = document.createElement('li');
            parentD1.appendChild(ulD1);
            ulD1.textContent = `${this.operationHours[d]}:  ${this.cookiesPerHour[d]} cookies`;

        }

    },
    sumlD1: function () {

        this.totalCoockies = this.cookiesPerHour.reduce(function (a, b) { return a + b; }, 0);
        var parentD1 = document.getElementById('one');
        var ulD1 = document.createElement('li');
        parentD1.appendChild(ulD1);
        ulD1.textContent = `Total:  ${this.totalCoockies}`;

    }
}



seattle.customerNum(23, 65);
seattle.avgCookiesPurchasedPerHour();
seattle.salesResult();
seattle.sumlD1();



var tokyo = {
    operationHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    minHourlyCustomers: 3,
    maxHourlyCustomers: 24,
    AvgCookiePerSale: 1.2,
    customerPerHour: [],
    cookiesPerHour: [],


    customerNum: function () {

        for (var i = 0; i < this.operationHours.length; i++) {

            this.customerPerHour[i] = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
        }
        // console.log(this.customerPerHour);

        return [this.customerPerHour[i]];

    },


    avgCookiesPurchasedPerHour: function () {


        for (var x = 0; x < this.operationHours.length; x++) {
            var cookiesPerHour = 1;
            this.cookiesPerHour[x] = Math.floor(this.customerPerHour[x] * Math.floor(this.AvgCookiePerSale));

        }
    },

    salesResult: function () {
        var parentD2 = document.getElementById('two');
        var h1D1 = document.createElement('h3');
        parentD2.appendChild(h1D1);
        h1D1.textContent = `Tokyo`;

        for (var d = 0; d < this.operationHours.length; d++) {
            var parentD1 = document.getElementById('two');
            var ulD1 = document.createElement('li');
            parentD1.appendChild(ulD1);
            ulD1.textContent = `${this.operationHours[d]}:  ${this.cookiesPerHour[d]} cookies`;

        }

    },
    sumlD1: function () {

        this.totalCoockies = this.cookiesPerHour.reduce(function (a, b) { return a + b; }, 0);
        var parentD1 = document.getElementById('two');
        var ulD1 = document.createElement('li');
        parentD1.appendChild(ulD1);
        ulD1.textContent = `Total:  ${this.totalCoockies}`;

    }
}



tokyo.customerNum(3, 24);
tokyo.avgCookiesPurchasedPerHour();
tokyo.salesResult();
tokyo.sumlD1();


var dubai = {
    operationHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    minHourlyCustomers: 11,
    maxHourlyCustomers: 38,
    AvgCookiePerSale: 3.7,
    customerPerHour: [],
    cookiesPerHour: [],


    customerNum: function () {

        for (var i = 0; i < this.operationHours.length; i++) {

            this.customerPerHour[i] = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
        }
        // console.log(this.customerPerHour);

        return [this.customerPerHour[i]];

    },


    avgCookiesPurchasedPerHour: function () {


        for (var x = 0; x < this.operationHours.length; x++) {
            var cookiesPerHour = 1;
            this.cookiesPerHour[x] = Math.floor(this.customerPerHour[x] * Math.floor(this.AvgCookiePerSale));

        }
    },

    salesResult: function () {
        var parentD2 = document.getElementById('three');
        var h1D1 = document.createElement('h3');
        parentD2.appendChild(h1D1);
        h1D1.textContent = `Dubai`;

        for (var d = 0; d < this.operationHours.length; d++) {
            var parentD1 = document.getElementById('three');
            var ulD1 = document.createElement('li');
            parentD1.appendChild(ulD1);
            ulD1.textContent = `${this.operationHours[d]}:  ${this.cookiesPerHour[d]} cookies`;

        }

    },
    sumlD1: function () {

        this.totalCoockies = this.cookiesPerHour.reduce(function (a, b) { return a + b; }, 0);
        var parentD1 = document.getElementById('three');
        var ulD1 = document.createElement('li');
        parentD1.appendChild(ulD1);
        ulD1.textContent = `Total:  ${this.totalCoockies}`;

    }

}



dubai.customerNum(11, 38);
dubai.avgCookiesPurchasedPerHour();
dubai.salesResult();
dubai.sumlD1();

var paris = {
    operationHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    minHourlyCustomers: 20,
    maxHourlyCustomers: 38,
    AvgCookiePerSale: 2.3,
    customerPerHour: [],
    cookiesPerHour: [],


    customerNum: function () {

        for (var i = 0; i < this.operationHours.length; i++) {

            this.customerPerHour[i] = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
        }

        return [this.customerPerHour[i]];

    },


    avgCookiesPurchasedPerHour: function () {


        for (var x = 0; x < this.operationHours.length; x++) {
            var cookiesPerHour = 1;
            this.cookiesPerHour[x] = Math.floor(this.customerPerHour[x] * Math.floor(this.AvgCookiePerSale));

        }
    },

    salesResult: function () {
        var parentD2 = document.getElementById('four');
        var h1D1 = document.createElement('h3');
        parentD2.appendChild(h1D1);
        h1D1.textContent = `Paris`;

        for (var d = 0; d < this.operationHours.length; d++) {
            var parentD1 = document.getElementById('four');
            var ulD1 = document.createElement('li');
            parentD1.appendChild(ulD1);
            ulD1.textContent = `${this.operationHours[d]}:  ${this.cookiesPerHour[d]} cookies`;

        }

    },
    sumlD1: function () {

        this.totalCoockies = this.cookiesPerHour.reduce(function (a, b) { return a + b; }, 0);
        var parentD1 = document.getElementById('four');
        var ulD1 = document.createElement('li');
        parentD1.appendChild(ulD1);
        ulD1.textContent = `Total:  ${this.totalCoockies}`;

    }
}



paris.customerNum(20, 38);
paris.avgCookiesPurchasedPerHour();
paris.salesResult();
paris.sumlD1();



var lima = {
    operationHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    minHourlyCustomers: 2,
    maxHourlyCustomers: 16,
    AvgCookiePerSale: 4.6,
    customerPerHour: [],
    cookiesPerHour: [],


    customerNum: function () {

        for (var i = 0; i < this.operationHours.length; i++) {

            this.customerPerHour[i] = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
        }

        return [this.customerPerHour[i]];

    },


    avgCookiesPurchasedPerHour: function () {


        for (var x = 0; x < this.operationHours.length; x++) {
            var cookiesPerHour = 1;
            this.cookiesPerHour[x] = Math.floor(this.customerPerHour[x] * Math.floor(this.AvgCookiePerSale));

        }
    },

    salesResult: function () {
        var parentD2 = document.getElementById('five');
        var h1D1 = document.createElement('h3');
        parentD2.appendChild(h1D1);
        h1D1.textContent = `Lima`;

        for (var d = 0; d < this.operationHours.length; d++) {
            var parentD1 = document.getElementById('five');
            var ulD1 = document.createElement('li');
            parentD1.appendChild(ulD1);
            ulD1.textContent = `${this.operationHours[d]}:  ${this.cookiesPerHour[d]} cookies`;

        }

    },

    sumlD1: function () {

        this.totalCoockies = this.cookiesPerHour.reduce(function (a, b) { return a + b; }, 0);
        var parentD1 = document.getElementById('five');
        var ulD1 = document.createElement('li');
        parentD1.appendChild(ulD1);
        ulD1.textContent = `Total:  ${this.totalCoockies}`;

    }
}



lima.customerNum(2, 16);
lima.avgCookiesPurchasedPerHour();
lima.salesResult();
lima.sumlD1();


/// lab07 ///

var operationHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var locations = [];
var hourTotals = [];

var parent = document.getElementById('listsD');
var table1 = document.createElement('table');
table1.setAttribute('id', 'table5');
parent.appendChild(table1);

function salesRenderHeads() {

    var row1 = document.createElement('tr')
    table1.appendChild(row1);
    var head1 = document.createElement('th');
    row1.appendChild(head1);
    head1.textContent = "Location";

    for (var i = 0; i < operationHours.length; i++) {
        var head2 = document.createElement('th');
        row1.appendChild(head2);
        head2.textContent = operationHours[i];
    }

    var head3 = document.createElement('th');
    row1.appendChild(head3);
    head3.textContent = "Daily Location Total";

}
salesRenderHeads();



function Location(locationsNames, minHourlyCustomers, maxHourlyCustomers, AvgCookiePerSale) {
    this.locationsNames = [locationsNames];
    this.minHourlyCustomers = minHourlyCustomers;
    this.maxHourlyCustomers = maxHourlyCustomers;
    this.AvgCookiePerSale = AvgCookiePerSale;
    this.customerPerHour = [];
    this.cookiesPerHour = [];
    locations.push(this);
    console.log(locations);

}

var seattle = new Location('Seattle', 23, 65, 6.3);
var tokyo = new Location('Tokyo', 3, 24, 1.2);
var dubai = new Location('Dubai', 11, 38, 3.7);
var paris = new Location('Paris', 20, 38, 2.3);
var lima = new Location('Lima', 2, 16, 6.3);



Location.prototype.customerNum = function (minHourlyCustomers, maxHourlyCustomers) {

    for (var i = 0; i < operationHours.length; i++) {

        this.customerPerHour[i] = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
    }

}

Location.prototype.calcCookiesPurchasedPerHour = function () {


    for (var x = 0; x < operationHours.length; x++) {
        this.cookiesPerHour[x] = Math.floor(this.customerPerHour[x] * Math.floor(this.AvgCookiePerSale));
    }


}

Location.prototype.calcCookiesPerLocation = function () {

    this.totalCookies = this.cookiesPerHour.reduce(function (a, b) { return a + b; }, 0);
}

Location.prototype.salesRenderRows = function () {

    var row2 = document.createElement('tr');
    table1.appendChild(row2);
    var data1 = document.createElement('td');
    row2.appendChild(data1);
    data1.textContent = this.locationsNames;

    for (var r = 0; r < operationHours.length; r++) {
        var data1 = document.createElement('td');
        row2.appendChild(data1);
        data1.textContent = this.cookiesPerHour[r];
    }

    var data2 = document.createElement('td');
    row2.appendChild(data2);
    data2.textContent = this.totalCookies;
}

for (var z = 0; z < locations.length; z++) {
    locations[z].customerNum(this.minHourlyCustomers, this.maxHourlyCustomers);
    locations[z].calcCookiesPurchasedPerHour();
    locations[z].calcCookiesPerLocation();
    locations[z].salesRenderRows();

}
var row7;
function totalRow() {

    row7 = document.createElement('tr')
    table1.appendChild(row7);
    var data6 = document.createElement('td');
    row7.appendChild(data6);
    data6.textContent = "Totals";


    for (var i = 0; i < operationHours.length; i++) {
        var hourTotals = 0;
        for (var n = 0; n < locations.length; n++) {
            hourTotals += locations[n].cookiesPerHour[i];
        }
        // console.log(hourTotals);     

        var data1 = document.createElement('td');
        row7.appendChild(data1);
        data1.textContent = hourTotals;
    }

    var totalOfTotal = 0;
    for (i = 0; i < locations.length; i++) {
        totalOfTotal += locations[i].totalCookies;
    }
    var data3 = document.createElement('td');
    row7.appendChild(data3);
    data3.textContent = totalOfTotal;
    // console.log(totalOfTotal);







    //    // locations.customerNum();
    //     locations.calcCookiesPurchasedPerHour();
    //     locations.calcCookiesPerLocation();
    //     locations.salesRenderRows();





}
totalRow();


//// lab09////

var branch = document.getElementById("branch");

branch.addEventListener('submit', function () {
    // prevent the defaut behavior for the speificed element
    event.preventDefault();





    var cityLocationValue = event.target.location.value;
    //console.log(cityLocationValue);

    if (cityLocationValue == "") {
        alert('you must inter a city name')

        return false;
    }

    var minValue =parseInt( event.target.min.value);
    
   // console.log(typeof minValue)
    if (minValue < 0) {
        alert('wrong! you must enter a number higher than 0')
    }
    else if (minValue == "") {
        alert('you must enter a number')

        return false;
    }
    // console.log(min);

    var maxValue =parseInt( event.target.max.value);
    
    if (maxValue < 0) {
        alert('wrong! you must enter a number higher than 0')
    }
    else if (maxValue === "") {
        alert('you must enter a number')

        return false;
    }
    else if (maxValue < minValue) {
        alert('you must inter a greater value than the minimum number of customers per hour ')
    }
    //console.log(max);

    var avgValue = parseInt( event.target.avg.value);
    console.log(avgValue);
    if (avgValue < 0) {
        alert('wrong! you must inter a number higher than 0')
    }
    else if (avgValue == "") {
        alert('you must inter a number')

        return false;
    }
   

    var newForm = new Location(
        cityLocationValue,
        minValue,
        maxValue,
        avgValue,
    )
    // newCat.setAge();
    newForm.customerNum(this.minHourlyCustomers, this.maxHourlyCustomers);
    newForm.calcCookiesPurchasedPerHour();
    newForm.calcCookiesPerLocation();
    locations.push(newForm);
    table1.removeChild(row7);
    newForm.salesRenderRows();
    totalRow();
    branch.reset();

});




// console.log(Location.locationsNames);