function greet() {
	window.alert("Hello everyone!");
}

function init() {
	let images = document.getElementById("container").getElementsByTagName("img");
	images[1].src="flower2.png";
	images[3].src="flower2.png";
	
	
	let image = document.createElement("img");
	image.src ="flower2.png";
	new_element.appendChild(image);
	
	
	let spans = document.getElementById("rainbow").getElementsByTagName("span");
	let colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];

	for (var i = spans.length - 1; i >= 0; i--) {
		spans[i].style.color=colors[i];
	}
	
	
	var changeSrc = function(event) {
		if (event.target.src) {
			let filename = event.target.src.replace(/^.*[\\\/]/, '');
			if (filename === "flower1.png")
				event.target.src = "flower2.png";
			else
				event.target.src = "flower1.png";
		}
	};

	document.getElementById("event").addEventListener("mouseover", changeSrc);		
	
}



