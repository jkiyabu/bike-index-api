var Bike = require('./../js/bike.js').bikeModule;

$(document).ready(function() {
  var bike = new Bike();

  $('#show-bikes').click(function() {
    var city = $('#location').val();
    var resultsNumber = $('#results-number').val();
    var miles = $('#miles').val();
    $('#city').text("The city you have chosen is " + city + ". The stolen bikes here:");
    $('#showBikes').empty();
    bike.getBikes(city, resultsNumber, miles);
  });
});
