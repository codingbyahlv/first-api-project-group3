//get the middlewears
const nodemailer = require("nodemailer")
const nodemailerSendgrid = require("nodemailer-sendgrid")
//get the env file for the key
require("dotenv").config();
//can be used in any custom email function we want to send different types of email
const transport = nodemailer.createTransport(
    nodemailerSendgrid({
        apiKey: process.env.SENDGRID_KEY,
    })
);

//FUNCTION - SENDING MAIL
const feedbackAddedEmail = (feedback) => {
    //use our transport variable for sending email with the senmail method
    transport.sendMail({
        from: "Din todo-app <code@ahlvdesign.se>",
        to: `${feedback.name} <${feedback.email}>`,
        subject: "Feedback received",
        html: `<h1>Thank you for your feedback!</h1><br><h2 style = 'text-align: center;'>Dear ${feedback.name}</h2><br><p style = 'text-align: center;' >We truly value your feedback and the time you took to evaluate our website. We hope to be able to implement them in the next update.</p>`,
        text: `Dear ${feedback.name} We truly value your feedback and the time you took to evaluate our website. We hope to be able to implement them in the next update.`

    })
    //success
    .then(() => console.log("email sent"))
    //error
    .catch((error) => console.log(error))
}

//expose the emailservice for the entire app
exports.feedbackAddedEmail = feedbackAddedEmail;