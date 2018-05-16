const exDiv = $('.exDiv');
const locationDiv = $('.locationsDiv');

const writeEx = (crazyEx) => {
  let exString = '';
  crazyEx.forEach((ex) => {
    exString +=  `<div class="exCard col-xs-4" id="${ex.locations}">`;
    exString +=    `<div class="caption">`;
    exString +=      `<img src="${ex.imageUrl}">`;
    exString +=      `<h2 id="thumbnail-label">${ex.Name}</h2>`;
    exString +=      `<span class="age">${ex.Age}</span>`;
    exString +=    `</div>`;
    exString +=       `<p>${ex.Flaws}</p>`;
    exString +=  `</div>`;
  });
  printToDom(exString);
  // return exString;
};

const writeLocal = (Locations) => {
  let domString = '';
  Locations.forEach((location) => {
    domString += `<div class="locationCard col-sm-4" id="${location.time}">`;
    domString +=  `<div class="thumbnail">`;
    domString +=    `<img class="locationImage" src="${location.locationImage}" width=70% height=50%`;
    domString +=    `<div class="caption">`;
    domString +=      `<h2 class="actualLocation">${location.Name}</h2>`;
    domString +=      `<p>${location.locationAddress}</p>`;
    domString +=      `<h3>${location.time}</h3>`;
    domString +=    `</div>`;
    domString +=   `</div>`;
    domString +=  `</div>`;
  });
  // return domString;
  printLocations(domString);
};

const printToDom = (exz) => {
  exDiv.append(exz);
};

const printLocations = (locationz) => {
  locationDiv.append(locationz);
};

module.exports = {
  writeEx,
  writeLocal,
};
