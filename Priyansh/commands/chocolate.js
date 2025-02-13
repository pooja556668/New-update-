const fs = require("fs");
module.exports.config = {
	name: "chocolate",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "chocolate",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Chocolate")==0 || event.body.indexOf("chocolate")==0 || event.body.indexOf("🍫🍫")==0 || event.body.indexOf("choclate")==0) {
		var msg = {
				body: "𝐘𝐄 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐂𝐇𝐎𝐂𝐎𝐋𝐀𝐓𝐄🍫 𝐊𝐇𝐀𝐎",
				attachment: fs.createReadStream(__dirname + `/cache/Chocolate.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍫", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }