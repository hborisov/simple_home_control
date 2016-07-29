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
						<div id=\"thing-"+thing.id+"button-group\" class=\"btn-group\" data-toggle=\"buttons\"> \
						  <label class=\"btn btn-primary active\"> \
						    <input type=\"radio\" name=\"options\" autocomplete=\"off\" value=\"on\" checked> On \
						  </label> \
						  <label class=\"btn btn-primary\"> \
						    <input type=\"radio\" name=\"options\" autocomplete=\"off\" value=\"off\"> Off \
						  </label> \
						</div> \
					</div> \
				</div> \
				<div class=\"col-md-4\"></div> \
			</div>"		
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
});

$("#thing-button-group").click(function() {
	console.log($('#thing-button-group input:radio:checked').val());
});