function Bike() {
}

Bike.prototype.getBikes = function(city, resultsNumber, miles) {
  console.log("Working!");
  $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=' + resultsNumber + '&location=' + city + '&distance=' + miles + '&stolenness=proximity').then(function(response) {
    for (i = 0; i < response.bikes.length; i++) {
      var date = new Date(response.bikes[i].date_stolen*1000);
      var formattedTime = date.toDateString();

      $('#showBikes').append("<li>" + response.bikes[i].title + ", " + response.bikes[i].frame_colors + ", Location: " + response.bikes[i].stolen_location + ", Reported missing: " + formattedTime + "</li>");
    }
  })
  .fail(function(error) {
    $('#showBikes').text(error.responseJSON.message);
  });
}

exports.bikeModule = Bike;
