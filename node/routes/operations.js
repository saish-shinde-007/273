var express = require('express');
var router = express.Router();
var mysql=require('mysql');

var session = require('client-sessions');

router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

var connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"saish09",
    database:"Test"
});

router.post('/login', function (req, res, next) {

    var email = req.body.email;
    var Username = req.body.UserName;
    var password = req.body.Password;

    console.log(Username);
    var values = [];
    values.push([email,password]);

    console.log("reached login");

if(req.session.username)
{
    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    console.log("i am here", req.session.username);
    res.json({message: "Already logged", status: 200});
}

else {
    connection.query('SELECT * FROM users WHERE username = ?', [email], function (err, results) {
        if (err) throw err;
        console.log('>>>>>>>>>>>>>>>> ', results);

        if (results === null || results.length === 0) {
            console.log("bad request")
            return res.json({status: 401});
        }
        else if (results[0]) {
            console.log("results", results)
            let pass = results[0].password;
            if (pass === password) {
                //req.session.uid=results[0].users_id;
                console.log("success", results[0])
                req.session.username = Username;
                console.log("Session initialized");
                return res.json({message: "Logged in Successfully", value: email, status: 200});

            }
            else {
                return res.json({status: 401});
            }
        }
    });
}
});

router.post('/signup', function (req, res, next) {

    var email = req.body.email;
    var Username = req.body.UserName;
    var password = req.body.Password;

    console.log("email :" + email);
    console.log("UserName :" + Username);
    var array = [];
    array.push([email, password]);

    console.log("reached SignUp");
    connection.query('SELECT * FROM users WHERE username = ?', [email], function (err, results) {
        if (err) throw err;
        console.log('>>>>>>>>>>>>>>>> ', results);

        if (results === null || results.length === 0) {
            connection.query('INSERT INTO users (username, password) VALUES ?', [array], function (err, result) {
                res.json({message: "SignUp is successful ", value: email + Username});

            });
        }
        else {
            console.log("bad request");
            console.log("User is already registered with this email id");
            return res.json({message: "User is already registered with this email id", value: "User already registered"
            });
        }

    });
});

module.exports = router;
