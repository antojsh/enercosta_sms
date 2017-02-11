var express = require('express');
var router = express.Router();
var api_key = 'key-2f0ccd726724286d7d6448bbff8e271a';
var domain = 'antoniosierra.co';
var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });
/* GET home page. */
router.post('/', function(req, res, next) {
	var data = req.body
    // res.render('index', { title: 'Express' });
    var data = {
        from: 'asierra@antoniosierra.co',
        to: data.myemail,
        subject: data.mysubject,
        text: 'Mensaje enviado por: '+ data.myname+'\n\n'+data.mymessage
    };

    mailgun.messages().send(data, function(error, body) {

        if (error) {
            res.send(error).status(500)
        } else {
            res.send('{mensaje:"Correo enviado correctamente"}').status(200)
        }
    });

});

module.exports = router;
