var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var multer = require('multer');
var glob = require('glob');
var session = require('client-sessions');
var md5 = require('');
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
    var password = md5(req.body.Password);
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
    connection.query('SELECT * FROM users WHERE email = ?', [email], function (err, results) {
        if (err) throw err;
        console.log('>>>>>>>>>>>>>>>> ', results);

        if (results === null || results.length === 0) {
            console.log("bad request")
            return res.json({status: 401});
        }
        else if (results[0]) {
            console.log("results", results)
            let pass = results[0].password;
            let Username=results[0].username;
            let userid=results[0].users_id;
            if (pass === password) {
                console.log("success", results[0])
                req.session.username = Username;
                console.log("Session initialized");
                return res.json({message: "Logged in Successfully", email: email, Username: Username, userid: userid, status: 200});
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
    array.push([Username, password, email]);

    console.log("reached SignUp");
    connection.query('SELECT * FROM users WHERE email = ?', [email], function (err, results) {
        if (err) throw err;
        console.log('>>>>>>>>>>>>>>>> ', results);

        if (results === null || results.length === 0) {
            connection.query('INSERT INTO users (username, password, email) VALUES ?', [array], function (err, result) {
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

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpeg')
    }
});

var upload = multer({storage:storage});

router.get('/upload', function (req, res, next) {
    var resArr = [];

    glob("public/uploads/*.jpeg", function (er, files) {

        var resArr = files.map(function (file) {
            var imgJSON = {};
            imgJSON.img = 'uploads/'+file.split('/')[2];
            imgJSON.cols = 2  ;
            return imgJSON;
        });

        console.log(resArr);
        res.status(200).send(resArr);
    });

});

router.post('/upload', upload.single('mypic'), function (req, res, next) {
    console.log(req.body);
    res.send({status:204});
});

router.post('/postproject', function (req, res, next) {

    var projectname = req.body.projectname;
    var skills = req.body.skills;
    var ProjectDecription= req.body.ProjectDecription;
    var budget= req.body.budget;

    console.log("projectname :" + projectname);
    console.log("skills :" + skills);
    console.log("ProjectDecription :" + ProjectDecription);
    console.log("budget :" + budget);

    var array = [];
    array.push([projectname, skills, ProjectDecription, budget]);

    console.log("reached postproject",array);
    connection.query('SELECT * FROM projects WHERE projectname = ?', [projectname], function (err, results) {
        if (err) throw err;
        console.log('>>>>>>>>>>>>>>>> ', results);

        if (results === null || results.length === 0) {

                connection.query('INSERT INTO projects (projectname, skills, ProjectDescription, budget) VALUES ?', [array], function (err, result) {
                    res.json({message: "posting is successful ", value: 200});
                });

        }

    });
    });

router.post('/dashboard', function (req, res, next) {

    console.log("reached dashboard");
    connection.query('SELECT * FROM projects' ,function (err, results) {
        if (err) throw err;
        console.log('>>>>>>>>>>>>>>>> ', results);

        if (results !== null) {
            console.log(results);
            res.send({message: "dashing is successful ", value: results});
        }
    });
});

router.post('/bids', function (req, res, next) {

    console.log("reached put bids");
    connection.query('INSERT INTO bidstable(projectname, skills, ProjectDescription, budget) VALUES ?', [array], function (err, result) {

        if (results !== null) {
            console.log(results);
            res.send({message: "bidstable uploaded", value: results});
        }
    });
});


module.exports = router;
