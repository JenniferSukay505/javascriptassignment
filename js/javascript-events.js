$(document).ready(function() {
	/***********************
	 *changes color of text
	 *
	 * mouse over
	 *
	 * Author:jhung@cnm.edu
	 *
	 ************************/

	$(document).ready(function() {
		$("p").on({
			mouseenter: function() {
				$(this).css("color", "yellow");
			},
			mouseleave: function() {
				$(this).css("color", "orange");
			},
			click: function() {
				$(this).css("color", "blue");
			}
		});
	});
});

document.addEventListener("dragstart", function(event) {
	// The dataTransfer.setData() method sets the data type and the value of the dragged data
	event.dataTransfer.setData("Text", event.target.id);

	// Output some text when starting to drag the p element
	document.getElementById("dragdrop").innerHTML = "Started to drag the p element.";

	// Change the opacity of the draggable element
	event.target.style.opacity = "0.4";
});

// While dragging the p element, change the color of the output text
document.addEventListener("drag", function(event) {
	document.getElementById("dragdrop").style.color = "red";
});

// Output some text when finished dragging the p element and reset the opacity
document.addEventListener("dragend", function(event) {
	document.getElementById("dragdrop").innerHTML = "Finished dragging the p element.";
	event.target.style.opacity = "1";
});


/* ----------------- Events fired on the drop target ----------------- */

// When the draggable p element enters the droptarget, change the DIVS's border style
document.addEventListener("dragenter", function(event) {
	if ( event.target.className == "droptarget" ) {
		event.target.style.border = "3px dotted red";
	}
});

// By default, data/elements cannot be dropped in other elements. To allow a drop, we must prevent the default handling of the element
document.addEventListener("dragover", function(event) {
	event.preventDefault();
});

// When the draggable p element leaves the droptarget, reset the DIVS's border style
document.addEventListener("dragleave", function(event) {
	if ( event.target.className == "droptarget" ) {
		event.target.style.border = "dashed blue";
	}
});

/* On drop - Prevent the browser default handling of the data (default is open as link on drop)
 Reset the color of the output text and DIV's border color
 Get the dragged data with the dataTransfer.getData() method
 The dragged data is the id of the dragged element ("drag1")
 Append the dragged element into the drop element
 */
document.addEventListener("drop", function(event) {
	event.preventDefault();
	if ( event.target.className == "droptarget" ) {
		document.getElementById("dragdrop").style.color = "";
		event.target.style.border = "";
		var data = event.dataTransfer.getData("Text");
		event.target.appendChild(document.getElementById(data));
	}
});

/* When mouse is over the p text, change the color.  Change
 the color momentarily when text is clicked on, and again
 when the mouse button is release
 */

$(document).ready(function(){
	$("p").on({
		mouseenter: function(){
			$(this).css("color", "yellow");
		},
		mouseleave: function(){
			$(this).css("color", "orange");
		},
		click: function(){
			$(this).css("color", "blue");
		}
	});
});

/* Allow element to be dragged by created dragStart and drag event.  Allow element to
be dropped in an area with allowDrop.  Finally, allow the drop.  Defaults must be
prevented.
 */

function dragStart(event) {
	event.dataTransfer.setData("Text", event.target.id);
}

function drag(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
	ev.preventDefault();
}

function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(data));
}

/*After the drop event, hide the Drop ME Here text and enclosing div border*/


$(document).ready(function(){
	$(".drop").click(function(){
		$(this).hide();
	});
});

document.getElementById(".drag p").innerHTML = "New text!";

