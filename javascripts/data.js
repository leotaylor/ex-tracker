const loadEx = require('./ex');
const loadLocations = require('./locations');
const print = require('./dom');

const whenExLoads = (data) => {
  console.log('exData: ', data);
  $('.exDiv').append(print.writeEx(data.crazyEx));
  // $('.locationsDiv').append(print.writeLocal(data.Locations));
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
