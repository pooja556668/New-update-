const fs = require("fs");
module.exports.config = {
	name: "Aryan",
    version: "1.0.1",
	hasPermssion: 2,
	credits: "VanHung - Fixed by LTD", 
	description: "hihi",
	commandCategory: "no prefix",
	usages: "🙂",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("MAHI NOOR")==0 || event.body.indexOf("mahi noor")==0 || event.body.indexOf("dr muskan")==0 || event.body.indexOf("@𝐌⃞ʀ ‣⃟ ⃝𑁍 ⃝𝐀Mahiƞ̈͢oorـ圓‣⃟𑁍")==0) {
		var msg = {
				body: "हेलो बेबी मुझे माही नूर बाबू ने बनाया है। 🙂🌍🌸",
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙂", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }