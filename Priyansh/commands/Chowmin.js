const fs = require("fs");
module.exports.config = {
	name: "chowmin",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "Chowmin",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Chowmin")==0 || event.body.indexOf("CHOWMIN")==0 || event.body.indexOf("chowmin")==0 || event.body.indexOf("Chawmin")==0) {
		var msg = {
				body: "💝 YE LO BBY CHAWMIN KHAO 🍜\n\n(-𝐌𝐚𝐝𝐞 𝐁𝐲 ༄𒁍≛⃝𝐃𝐫.𝐌𝐮𝐬𝐤𝐚𝐧❤️-)",
				attachment: 
fs.createReadStream(__dirname + `/cache/Chowmin.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍜", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }