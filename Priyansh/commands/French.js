const fs = require("fs");
module.exports.config = {
	name: "french",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "French",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("French")==0 || event.body.indexOf("FRENCH")==0 || event.body.indexOf("french")==0 || event.body.indexOf(".french")==0) {
		var msg = {
				body: "💝 ये लो बाबू फ्रेंच फ्राइज़ खाओ 🍟\n\n(-𝐌𝐚𝐝𝐞 𝐁𝐲 𝗠𝗿..𝗔𝗮𝗿𝘆𝗮𝗻❤️-)",
				attachment: 
fs.createReadStream(__dirname + `/cache/French.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍟", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }