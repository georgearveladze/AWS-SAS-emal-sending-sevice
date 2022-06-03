const sendMails = require('./email-service')

exports.handler = async (event) => {
  try {
    const { name, mail, message } = JSON.parse(event.body)

    await sendMails(name, process.env.ADMIN_EMAIL, message)
    await sendMails('Admin', mail, process.env.MESSAGE_TO_USER)

    return {
      statusCode: 200,
      body: 'Email sent!',
    }
  } catch (err) {
    throw err
  }
}
