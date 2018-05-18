const exDiv = $('.exDiv');
const locationDiv = $('.locationsDiv');

const writeEx = (crazyEx) => {
  let exString = '';
  crazyEx.forEach((ex) => {
    exString +=  `<div class="exCard col-xs-4" id="${ex.Name}">`;
    exString +=    `<div class="caption">`;
    exString +=      `<img src="${ex.imageUrl}">`;
    exString +=      `<h2 id="thumbnail-label">${ex.Name}</h2>`;
    exString +=      `<span class="age">${ex.Age}</span>`;
    exString +=    `</div>`;
    exString +=     `<p>${ex.Flaws}</p>`;
    exString +=     `<button type="button" class="btn btn-danger exBtn">Click Me</button>`;
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

const newDom = (singleEx) => {
  let singleString = '';
  singleString += `<button type="button" id="backBtn"  value="Refresh Page" onClick="window.location.reload()" class="btn btn-default" aria-label="Left Align">`;
  singleString +=   `<span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>`;
  singleString += `</button>`;
  singleString +=  `<div class="exCard col-xs-4" id="${singleEx.locations}">`;
  singleString +=    `<div class="caption">`;
  singleString +=      `<img src="${singleEx.imageUrl}">`;
  singleString +=      `<h2 id="thumbnail-label">${singleEx.Name}</h2>`;
  singleString +=      `<span class="age">${singleEx.Age}</span>`;
  singleString +=    `</div>`;
  singleString +=       `<p>${singleEx.Flaws}</p>`;
  singleString +=  `</div>`;
  replaceDomEx(singleString);
};

const singleLocationDom = (singleLocation) => {
  let domString = '';
  singleLocation.forEach((location, ex) => {
    if (location.locationId === ex.locations) {
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
    };
  });
  replaceLocalDom(domString);
};

const replaceLocalDom = (loc) => {
  locationDiv.html(loc);
};

const replaceDomEx = (rex) => {
  exDiv.html(rex);
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
  newDom,
  singleLocationDom,
};
