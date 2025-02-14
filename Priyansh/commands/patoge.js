const fs = require("fs");
module.exports.config = {
	name: "patoge",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "patoge",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Patoge")==0 || event.body.indexOf("patoge")==0 || event.body.indexOf("Mujhe pata lo ")==0 || event.body.indexOf("Mujhe pata lo")==0) {
		var msg = {
				body: "Main chala kisi or se patne 🙈",
				attachment: fs.createReadStream(__dirname + `/cache/patoge.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙈", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }