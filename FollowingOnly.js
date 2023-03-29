/* 	FollowingOnly a extention that forces twitter to only load into the Following tab
	Copyright(C) 2023 Luramoth

	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU Affero General Public License as published
	by the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU Affero General Public License for more details.

	You should have received a copy of the GNU Affero General Public License
	along with this program.  If not, see <https://www.gnu.org/licenses/>. */


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