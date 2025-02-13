const fs = require("fs");
module.exports.config = {
	name: "advise2",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "🙂",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("$")==0 || event.body.indexOf("#")==0 || event.body.indexOf("+")==0 || event.body.indexOf("/")==0) {
		var msg = {
				body: "💝𝐀𝐑𝐄 𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍 𝐌𝐄𝐑𝐀 𝐏𝐑𝐄𝐅𝐈𝐗 𝐘𝐄 👉🏻 . 👈🏻 𝐇𝐀𝐈",
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😈", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }