const fs = require("fs");
module.exports.config = {
	name: "chiku3",
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
	if (event.body.indexOf("@Mahi noor")==0 || event.body.indexOf("Mahi noor")==0 || event.body.indexOf("Mahi")==0 || event.body.indexOf("Noor")==0) {
		var msg = {
				body: "❤️𝐘𝐄 𝐋𝐎 𓆩𝐌𝐚𝐡𝐢 𝐍𝐨𝐨𝐫𓆪 𝐁𝐀𝐁𝐔 𝐉𝐈 𝐀𝐀 GAYI🙈",
				attachment: fs.createReadStream(__dirname + `/cache/chiku.jpeg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😇", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }