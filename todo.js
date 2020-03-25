 
let p = document.getElementById("sum");
let item = document.getElementById("input");
let ol = document.querySelector("ol");

function inputLength() {
	return input.value.length;
}

function createListElement() {
		let li = document.createElement("li")
		li.appendChild(document.createTextNode(input.value));
		ol.appendChild(li);
		input.value = "";
}

function addListAfterClick() {
	if(inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
		if(inputLength() > 0 && event.keyCode === 13) {
		createListElement();
 }
}

p.addEventListener("click", addListAfterClick);
	
item.addEventListener("keypress", addListAfterKeypress);