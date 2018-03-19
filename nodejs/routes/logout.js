var logout = function(req,res){
    var session=req.session;
    console.log("In logout ", req.session.uid)
    session.uid = null;
    session.destroy();
    res.json({
        status:'200',
        message : "Logged Out."
    });
};

exports.logout=logout;