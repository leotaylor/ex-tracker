const loadEx = require('./ex');
const writeEx = require('./dom');

const whenExLoads = (data) => {
  console.log('exData: ', data);
  $('.exDiv').append(writeEx(data.crazyEx));
};

const whenExDontLoad = (error) => {
  console.error('failure');
};

const initializer = () => {
  loadEx(whenExLoads, whenExDontLoad);
};

module.exports = initializer;
