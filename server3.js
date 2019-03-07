var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ahmedalhadi7.aa@gmail.com',
    pass: '09263761968574635241'
  }
});

var mailOptions = {
  from: 'ahmedalhadi7.aa@gmail.com',
  to: 'ahmedalhadi7@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});