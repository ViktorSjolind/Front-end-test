var modal = document.getElementById("loginModal");
var button = document.getElementById("openModalButton");
var closeButton = document.getElementsByClassName("close")[0];

button.onclick = function(){
	modal.style.display = "block";
}

closeButton.onclick = function(){
	modal.style.display = "none";
}

window.onclick = function(event){
	if(event.target == modal){
		modal.style.display = "none";
	}
}