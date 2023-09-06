const express = require('express');
const router = express.Router();

var nodemailer = require('nodemailer');


router.get('/sendmail', async (req, res) => {

  const toEmail = req.query['email'];


  const fromEmail = process.env.EMAIL;
  const emailPassword = process.env.EMAIL_PASSWORD;

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    // port: 587,
    // secure: false,
    auth: {
      user: fromEmail,
      pass: emailPassword
    }
  });
  
  var mailOptions = {
    from: fromEmail,
    to: toEmail,
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
    // from: '"Fred Foo 👻" <foo@example.com>', // sender address
    // to: "bar@example.com, baz@example.com", // list of receivers
    // subject: "Hello ✔", // Subject line
    // text: "Hello world?", // plain text body
    // html: "<h1>Hello world?</h1>", // html body
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      res.status(500).json({message: 'Server error', data: { fromEmail, toEmail}, error});
      return;
    } 
      
    res.status(200).json({
      message: 'Sent',
      data: { fromEmail, toEmail}, 
      info
    });
    
  });
});

module.exports = router;