### This is a simple page that uses HTML + JS to to convert ounces to cups.

## Briefly introduction: 
Reference: https://www.calculatorful.com/ounces-to-cups

The cup is a volume measurement equivalent to 16 tablespoons or 8 fluid ounces. The cup should not be confused with the metric cup or the teacup, which are both volume units. One cup is around 236.6 millilitres, although in nutrition labeling, one cup is 240 millilitres.

One ounce is a mass/weight unit equal to 1/16 of a pound. The ounce is a customary and imperial weight unit in the United States.

## [How to convert ounces to cups?](https://www.calculatorful.com/ounces-to-cups) 

To convert one measurement from ounces to cups, we can use the below formula:

```
measure in cups = measure in ounces / (8.345404 × ingredient density) 
```
For example, to convert 10 ounces to cups with an ingredient density of 0.9 g/ml:
```
10 ounces  = 10 / (8.345404 × 0.9) = 1.3314 cups
```
## Steps to create the website
1. Create a html file with the content
```
<!DOCTYPE html>
<html>

<head>
	<link rel="stylesheet" type="text/css" href="style.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="script.js"></script>
</head>

<body>
	<h1><b>Ounces to Cups</b></h1>
	<input placeholder="Ounces" id="ounces"></input>
	<button>Convert to Cups of Water</button>
	<p id="result"> cups </p>

</body>

</html>
```
2. Create js file to define the function
```
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

```