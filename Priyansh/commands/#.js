 const fs = require("fs");
module.exports.config = {
  name: "🥀",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "Aaryan", 
  description: "no prefix",
  commandCategory: "No command marks needed",
  usages: "...",
    cooldowns: 100, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("Happy c") ||
     react.includes("choc") ||
     react.includes("🍫") || 
react.includes("HAPPY CHO")) {
    var msg = {
        body: "𝐇𝐀𝐏𝐏𝐘 𝐂𝐇𝐎𝐂𝐎𝐋𝐀𝐓𝐄🍫 𝐃𝐀𝐘 𝐁𝐀𝐁𝐔🌿",
        attachment: fs.createReadStream(__dirname + `/noprefix/choco.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍫", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }