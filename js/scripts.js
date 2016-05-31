
var add = function(number1, number2){
	return number1 + number2;
};

var subtract = function(number1, number2){
	return number1 - number2;
};

var multiply = function(number1, number2){
	return number1 * number2;
};

var divide = function(number1, number2){
	return number1 / number2;
};

var bmi = function(height, weight){
  var heightCentimeters = multiply(height, .025);
  var weightKilograms = multiply(weight, .45);
  var bmiMassNumber = multiply(heightCentimeters, heightCentimeters);
  return divide(weightKilograms, bmiMassNumber);
};

var celsiusToFahrenheit = function (number1){
  var abc = multiply(number1, 1.8);
  return add(32, abc);
};

var fahrenheitToCelsius = function (number1){
  var abc = subtract(number1, 32);
  return divide(abc, 1.8);
};


//var celsiusToFahrenheit = function (number1){
//  return add(32, multiply(number1, 1.8));
//};

//var fahrenheitToCelsius = function (number1){
//  return divide(subtract(number1, 32), 1.8));
//};

var number1 = parseFloat(prompt("Enter a number:"));
//var number2 = parseFloat(prompt("Enter another number:"));


var result = fahrenheitToCelsius(number1);

alert(result);
