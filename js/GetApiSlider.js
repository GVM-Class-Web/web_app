var req = new XMLHttpRequest();
//request.setRequestHeader('client-id', 'b1a1671d08be9cf');
req.open('GET', 'https://api.imgur.com/3/gallery/hot/viral/0.json', true);
req.setRequestHeader('Authorization','Client-ID cd085b89809502c');

req.onload = function () {
    console.log("here");
    if (req.status >= 200 && req.status < 400) {
        var data = JSON.parse(req.responseText);
        console.log("success");
        console.log(data);
        var appendText = ''
        var item = 3;
        for (var i = 0; i < item; i++) {
            var imageLink = data.data[i].link;
            var linkParts = imageLink.split('.');
            var extension = linkParts[linkParts.length - 1];
            console.log(extension);
            if (i == 0) {
                appendText += '<div class="mySlides fade" style="" >'
            } else {
                appendText += '<div class="mySlides fade" style="display:none" >'
            }
            appendText += '<div class="numbertext">' + i + ' / 3</div>'
            if (extension == 'gif' || extension == 'jpeg' || extension == 'jpg' || extension == 'png') {
                console.log("include");
                appendText += '<img src="' + data.data[i].link + '" style="width:100%">'
            } else
            {
                appendText += '<img src="' + data.data[i].images[0].link + '" style="width:100%">'
            }
            appendText += '</div>'
        }
        document.getElementById('slider').innerHTML += appendText;
        console.log(data);
    } else {
        console.log("Unable to load the API Imgur");
    }
};

req.onerror = function () {
    console.log("Request Failed");
};

req.send();

