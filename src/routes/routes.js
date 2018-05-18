var express = require('express');

var router = express.Router();

router.route("/").get(
    function(req, res){
        // res.sendFile(__dirname + "/views/index.html");
        var data = {
            title: "Pug Demo Index Page"
        };
        res.render("index", data);
    }
);

router.route("/contactUs").get(
    function(req, res){
        // TODO: Get model from database
        // var model = repo.getContactUsData();
    
        var model = {
            title: "Contact Us Page",
            contactData: [
                {
                    name: "Susan",
                    phone: "555-555-5555",
                    email: "sueDawg@here.now"
                },
                {
                    name: "Pete",
                    phone: "555-555-6666",
                    email: "peteIsAwesome@here.now"
                }
            ]
        };
    
        // res.sendFile(__dirname + "/views/contactUs.html");
        res.render("contactUs", model);
    }
);

module.exports = router;