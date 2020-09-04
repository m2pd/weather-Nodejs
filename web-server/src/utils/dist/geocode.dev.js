"use strict";

geocode('Boston', function (error, data) {
  console.log('Error', error);
  console.log('Data', data);
});