$(document).ready(function() {
  $('#show-bikes').click(function() {

    var city = $('#location').val();
    $('#city').text("The city you have chosen is " + city + ". The stolen bikes here:");
    $('#showBikes').empty();
    $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=' + city + '&distance=10&stolenness=proximity ', function(response) {
      for (i = 0; i < response.bikes.length; i++) {
        var date = new Date(response.bikes[i].date_stolen*1000);
        var formattedTime = date.toDateString();

        $('#showBikes').append("<li>" + response.bikes[i].title + ", " + response.bikes[i].frame_colors + ", Location: " + response.bikes[i].stolen_location + ", Reported missing: " + formattedTime + "</li>");
      };
    });
  });
});
