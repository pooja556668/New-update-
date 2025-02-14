const fs = require("fs");
module.exports.config = {
	name: "Alona",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "FAIZ ANSARI", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "haniya",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("@Alona Prisha")==0 || event.body.indexOf("@Aɭoŋa SHʌʀʌɓɩ Bʌɗɱʌsʜ")==0 || event.body.indexOf("Riya")==0 || event.body.indexOf("Aaryan ki besti")==0) {
		var msg = {
				body: "❤️𝐘𝐄 𝐋𝐎 𝐑𝐈𝐘𝐀 𝐉𝐈 𝐀 𝐆𝐀𝐈🙈",
				attachment: fs.createReadStream(__dirname + `/cache/riya.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😇", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }