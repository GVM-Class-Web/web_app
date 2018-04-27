var reqImg = new XMLHttpRequest();

reqImg.open('GET', 'https://api.imgur.com/3/gallery/hot/viral/0.json', true);
reqImg.setRequestHeader('Authorization','Client-ID a3446a1f8a504ff');

reqImg.onload = function () {
    console.log("Starting connect");
    if (reqImg.status >= 200 && reqImg.status < 400) {
        console.log("Connection success");
        console.log(data);
        var data = JSON.parse(reqImg.responseText),
            appendText = '',
            item = 3;

        for (var i = 0; i < item; i++) {
            var imageLink = data.data[i].link,
                linkParts = imageLink.split('.'),
                extension = linkParts[linkParts.length - 1],
                image = data.data[i].images[0].link;
                
            console.log(extension);
        
            // part where div displaying 
            if (i == 0) {
                appendText += '<div class="mySlides fade-none">'
            } else {
                appendText += '<div class="mySlides fade-none" style="display:none" >'
            }
            // part where image draw in div  
            if (extension == 'gif' || extension == 'jpeg' || extension == 'jpg' || extension == 'png') {
                console.log("attach image");
                appendText += '<img src="' + imageLink + '" id="img-slide">'
            } else
            {
                appendText += '<img src="' + image + '" id="img-slide">'
            }
            appendText += '</div>'
        }
        document.getElementById('slider').innerHTML += appendText;
        console.log(data);
    } else {
        console.log("Cannot connect to APIs");
    }
};

reqImg.onerror = function () {
    console.log("Request Failed");
};

reqImg.send();

