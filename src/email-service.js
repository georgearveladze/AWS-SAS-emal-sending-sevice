const AWS = require('aws-sdk')
const SES = new AWS.SES()

const sendMails = async (name, email, message) => {
  const params = {
    Destination: { ToAddresses: [email] },
    Message: {
      Body: {
        Text: {
          Data: message,
        },
      },
      Subject: { Data: `Message from ${name}` },
    },
    Source: process.env.ADMIN_EMAIL,
  }

  await SES.sendEmail(params).promise()
}

module.exports = sendMails
