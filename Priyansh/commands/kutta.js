const fs = require("fs");
module.exports.config = {
	name: "Funny bot",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "RAVI", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("Kutta bot") ||
     react.includes("Bot kutta") || react.includes("KUTTA BOT") || react.includes("Kutta bot") ||
react.includes("bakk") ||
react.includes("Bakk bot")) {
		var msg = {
				body: `【 𝐁𝐀𝐂𝐇 𝐊𝐄 𝐑𝐀𝐇𝐄𝐍𝐀 𝐊𝐀𝐇𝐈 𝐌𝐄𝐊O 𝐃𝐈𝐋 𝐌𝐀𝐓 𝐃𝐄𝐊𝐄 𝐁𝐀𝐈𝐓𝐇 𝐉𝐀𝐍𝐀🙂🖐️ 】`,
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😙", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }