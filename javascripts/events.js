// Filter Based on Button Click - Time of Day

const filterButtons = (e) => {
  const button = $(e.target).html();
  console.log('button: ', button);
  if (button === 'Morning') {
    $('.locationsDiv .locationCard').not('#Morning').toggle();
  } else if (button === 'Afternoon') {
    $('.locationsDiv .locationCard').not('#Afternoon').toggle();
  } else if (button === 'Evening') {
    $('.locationsDiv .locationCard').not('#Evening').toggle();
  } else if (button === 'After Dark') {
    $('.locationsDiv .locationCard').not('#After').toggle();
  } else (console.log('WHAT???'));
};

// Filter Based on Location Serach

// Binding
const bindEvents = () => {
  $('.btn').on('click', filterButtons);
};

module.exports = bindEvents;
