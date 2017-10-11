const sgMail = require('@sendgrid/mail');

sgMail.setApiKey("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");
const msg = {
  to: 'alex.ratner@hawkeyeinnovations.com',
  from: 'alex.ratner@hawkeyeinnovations.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  attachments: [
      generate(pdf)
  ]
};

sgMail.send(msg);