/*  
Javascript syntax notes
*/


/////////////////////
//variable functions
/////////////////////

var x = "John"; // typeof x will return primitive string
var y = new String("John"); // typeof y will return object
var obj = {firstName:"aple"};	//object
var cars = [				//array and typeof object
    "Saab",
    "Volvo",
    "BMW"
];

var a;	//global
b;		//global window
function myFunction() {
    var carName = "Volvo";		//local
    carName2 = "Audi"			//global


}


str.indexOf();  //2nd argument for start position
str.search();   //regex
str.slice(start, end)
str.replace("a", "b")
str.charAt(0)
var array = str.split("");	//at every character

// == compare if equal value
// === compare if equal objects and value
var x = new String("John");             
var y = new String("John");
// (x == y) is false because x and y are different objects

var a = parseInt("19");

var array = [];
.join // ->string
.pop
.push
.splice()	//add new into array

.sort() 	//strings
.sort(function(a, b){return a - b});	//numbers
return Math.max.apply(null, arr)
cars.sort(function(a, b){return a.year - b.year});	//arrays of objects according numerical property
cars.sort(function(a, b){						//array with strings
        var x = a.type.toLowerCase();
        var y = b.type.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
    });



////////////////////
//Objects
/////////////////////
JS objects are variables containing variables
Objects are mutable: They are addressed by reference, not by value.

var obj = {firstName:"aple"};	//obj
obj.firstName;
obj["firstName"]



/////////////////////
//functions
/////////////////////
function addNums(n1, n2){
	return n1 + n2;
}

fullName: function() {
        return this.firstName + " " + this.lastName;
    }
person.fullName.call(otherObject)	//With call(), you can use a method belonging to another object.

.apply()	//array

/////////////////////
//Events
/////////////////////
var button = document.getElementById("openModalButton");
button.onclick = function(){			//Declare new function that calls other function
	modal.style.display = "block";
}


onmouseover="mOver(this)"
function mOver(obj) {
    obj.innerHTML = "Thank You"
}

element.addEventListener("click", function(){ alert("Hello World!"); });

//DOM manipulation
<p id="demo"> </p>
document.getElementById(id).onclick = function(){code}
document.getElementById("demo").innerHTML = car;
document.getElementsByTagName('p')
document.getElementsByClassName("error-message")[0];

<button type="button" onclick="loadDoc()">Change Content</button>	//call function from html

div1.getAttribute("align")	//returns e.g. right
document.getElementById("myImage").src = "landscape.jpg";	//attribute

document.getElementById(id).style.property	//css
document.getElementById("p2").style.color = "blue";			//property

//nodes
var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);			//node
var element = document.getElementById("div1");
element.appendChild(para);

var x = document.getElementById("frm1");
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value + "<br>";
    }



 function validateDescLength(){
	if(inputField.validity.tooLong){
		alert("too long");
	}
}