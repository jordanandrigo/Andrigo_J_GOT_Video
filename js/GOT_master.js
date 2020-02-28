// JavaScript Document

(() => {
	// variables at the top -> elemtns on the page we need to work with
	let sigilButtons = document.querySelectorAll('.sigilContainer'),
		// this will go and get the buttons at the bottom and create a NODE LIST
		lightBox = document.querySelector('.lightbox'),
		gotVideo = lightBox.querySelector('video'),
		closeLightBox = lightBox.querySelector(".lightbox-close");

	// events go in the middle
	function showLightBox() {
		//pop open a lightbox here and show some content
		// start with a video 
		//debugger;

		lightBox.classList.add('show-lightbox');
	}

	function hideLightBox() {
		lightBox.classList.remove("show-lightbox");

		gotVideo.pause();
		gotVideo.currentTime = 0;
	}


		// add a click event to the sigilButtons
		sigilButtons.forEach(button => button.addEventListener("click", showLightBox))

		// add an event handler for the lightbox close button

		closeLightBox.addEventListener("click", hideLightBox)

})();