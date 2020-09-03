$(index.html).ready(function() { // do this when the document is loaded
	$("#content_dialer").show(); // show the element with ID "element"
	$("#content_list").hide(); // hide the element with ID "otherElement"
    $("#content_add").hide(); // hide the element with ID "otherElement"
});

$(Dial).click(function() { // when "button_id" is clicked
	$("#content_dialer").show(); // show element
	$("#content_list").hide();	// hide other element
    $("#content_add").hide();	// hide other element
});

$(List).click(function() { // when "button_id" is clicked
	$("#content_list").show(); // show element
	$("#content_dialer").hide();	// hide other element
    $("#content_add").hide();	// hide other element
});

$(Add).click(function() { // when "button_id" is clicked
	$("#content_add").show(); // show element
	$("#content_list").hide();	// hide other element
    $("#content_dialer").hide();	// hide other element
});



