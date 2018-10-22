const express = require('express');
var nodemailer = require('nodemailer');
const router = express.Router();


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'contactusdrleonardobotelho@gmail.com',
        pass: 'contact@us1010'
    }
});


router.post('/enviarEmail', (req, res) => {
    var mailOptions = {
        from: 'contactusdrleonardobotelho@gmail.com',
        to: 'clinicadrbrasilia@gmail.com',
        subject: req.body.assunto,
        html: req.body.mensagem + '<p>Nome: ' + req.body.nome + '</p><p>Telefone: ' + req.body.telefone + '</p><p>E-mail: ' + req.body.email
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.json(error);
        } else {
            res.json({ "mensagem": "E-mail enviado com sucesso!" });
        }
    });

});

router.get('/', (req, res) => {
    res.json({
        status: 'Dr Leonardo Botelho'
    })
});

module.exports = router;