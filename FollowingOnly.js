// Wait for the document to finish loading
if (document.readyState === "complete") {
	// The document has finished loading, so check if the element exists
	let element = document.getElementsByClassName("css-4rbku5 css-18t94o4 css-1dbjc4n r-1awozwy r-1loqt21 r-6koalj r-eqz5dr r-16y2uox r-1h3ijdo r-1777fci r-s8bhmr r-1ny4l3l r-1qhn6m8 r-i023vh r-o7ynqc r-6416eg")[1];
	if (element) {
		// The element exists, so do something with it
		console.log("[Following only] Element has loaded");
		DoStuff(element);
	} else {
		// The element doesn't exist yet
		console.log("[Following only] Element hasn't loaded yet");
	}
} else {
	// The document is still loading, so attach a listener to the window.onload event
	window.addEventListener("load", function () {
		let element = document.getElementsByClassName("css-4rbku5 css-18t94o4 css-1dbjc4n r-1awozwy r-1loqt21 r-6koalj r-eqz5dr r-16y2uox r-1h3ijdo r-1777fci r-s8bhmr r-1ny4l3l r-1qhn6m8 r-i023vh r-o7ynqc r-6416eg")[1];
		if (element) {
			// The element exists, so do something with it
			console.log("[Following only] Element has loaded");
			DoStuff(element);
		} else {
			// The element doesn't exist yet
			console.log("[Following only] Element hasn't loaded yet");
		}
	});
}

function DoStuff(ele) {
	if (ele.getAttribute("aria-selected") === "true") {
		console.log("[Following only] following already selected");
	} else {
		console.log("[Following only] elon, stop");
		ele.click();
	}
}