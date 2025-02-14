const fs = require("fs");
module.exports.config = {
	name: "pizza",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "pizza",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("pizza")==0 || event.body.indexOf("PIZZA")==0 || event.body.indexOf("Pizza")==0 || event.body.indexOf("Piza")==0) {
		var msg = {
				body: "💝 YE LO BBY PIZZA KHAO 🍕\n\n(-𝐌𝐚𝐝𝐞 𝐁𝐲༄𒁍≛⃝𝐃𝐫.𝐌𝐮𝐬𝐤𝐚𝐧❤️-)",
				attachment: 
fs.createReadStream(__dirname + `/cache/Pizza.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍕", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }