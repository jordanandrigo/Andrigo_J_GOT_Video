(() => {

//variables at the top -> elements on the page we need to work with
let sigilButtons = document.querySelectorAll(".sigilContainer");
	lightBox = document.querySelector(".lightbox");
	closeLightBox = lightBox.querySelector(".lightbox-close");


//events go in the middle
function showLightbox() {
	//pop open a lightbox here and show some content
	//start with a video
	//debugger;

	lightBox.classList.add("show-lightbox");
}

function hideLightBox() {
	lightBox.classList.remove("show-lightbox");
}

// add a click event to the sigilButtons
sigilButtons.forEach(button => button.addEventListener("click", showLightbox))

//add and event handler for the lightbox close button
closeLightBox.addEventListener("click", hideLightBox);

})();