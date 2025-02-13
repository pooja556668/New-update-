const fs = require("fs");
module.exports.config = {
	name: "chhole",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐌𝐫.𝐀𝐚𝐫𝐲𝐚𝐧", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "bhatura",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Bhatura")==0 || event.body.indexOf("Chhole")==0 || event.body.indexOf("Chole")==0 || event.body.indexOf("BHATURA")==0) {
		var msg = {
				body: "💝 YE LO BABY CHHOLE BHATURE KHAO💙\n\n(-𝐌𝐚𝐝𝐞 𝐁𝐲༄𒁍≛⃝𝐃𝐫.𝐌𝐮𝐬𝐤𝐚𝐧❤️-)",
				attachment: 
fs.createReadStream(__dirname + `/cache/Bhatura.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🫓", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }