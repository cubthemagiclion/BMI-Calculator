const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended : true}));
//urlencoded is what we need to process html form
//extended is something bodyParser required us to include in our code.


app.get('/', function(req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.get('/bmicalculator', function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmicalculator", function(req, res) {
  //var num1 = req.body.num1; <-this got parsed as text, we need to convert to number
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  var result = weight /(height * height) * 10000;
  res.send("Your BMI is " + result);
});
app.post("/", function(req, res) {
  //var num1 = req.body.num1; <-this got parsed as text, we need to convert to number
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("The result is " + result);
});

app.listen(port, function() {
  console.log("app listening at http://localhost:${port}");
});
