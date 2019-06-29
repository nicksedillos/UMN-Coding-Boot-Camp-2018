var topics = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

var images = [
	staticURL = "",
	animatedURL = "",
	rating = "",
];

function createButtons(topic) {
	$("nav").append("<button data-term=" + topic + ">" + topic + "</button>");
};

topics.forEach(createButtons);

$("button").on("click", function(){
	var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=RKDA6rjndjzfpz8Cqiu81sanYTtcJgEL&limit=10&rating=PG-13&q=" + this.dataset.term;
	$.ajax({
		url: queryURL,
		method: "GET"
	})
	.then(function(response) {
		console.log(response);
		// Pull out 10 fixed_height_small_still URLs and push them to an array. Assign each with state: "static".
		// Log the URL array to console.
		// Prepend the selected images to <main>.
		
	// If image is static, on click the fixed_height_small_still URL should be replaced with fixed_height_small (an animation). Change state to "animated".
	// If image is animated, on click switch the URL back and change state to animated.
		var animationURL = response.data[0].images.fixed_height_small_still.url;
		console.log(animationURL);
		$("main").prepend("<img src=" + animationURL + ">");
	})
});

/*
Instructions
	3. When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
	4. When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.
	5. Under every gif, display its rating (PG, G, so on). This data is provided by the GIPHY API. Only once you get images displaying with button presses should you move on to the next step.
	6. Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page.
	7. Deploy your assignment to Github Pages.
Bonus Goals
	1. Ensure your app is fully mobile responsive.
	2. Allow users to request additional gifs to be added to the page. Each request should ADD 10 gifs to the page, NOT overwrite the existing gifs.
	3. List additional metadata (title, tags, etc) for each gif in a clean and readable format.
	4. Include a 1-click download button for each gif, this should work across device types.
	5. Integrate this search with additional APIs such as OMDB, or Bands in Town. Be creative and build something you are proud to showcase in your portfolio
	6. Allow users to add their favorite gifs to a favorites section. This should persist even when they select or add a new topic. If you are looking for a major challenge, look into making this section persist even when the page is reloaded (via localStorage or cookies).
*/