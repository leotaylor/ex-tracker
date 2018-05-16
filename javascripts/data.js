// const loadEx = require('./ex');
// const loadLocations = require('./locations');
const print = require('./dom');
// const bindEvents = require('./events');

// const whenExLoads = (data) => {
//   $('.exDiv').append(print.writeEx(data.crazyEx));
//   bindEvents();
// };

// const whenExDontLoad = (error) => {
//   console.error('failure');
// };

// const whenLocationsLoad = (data) => {
//   console.log('locationData: ', data);
//   $('.locationsDiv').append(print.writeLocal(data.Locations));
// };

// const initializer = () => {
//   loadEx(whenExLoads, whenExDontLoad);
//   loadLocations(whenLocationsLoad, whenExDontLoad);
// };

const exJSON = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/ex.json')
      .done((data) => {
        resolve(data.crazyEx);
      })
      .fail((err) => {
        reject('you suck at this', err);
      });
  });
};

const locationsJSON = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/locations.json')
      .done((data) => {
        resolve(data.Locations);
      })
      .fail((err) => {
        reject('you suck at this', err);
      });
  });
};

const printAllData = () => {
  exJSON().then((results) => {
    print.writeEx(results);
    return locationsJSON();
  }).then((results) => {
    print.writeLocal(results);
  }).catch((error) => {
    console.error('error', error);
  });
};

const initializer = () => {
  printAllData();
};

module.exports = initializer;
