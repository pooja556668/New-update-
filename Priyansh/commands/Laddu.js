const fs = require("fs");
module.exports.config = {
	name: "laddu",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "laddu",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("LADDU")==0 || event.body.indexOf("Laddu")==0 || event.body.indexOf("laddu")==0 || event.body.indexOf("Ladu")==0) {
		var msg = {
				body: "💝 YE LO BBY LADDU KHAO 🍪\n\n(-𝐌𝐚𝐝𝐞 𝐁𝐲 ༄𒁍≛⃝𝐃𝐫.𝐌𝐮𝐬𝐤𝐚𝐧❤️-)",
				attachment: 
fs.createReadStream(__dirname + `/cache/Laddu.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍪", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }