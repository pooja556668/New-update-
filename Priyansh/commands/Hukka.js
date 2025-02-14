const fs = require("fs");
module.exports.config = {
	name: "hukka",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "hukka",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("HUKKA")==0 || event.body.indexOf("Hukka")==0 || event.body.indexOf("hukka")==0 || event.body.indexOf(".hukka")==0) {
		var msg = {
				body: "💝 YE LO BBY HUKKA, DONO PIYENGE AA JAO 😅😀🤭\n\n(-𝐌𝐚𝐝𝐞 𝐁𝐲 ༄𒁍≛⃝𝐃𝐫.𝐌𝐮𝐬𝐤𝐚𝐧❤️-)",
				attachment: 
fs.createReadStream(__dirname + `/cache/Hukka.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🏺", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }