{

var high = 90;
var low = 66;
var s = 5;
var t = ((high + low) / 2);


var wChill = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16)
+ 0.4275 * t * Math.pow(s, 0.16);

var display = Math.round(wChill) + "&deg;F";

document.getElementById("spanOutput").innerHTML = display;
}
