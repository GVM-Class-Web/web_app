var request = new XMLHttpRequest();
request.open('GET', 'https://reqres.in/api/users', true);

request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        // Success!
        var product = JSON.parse(request.responseText);
        console.log(product);
        var appendText = ''
        var item = 3;
        for (var i = 0; i < item; i++) {
            var modal = "modal" + i;
            var imageTrigger = "imageTrigger" + 1;
            var image = "image" + i;
            var caption = "caption" + i;
            var close = "close" + i;
            appendText += '<img id="' + imageTrigger + '" src="' + product.data[i].avatar + '" onclick="return popupImage(\'' + modal + '\', \'' + imageTrigger + '\', \'' + image + '\', \'' + caption + '\', \'' + close + '\')" class="image-grid myImg">'
            appendText += '<div id="' + modal + '" class="modal">'
            appendText += '<span class="' + close + ' close">&times;</span>'
            appendText += '<img class="modal-content" id="' + image + '">'
            appendText += '<div id="' + caption + '">'+product.data[i].first_name+'</div>'
            appendText += '</div>'
        }
        document.getElementById('product-item').innerHTML += appendText;
        //console.log(data);
    } else {
        console.log("Unable to load API");
        // We reached our target server, but it returned an error

    }
};

request.onerror = function () {
    console.log("request error");
};

request.send();

