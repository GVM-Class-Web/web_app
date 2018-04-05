// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}
// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    gapi.client.setApiKey('AIzaSyC1yqEEJXANboa5bZV5k_K-1sBy9urStg8');
}

// Called when the search button is clicked in the html code
function search() {
    var query = document.getElementById('query').value;
    // Use the JavaScript client library to create a search.list() API call.
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        type: "video",
        q: query
    });
    // Send the request to the API server, call the onSearchResponse function when the data is returned
    request.execute(onSearchResponse);
}
// Triggered by this line: request.execute(onSearchResponse);
function onSearchResponse(response) {
    console.log("Search response")
    console.log(response.result);
    var responseString = JSON.stringify(response, '', 2);
    var datass = JSON.parse(responseString);
    console.log(datass);
    var appendText = ''
    var limitVideo = 3;
    for (var i = 0; i < limitVideo; i++) {
        console.log(datass.items[i].id.videoId);
        appendText += '<iframe class="video w100" width="100%" height="360" src="//www.youtube.com/embed/' + datass.items[i].id.videoId + '" frameborder="0" allowfullscreen></iframe>'
    }
    document.getElementById('response').innerHTML += appendText;
}