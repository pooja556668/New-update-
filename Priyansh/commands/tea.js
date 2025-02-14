const fs = require("fs");
module.exports.config = {
	name: "tea",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "tea",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("tea")==0 || event.body.indexOf("Tea")==0 || event.body.indexOf("Chai")==0 || event.body.indexOf("CHAI")==0) {
		var msg = {
				body: "Ye Lo Bby ☕ pio",
				attachment: fs.createReadStream(__dirname + `/cache/tea.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("☕", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }