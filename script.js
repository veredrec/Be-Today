// TODO:
// - hide api keys
// - build server
// - deploy to Heroku

// QUOTE
var quoteUrl =
  'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?';
var quote, author;
var getQuote = function(data) {
  if (!data.quoteAuthor) {
    author = 'Anonymous';
  }
  quote = data.quoteText;
  author = data.quoteAuthor;
  $('#quote').text(quote);
  $('#author').text('- ' + author);
};

$('#btnQuote').click(function() {
  $.getJSON(quoteUrl, getQuote);
});

// if (author === 'Donald Trump' || quote.length > 120) {
//   $.getJSON(quoteUrl, getQuote);
// }

// NAME
$('#nameInput').keyup(function(e) {
  if (e.keyCode == 13) {
    var nameInput = $('#nameInput').val();
    $('#name').text(nameInput);
    $('#nameInput').val('');
    $('#nameInput').attr('class', 'hide-area');
    $('#nameTitle').toggleClass('hide-area');
  }
});

// GOAL
$('#goalInput').keyup(function(e) {
  if (e.keyCode == 13) {
    var nameInput = $('#goalInput').val();
    $('#goal').text(nameInput);
    $('#goalInput').val('');
    $('#goalInput').attr('class', 'hide-area');
    $('#goalTitle').toggleClass('hide-area');
  }
});

// ACTIVITIES
var activities = [
  { activity: 'Go for a short walk', icon: 'fa fa-pagelines' },
  { activity: 'Do some desk stretches', icon: 'fa fa-child' },
  { activity: 'Drink hot chocolate', icon: 'fa fa-coffee' },
  { activity: 'Call a friend', icon: 'fa fa-phone' },
  { activity: 'Watch a TED talk', icon: 'fa fa-users' },
  { activity: 'Read something on Reddit', icon: 'fa fa-desktop' },
  { activity: 'Read your favorive book', icon: 'fa fa-book' },
  { activity: 'Add a nice app to your phone', icon: 'fa fa-mobile' },
  { activity: 'Do some yoga for 10 minutes', icon: 'fa fa-heart' },
  { activity: 'Dance with your favorite song', icon: 'fa fa-music' },
  { activity: 'Write your thoughts in a notebook', icon: 'fa fa-pencil' },
  { activity: 'Open a random Wikipedia page', icon: 'fa fa-file' },
  { activity: 'Make a fruit shake', icon: 'fa fa-apple' },
  { activity: 'Plan a fun trip', icon: 'fa fa-suitcase' },
  { activity: 'Browse the web for 5 minutes', icon: 'fa fa-laptop' },
  { activity: 'Listen to music', icon: 'fa fa-headphones' },
  { activity: 'Play sports', icon: 'fa fa-futbol-o' },
  { activity: 'Write a letter to someone', icon: 'fa fa-envelope' },
  { activity: 'Take a quick shower', icon: 'fa fa-shower' },
  { activity: 'Watch a video on YouTube', icon: 'fa fa-film' },
  { activity: 'Bike for a few minutes', icon: 'fa fa-bicycle' },
  { activity: 'Take a random photo', icon: 'fa fa-photo' },
  { activity: 'Eat a snack', icon: 'fa fa-cutlery' },
  { activity: 'Draw or color something', icon: 'fa fa-paint-brush' },
  { activity: 'Play a short game', icon: 'fa fa-gamepad' }
];

// Shuffle the array to get different results each time
function shuffle(arr) {
  var e = arr.length;
  var c, i;
  // While there remain elements (e) to shuffle
  while (e) {
    // Pick a remaining element
    i = Math.floor(Math.random() * e--);
    // Swap it with the current element
    c = arr[e];
    arr[e] = arr[i];
    arr[i] = c;
  }
  return arr;
}

// call shuffle and create & append elements
$('#btnAct').click(function() {
  $('#list').empty();
  shuffle(activities);
  for (var i = 0; i < 3; i++) {
    var act = $('<li></li>').text(activities[i].activity);
    act.addClass(activities[i].icon);
    act.addClass('list-item');
    $('#list').append(act);
  }
  $('#btnAct').text('Maybe other ideas?');
});

// DATE & TIME
var seconds;
function callTime() {
  var currentDate = new Date().toLocaleString().split(',');
  var date = currentDate[0];
  var t = currentDate[1].split(':');
  var time = t[0] + ':' + t[1] + ' ' + t[2].split(' ')[1];
  seconds = t[0] + ':' + t[1] + ' ' + t[2].split(' ')[0];
  $('#date').text(date);
  $('#time').text(time);
}
callTime();
setInterval(callTime, 5000);
// PLACE & WEATHER (weather requires API Key - removed for now)
var addressUrl = 'http://ip-api.com/json';
var areaWeather, areaName;
// var tempF, tempC;

// fetch the place by IP address
fetch(addressUrl)
  .then(resp => resp.json())
  .then(function(data) {
    // areaWeather = data.region + '/' + data.city;
    areaName = data.city + ', ' + data.region;
    $('#place').text(areaName);
  });
