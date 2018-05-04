const writeEx = (crazyEx) => {
  let exString = '';
  exString += `<div class="container-fluid">`;
  crazyEx.forEach((ex) => {
    exString +=  `<div class="exCard col-sm-offset-5">`;
    exString +=    `<div class="caption">`;
    exString +=      `<img src="${ex.imageUrl}">`;
    exString +=      `<h2 id="thumbnail-label">${ex.Name}</h2>`;
    exString +=      `<span class="age">${ex.Age}</span>`;
    exString +=    `</div>`;
    exString +=       `<p>${ex.Flaws}</p>`;
    exString +=  `</div>`;
    exString += `</div>`;
  });
  return exString;
};

const writeLocal = (Locations) => {
  let domString = '';
  Locations.forEach((location) => {
    domString += `<div class="locationCard col-sm-4" id="${location.time}">`;
    domString +=  `<div class="thumbnail">`;
    domString +=    `<img src="${location.locationImage}" width="40%"`;
    domString +=    `<div class="caption">`;
    domString +=      `<h2>${location.Name}</h2>`;
    domString +=      `<p>${location.locationAddress}</p>`;
    domString +=      `<h3>${location.time}</h3>`;
    domString +=    `</div>`;
    domString +=   `</div>`;
    domString +=  `</div>`;
  });
  return domString;
};

module.exports = {
  writeEx,
  writeLocal,
};
