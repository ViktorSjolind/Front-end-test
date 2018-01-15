
/*
When exchanging data between a browser and a server, the data can only be text.

JSON is text, and we can convert any JavaScript object into JSON, and send JSON to the server.

We can also convert any JSON received from the server into JavaScript objects.

*/


var myObj = {name:"John", age:32, city:"New York"};
var myJSON = JSON.stringify(myObj); // returns myObj with " "

console.log(myObj);
console.log(myJSON);
console.log(JSON.parse(myJSON));


var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);

        for(x in myObj){
        	document.getElementById("json-result").innerHTML += myObj[x].id;
        }
        
    }
};

xmlhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
xmlhttp.send();