
var Trackster = {};
const API_KEY = '186166f55822adc17502c6cbbb8d0e26';

/*On load of document */
$(document).ready(function() {
  $('#search-button').click(function() {
    //console.log($('#search-input').val());
    Trackster.searchTracksByTitle($('#search-input').val());
  });
});

/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {
  
};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
  $.ajax({
      url: 'http://ws.audioscrobbler.com/2.0/?method=track.search&track=' + title + '&api_key=' + API_KEY + '&format=json' ,
      success: function(data) {
        console.log(data);
      }
    });
};
