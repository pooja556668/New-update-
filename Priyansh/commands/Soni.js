const fs = require("fs");
module.exports.config = {
  name: "Soni",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "FAIZ ANSARI", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "haniya",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("Soni")==0 || event.body.indexOf("@Térá Bf Mèrâ Déèwâñà")==0 || event.body.indexOf("Divya")==0 || event.body.indexOf("Aaryan ki mal")==0) {
    var msg = {
        body: "❤️𝐘𝐄 𝐋𝐎 𝐒𝐎𝐍𝐈 𝐉𝐈 𝐀 𝐆𝐀𝐈🙈",
        attachment: fs.createReadStream(__dirname + `/cache/soni.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😇", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }