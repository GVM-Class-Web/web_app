// request data from APIs reqres
var reqJSON = 'https://reqres.in/api/users?page=4',
	request = new XMLHttpRequest();
request.open('GET', reqJSON);
request.responseType = 'json';
request.send();

// onload data
request.onload = function() {
    var dataReqres = request.response,
		data = dataReqres.data,
		textHtml = '';
    // loops data length APIs
	for (let i = 0; i < data.length; i++) {
        // initial variable
		var first = data[i].first_name,
			last  = data[i].last_name,
			ava   = data[i].avatar;
        
        // draw element
        textHtml += '<div class="sec-grid" id="sec-grid-1"><img src="'+ ava +'"><p class="font-roboto white">'+ first +' '+ last +'</p></div>';

		document.getElementById('section-grid-content').innerHTML = textHtml;

		// test event click images avatar
		var avaSelection = document.getElementsByClassName('avatar');
		for(let i = 0; i < avaSelection.length; i++) {
			avaSelection[i].addEventListener("click", function() {
				console.log("index clicked : " + i);
			})
		}

	}
}
