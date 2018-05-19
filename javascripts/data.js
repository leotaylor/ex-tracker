const print = require('./dom');

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

const singleEx = () => {
  let ex = {};
  return exJSON().then((exs) => {
    ex = exs[0];
    return locationsJSON();
  }).then((locals) => {
    let matching = [];
    matching = locals.filter((local) => {
      return ex.locations.includes(local.locationId);
    });
    ex.locationInfo = matching;
    console.log(ex);
    return Promise.resolve(ex);
  });
};

const singleEx1 = () => {
  let ex = {};
  return exJSON().then((exs) => {
    ex = exs[1];
    return locationsJSON();
  }).then((locals) => {
    let matching = [];
    matching = locals.filter((local) => {
      return ex.locations.includes(local.locationId);
    });
    ex.locationInfo = matching;
    return Promise.resolve(ex);
  });
};

const singleEx2 = () => {
  let ex = {};
  return exJSON().then((exs) => {
    ex = exs[2];
    return locationsJSON();
  }).then((locals) => {
    let matching = [];
    matching = locals.filter((local) => {
      return ex.locations.includes(local.locationId);
    });
    ex.locationInfo = matching;
    return Promise.resolve(ex);
  });
};

const initializer = () => {
  printAllData();
};

module.exports = {
  initializer,
  singleEx,
  singleEx1,
  singleEx2,
};

// old Way

// const loadEx = require('./ex');
// const loadLocations = require('./locations');

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
