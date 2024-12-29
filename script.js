//your JS code here. If required.
function changeColour() {
	var blockNo = document.getElementById("block_id");
	var color = document.getElementById("colour_id");

	if(blockNo && color){
		if (blockNo.value>0 && blockNo.value<10) {
			resetColour();
			var blockID = "grid-item-"+blockNo.value;
			document.getElementById(blockID).style.backgroundColor = color.value; 
		}
	}
}

function resetColour() {
	for (let i = 1; i < 10; i++) {
		var blockID = "grid-item-"+i;
			document.getElementById(blockID).style.backgroundColor = "transparent"; 
	}
	
}
