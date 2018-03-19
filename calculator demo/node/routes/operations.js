var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});


router.post('/add', function (req, res, next) {

    var number1 = req.body.firstNumber;
    var number2 = req.body.secondNumber;
    var operator = req.body.operator;

    console.log("Number 1 :" +number1);
    console.log("Number 2 :" +number2);
    console.log("Operation :" +operator);

    console.log("reached Addition")
    var sum = parseFloat(number1) + parseFloat(number2);
    console.log(sum);

    res.json({message: "Addition is Successful ",value: sum});

});

router.post('/sub', function (req, res, next) {

    var number1 = req.body.firstNumber;
    var number2 = req.body.secondNumber;
    var operator = req.body.operator;

    console.log("Number 1 :" +number1);
    console.log("Number 2 :" +number2);
    console.log("Operation :" +operator);


        console.log("reached Subtraction")
        var sub = parseFloat(number1) - parseFloat(number2);
        console.log(sub);
    res.json({message: "Subtraction is Successful ", value: sub});
});

router.post('/mul', function (req, res, next) {

    var number1 = req.body.firstNumber;
    var number2 = req.body.secondNumber;
    var operator = req.body.operator;

    console.log("Number 1 :" +number1);
    console.log("Number 2 :" +number2);
    console.log("Operation :" +operator);


        console.log("reached Multiplication")
        var mul = parseFloat(number1) * parseFloat(number2);
        console.log(mul);
        res.json({message: "Multiplication is Successful ",value: mul});

    });


router.post('/div', function (req, res, next) {
    var number1 = req.body.firstNumber;
    var number2 = req.body.secondNumber;
    var operator = req.body.operator;

    console.log("Number 1 :" +number1);
    console.log("Number 2 :" +number2);
    console.log("Operation :" +operator);

        if(parseFloat(number2)==0)
        res.send("Cannot divide by zero");

        else{
            console.log("reached Division")
            var div = parseFloat(number1) / parseFloat(number2);
            console.log(div);
            res.json({message: "Division is Successful ",value: div});
}

});

module.exports = router;
