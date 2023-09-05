const accountSid = 'AC6683a513fbecff8bdbc65e7304cb5188';
const authToken = 'dbc72eddcb095620a6126aa0cdcccd4e';

const client = require("twilio")(accountSid, authToken);

function sendTextMessage(sender, message) {
  return new Promise((resolve, reject) => {
    client.messages
      .create({
        from: "whatsapp:+14155238886",
        body: message,
        to: "whatsapp:+" + sender,
      })
      .then((message) => resolve())
      .catch((err) => reject(err));
  });
}

module.exports = {
  sendTextMessage,
};