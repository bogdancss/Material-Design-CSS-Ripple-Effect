$("ul li a").click(function(e) {
	console.log('click');
	var parent = $(this).parent();

	// create ripple effect
	if (parent.find(".ripple").length == 0)
		parent.prepend("<span class='ripple'></span>");

	var ripple = parent.find(".ripple");
	// remove animation when double click
	ripple.removeClass("animate");
	console.log(ripple.hasClass("animate"));

	// set the diameter of the ripple effect to either the widh or the height of 
	// the element clicked, whichever is the largest, to make sure it covers it all
	if(!ripple.height() && !ripple.width()) {
		var diam = Math.max(parent.outerWidth(), parent.outerHeight());
		ripple.css({height: diam, width: diam});
	}

	// get the click coordinates relative to page and parent offset
	var x = e.pageX - parent.offset().left - ripple.width()/2;
	var y = e.pageY - parent.offset().top - ripple.height()/2;

	// set the ripple position and start animation
	ripple.css({top: y+'px', left: x+'px'}).addClass("animate");
})