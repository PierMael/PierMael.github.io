function addItem() {
	let text = document.getElementById("item").value;
	
	if (text != '') {
		let newItem = document.createElement("li");
		let textNode = document.createTextNode(text);
			 
	if (document.getElementById("important").checked){
        newItem.style.color = "red";
	}	
		
	if (document.getElementById("groceries").checked){
        newItem.style["text-decoration"] = "underline";
	}
	
	newItem.appendChild(textNode);
	document.getElementById("shopping list").appendChild(newItem);
	}	
}

function removeItem() {
	let number = document.getElementById("index").value - 1;
	let list = document.getElementById("shopping list").children;
	
	if (number < list.length & number >= 0){
		list[number].remove();
	}
} 