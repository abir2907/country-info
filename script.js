'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v2/name/india');
request.send();
