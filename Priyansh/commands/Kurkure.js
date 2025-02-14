const fs = require("fs");
module.exports.config = {
	name: "kurkure",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "kurkure",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("KURKURE")==0 || event.body.indexOf("Kurkure")==0 || event.body.indexOf("kurkure")==0 || event.body.indexOf(".kurkure")==0) {
		var msg = {
				body: "💝 YE LO BBY KURKURE KHAO 🫓\n\n(-𝐌𝐚𝐝𝐞 𝐁𝐲 ༄𒁍≛⃝𝐃𝐫.𝐌𝐮𝐬𝐤𝐚𝐧❤️-)",
				attachment: 
fs.createReadStream(__dirname + `/cache/Kurkure.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🫓", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }