const loadEx = require('./ex');
const loadLocations = require('./locations');
const print = require('./dom');
const bindEvents = require('./events');

const whenExLoads = (data) => {
  console.log('exData: ', data);
  $('.exDiv').append(print.writeEx(data.crazyEx));
  bindEvents();
};

const whenExDontLoad = (error) => {
  console.error('failure');
};

const whenLocationsLoad = (data) => {
  console.log('locationData: ', data);
  $('.locationsDiv').append(print.writeLocal(data.Locations));
};

const initializer = () => {
  loadEx(whenExLoads, whenExDontLoad);
  loadLocations(whenLocationsLoad, whenExDontLoad);
};

module.exports = initializer;
