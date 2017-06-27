$(document).ready(function() {

		// The number of background images in the folder backgrounds/images/	
		var numBackgrounds = 7;

		var rndNum = Math.ceil(Math.random() * numBackgrounds);

		// Ensure that zero is not in the random number output
		if (rndNum === 0) {
			rndNum = rndNum + 1;
		}

		// Set the background image of the center main div
		$('#center').css('background-image', 'url(backgrounds/images/background' + rndNum + '.jpg)');		
		
		var imageDescriptionToload = 'backgrounds/descriptions/description' + rndNum + '.html';
		$('#bgdescription').load(imageDescriptionToload);
});

