const fs = require("fs");
module.exports.config = {
	name: "cigrate",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "cigrate",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Cigarette")==0 || event.body.indexOf("cigarette")==0 || event.body.indexOf("Ciggerate")==0 || event.body.indexOf("Cigrate")==0) {
		var msg = {
				body: "💝 YE LO BBY  DONO MIL KR CIGARETTE 🚬, PIYENGE 😀😅🤭\n\n(-𝐌𝐚𝐝𝐞 𝐁𝐲 ༄𒁍≛⃝𝐃𝐫.𝐌𝐮𝐬𝐤𝐚𝐧❤️-)",
				attachment: 
fs.createReadStream(__dirname + `/cache/Cigarette.jpeg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🚬", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }