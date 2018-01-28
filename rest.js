
/*
When exchanging data between a browser and a server, the data can only be text.

JSON is text, and we can convert any JavaScript object into JSON, and send JSON to the server.

We can also convert any JSON received from the server into JavaScript objects.

*/

var ajaxButton = document.getElementById("ajax-button");

var myObj = {name:"John", age:32, city:"New York"};
var myJSON = JSON.stringify(myObj); // returns myObj with " "

console.log(myObj);
console.log(myJSON);
console.log(JSON.parse(myJSON));


var xmlhttp = new XMLHttpRequest();


//when the request receives an answer
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);

        document.getElementById("json-result").innerHTML += myObj.results[0].geometry.location.lat;

        /*
        for(x in myObj){
        	document.getElementById("json-result").innerHTML += myObj[3].title;
        	

        }
        */
        
    }
};

ajaxButton.onclick = function(){
	//specifies type of request
	xmlhttp.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
	//sends the request 
	xmlhttp.send();

}


function requestCoordinates(){
	xmlhttp.open("GET", "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyAXeRS7VuB6IDDkO6VxRzU9m1W1m0wi1sk", true);
	xmlhttp.send();
}


function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: {lat: 60.453908, lng: 22.253019}
  });
  var geocoder = new google.maps.Geocoder();

  document.getElementById('submit').addEventListener('click', function() {
    geocodeAddress(geocoder, map);
  });
}

function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById('address').value;
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === 'OK') {
      resultsMap.setCenter(results[0].geometry.location);
      alert(results[0].geometry.location);
      var coordinatesBox = document.getElementById("coordinates");
      coordinatesBox.innerHTML = "le koordinata: " + results[0].geometry.location
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}