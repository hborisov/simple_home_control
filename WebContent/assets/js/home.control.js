var HomeControl = (function ($) {
	var homeControl = {};
	var things = [];
	
	homeControl.addThing = function (id, name, address) {
		var thing = {};
		thing.name = name;
		thing.id = id;
		thing.address = address;
		thing.state = true;

		thing.render = function () {
			return "<div class=\"row\"> \
				<div class=\"col-md-4\"></div> \
				<div class=\"col-md-4\"> \
						<div> \
						<h3>Thing " + thing.name + "</h3> \
						<h4>Thing " + thing.id + "</h4> \
						<button id=\"switched-on-"+ thing.id + "\" type=\"button\" class=\"btn btn-info btn-lg\">Switched On</button> \
					</div> \
				</div> \
				<div class=\"col-md-4\"></div> \
			</div>"		
		};

		thing.switchOn = function () {
			$.get(thing.address + "/on");
		};

		thing.switchOff = function () {
			$.get(thing.address + "/off");
		};

		things.push(thing);
		return thing;
	};

	homeControl.listThings = function () {
		things.forEach(function(thing, index, array) {
			console.log(thing);
		});
	};
	
	return homeControl;
}(jQuery));

$("#add-thing").click(function() {
	var newThingId = $("#thing-id").val();
	var newThingName = $("#thing-name").val();
	var newThingAddress = "http://" + newThingId + ".local";
	var newThing = HomeControl.addThing(newThingId, newThingName, newThingAddress);
	
	$(".container").append(newThing.render());
	var selectorId = "#switched-on-"+ newThingId;
	$(selectorId).click(function() {
		var isSwitchedOn = $('#switched-on-'+newThingId).hasClass("active");
		if (isSwitchedOn) {
			$(this).removeClass("active");
			$(this).text("Switched Off");
			newThing.switchOff();
		} else {
			$(this).addClass("active");
			$(this).text("Switched On");
			newThing.switchOn();
		}
	});
});