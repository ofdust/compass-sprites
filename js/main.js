function scrollTop() {
	jQuery('html,body').animate({scrollTop:0},500);
}

var elevator = document.getElementById("up");
elevator.addEventListener("click", scrollTop, false);