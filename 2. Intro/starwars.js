
// Url dari SWAPI
let urlSwapi = 'https://swapi.co/api/people/';

//Inisialisasi final Url
let finalUrl;

//inisialisasi button
let submitBtn = document.getElementById('submitBtn');


//Data yang akan ditampilin di html
let nameData = document.getElementById('name');
let genderData = document.getElementById('gender');
let heightData = document.getElementById('height');
let massData = document.getElementById('mass');
let birthData = document.getElementById('birth');
let filmData = document.getElementById('film');




submitBtn.addEventListener('click',requestToSwapi);

function requestToSwapi() {

	//
	var text;

	//Inisialisasi field inputan
	let inputID = parseInt(document.getElementById('inputID').value);
	
	if(isNaN(inputID) || inputID < 1 || inputID > 87){
		text = "Input not valid";
		nameData.innerHTML = text; 
		genderData.innerHTML = "";
		heightData.innerHTML = "";
        massData.innerText = "";
        birthData.innerText = "";
	}
	else{
		getInput(inputID);

		fetch(finalUrl)
	  .then(function(response) {
	    return response.json();
	  })
	  .then(function(myJson) {
	    console.log(myJson);

	    //untuk get data yang ada di myJson
	    getData(myJson);
	  }); 
	}	 
}

function getData(data){
	nameData.innerText = data.name; 
	genderData.innerText = "Gender: "+data.gender;
	heightData.innerText = "Height: "+data.height+"cm";
    massData.innerText = "Mass: "+data.mass;
    birthData.innerText = "Birth Year: "+data.birth_year;


    //Untuk Munculin List Film
    var appendText = ''
    var limitVideo = 20;

    for (var i = 0; i < limitVideo; i++) {
        fetch(data.films[i])
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                console.log(myJson);

                //untuk get data yang ada di myJson
                filmData.innerText += "Film: "+ myJson.title + "\n";

            });
    }
}



function getInput(input){
	finalUrl = urlSwapi+input+"/";

	return finalUrl;
}


