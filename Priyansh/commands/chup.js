module.exports.config = {
  name: "chup",
  version: "7.3.1",
  hasPermssion: 0,
  credits: "John Lester", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
  var { threadID, messageID } = event;
  var name = await Users.getNameUser(event.senderID);
  if (event.body.indexOf("chup")>=0 || event.body.indexOf("Chup")>=0 || event.body.indexOf("CHUP")>=0 || event.body.indexOf("chup kar")>=0 || event.body.indexOf("Chup kar")>=0 || event.body.indexOf("CHUP KAR")>=0 || event.body.indexOf("चुप")>=0 ||   event.body.indexOf("cup")>=0 ) { 
    var msg = {
        body: `  ${name} क्यूं रहूं चुप मैं बोलूंगा तुम कौन होते हो मुझे चुप कराने वाले। तुम रहो चुप मैं तो बोलूंगा।😒😏👈 `
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🐃", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }