const writeEx = (crazyEx) => {
  let exString = '';
  exString += `<div class="container-fluid">`;
  crazyEx.forEach((ex) => {
    exString +=  `<div class="exCard col-sm-7 col-sm-offset-5">`;
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

module.exports = writeEx;
