// Filter Based on Button Click - Time of Day

const filterButtons = (e) => {
  const button = $(e.target).html();
  $('.locationsDiv .locationCard').show();
  if (button === 'Morning') {
    $('.locationsDiv .locationCard').not('#Morning').toggle();
  } else if (button === 'Afternoon') {
    $('.locationsDiv .locationCard').not('#Afternoon').toggle();
  } else if (button === 'Evening') {
    $('.locationsDiv .locationCard').not('#Evening').toggle();
  } else if (button === 'After Dark') {
    $('.locationsDiv .locationCard').not('#After-Dark').toggle();
  }
};

// Filter Based on Location Serach

const enterKey = () => {
  const jSearch = $('.search').val().toLowerCase();
  // if (e.which === 13) add e above if you want to user enter key{
  filterSearch(jSearch);
  // };
};

const filterSearch = (input) => {
  // console.log('Search: ', input);
  $('.actualLocation').each((index, location) => {
    const locationString = $(location).text().toLowerCase();
    // console.log('locationString: ', locationString);
    if (locationString.includes(input)) {
      $(location).closest('.locationCard').toggle(true);
    } else $(location).closest('.locationCard').toggle(false);
  });
};

// Binding
const bindEvents = () => {
  $('.btn').on('click', filterButtons);
  $('.search').on('keyup', enterKey);
};

module.exports = bindEvents;
