$(document).ready(function () {

	$("button").click(function () {
		var ounce = $("#ounces").val();
		var factor = 8.345404;
		var density = 1; // density of water
		var cup = ounce / (factor * density);
		console.log(cup);
		$("#result").text(cup);
	});
});


