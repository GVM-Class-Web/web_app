// Call client APIs youtube
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}
// call client APIs youtube ApiKey
function onYouTubeApiLoad() {
    gapi.client.setApiKey('AIzaSyCfhLS283GXyOTtfwlZhLWBJsPuKjIOLvI');
}
// call when the searching
function searching() {
    var query = document.getElementById('query-youtube').value;
    // create a search.list() APIs call.
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        type: "video",
        q: query
    });

    // execute and get response
    request.execute(onSearchResponse);
}
// trigger by this line: request.execute(onSearchResponse);
function onSearchResponse(response) {
    console.log("Search response")
    console.log(response.result);
    
    var responseString = JSON.stringify(response, '', 2);
    var datass = JSON.parse(responseString);
    console.log(datass);
    
    var appendText = '';
    var limitVideo = 1;
    for (var i = 0; i < limitVideo; i++) {
        console.log(datass.items[i].id.videoId);
        var video = datass.items[i].id.videoId;
        appendText += '<div class="video-yt" id="del-yt"><iframe class="video w100" width="100%" height="360" src="//www.youtube.com/embed/' + video + '" frameborder="0" allowfullscreen></iframe></div>'
    }
    document.getElementById('response-youtube').innerHTML += appendText;   
}

// function when onfocus in search youtube
function clearElement(){
    var query = document.getElementById('query-youtube').value;
    // delete element with id name 'response-youtube' if condition value null
    if (query == ""){
        console.log("element dihapus");
        var resObj =  document.getElementById('del-yt');
        resObj.remove();
    } 
}