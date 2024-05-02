const nodemailer = require('nodemailer');

const {GMAIL_EMAIL,GMAIL_PASSWORD} = require('./server-config')

const mailSender = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
         user : GMAIL_EMAIL,
         pass: GMAIL_PASSWORD
    }
})

module.exports = mailSender;