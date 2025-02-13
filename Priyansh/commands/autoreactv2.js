const fs = require("fs");
module.exports.config = {
	name: "auto2",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "John Lester", 
	description: "No Prefix",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase()
	if (event.body.indexOf("kain")==0 || event.body.indexOf("Kain")==0 || event.body.indexOf("yie")==0 || event.body.indexOf("paiyot")==0 || event.body.indexOf("pokpok")==0 || event.body.indexOf("Paiyot")==0 || event.body.indexOf("chupa")==0 || event.body.indexOf("Chupa")==0 || event.body.indexOf("sex")==0 || event.body.indexOf("Sex")==0 || event.body.indexOf("bilat")==0 || event.body.indexOf("belat")==0 || event.body.indexOf("Bilat")==0 || event.body.indexOf("Belat")==0 || event.body.indexOf("Puke")==0 || event.body.indexOf("puke")==0 || event.body.indexOf("puday")==0 || event.body.indexOf("Puday")==0 || event.body.indexOf("lalaki")==0 || event.body.indexOf("Lalaki")==0 || event.body.indexOf("buti pa")==0 || event.body.indexOf("hehe")==0 || event.body.indexOf("Hehe")==0 || event.body.indexOf("mwah")==0 || event.body.indexOf("Mwah")==0 || event.body.indexOf("mwuah")==0 || event.body.indexOf("baby")==0 || event.body.indexOf("bby")==0 || event.body.indexOf("babe")==0 || event.body.indexOf("bby")==0 || event.body.indexOf("bebe")==0 || event.body.indexOf("😋")==0 || event.body.indexOf("🤩")==0 || event.body.indexOf("🙄")==0 || event.body.indexOf("🤓")==0 || event.body.indexOf("☕")==0 || event.body.indexOf("🤗")==0 || event.body.indexOf("🤭")==0 || event.body.indexOf("😶")==0 || event.body.indexOf("🥵")==0 || event.body.indexOf("😎")==0 || event.body.indexOf("🤡")==0 || event.body.indexOf("😇")==0 || event.body.indexOf("😊")==0 || event.body.indexOf("Good")==0 || event.body.indexOf("good")==0 || event.body.indexOf("afternoon")==0 || event.body.indexOf("aftie")==0 || event.body.indexOf("Afternoon")==0 || event.body.indexOf("Aftie")==0 || event.body.indexOf("Morning")==0 || event.body.indexOf("morning")==0 || event.body.indexOf("Eve")==0 || event.body.indexOf("eve")==0 || event.body.indexOf("dali na")==0 || event.body.indexOf("😏")==0 || event.body.indexOf("we")==0 || event.body.indexOf("😻")==0 || event.body.indexOf("❤")==0 && !bot.includes(event.senderID))  {
		var msg = {
				body: ""
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
		};
  if (event.body.indexOf("🫢🤭🫢")==0 || event.body.indexOf("🤭")==0 || event.body.indexOf("🤭🤭")==0 || event.body.indexOf("🤭🤭🤭")==0 || event.body.indexOf("🫢")==0 || event.body.indexOf("🫢🫢")==0 || event.body.indexOf("🫢🫢🫢")==0 || event.body.indexOf("🤭🫢")==0 && !bot.includes(event.senderID))  {
		var msg = {
				body: "𝗠𝗲𝗿𝗮 𝗔𝗮𝗴𝗲 𝗮𝗶𝘀𝗲 𝗵𝗶 𝗺𝘂𝗵 𝗕𝗮𝗻𝗱 𝗥𝗮𝗸𝗵𝗮 𝗸𝗿🤭😈"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙄", event.messageID, (err) => {}, true)
		};
	if (event.body.indexOf("sad")==0 || event.body.indexOf("Sad")==0 || event.body.indexOf("😓")==0 || event.body.indexOf("😥")==0 || event.body.indexOf("😞")==0 || event.body.indexOf("😨")==0 || event.body.indexOf("😥")==0 || event.body.indexOf("😭")==0 || event.body.indexOf("😓")==0 || event.body.indexOf("😢")==0 || event.body.indexOf("😕")==0 || event.body.indexOf("😑")==0 || event.body.indexOf("😩")==0 || event.body.indexOf("😰")==0 || event.body.indexOf("😟")==0 || event.body.indexOf("😦")==0 || event.body.indexOf("🙁")==0 || event.body.indexOf("😔")==0 || event.body.indexOf("😪")==0 && !bot.includes(event.senderID))  {
		var msg = {
				body: "𝐒𝐚𝐝 𝐍𝐚𝐡 𝐡𝐨 𝐌𝐞𝐫𝐢 𝐉𝐚𝐚𝐧.🫂 𝐉𝐨 𝐃𝐚𝐫𝐝 𝐃𝐢𝐤𝐡𝐭𝐞 𝐍𝐚𝐡𝐢 𝐕𝐨 𝐃𝐮𝐤𝐡𝐭𝐞 𝐁𝐚𝐡𝐮𝐭 𝐇𝐚𝐢,"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😿", event.messageID, (err) => {}, true)
		};
	if (event.body.indexOf("bobo")==0 || event.body.indexOf("Bobo")==0 || event.body.indexOf("gago")==0 || event.body.indexOf("Gago")==0 || event.body.indexOf("suntukan")==0 || event.body.indexOf("kantutin")==0 || event.body.indexOf("hayop")==0 || event.body.indexOf("kantutin")==0 || event.body.indexOf("Hayop")==0 || event.body.indexOf("hindot")==0 || event.body.indexOf("Hayup")==0 || event.body.indexOf("Pota")==0 || event.body.indexOf("puta")==0 || event.body.indexOf("fuckyou")==0 || event.body.indexOf("pakyu")==0 || event.body.indexOf("pakyo")==0 || event.body.indexOf("may bold")==0 || event.body.indexOf("kingina")==0 || event.body.indexOf("Kingina")==0 || event.body.indexOf("King ina")==0 || event.body.indexOf("HAHAHA")==0 || event.body.indexOf("May bold")==0 || event.body.indexOf("baliw")==0 || event.body.indexOf("bubu")==0 || event.body.indexOf("mabaho")==0 || event.body.indexOf("Mabaho")==0 || event.body.indexOf("manyakis")==0 || event.body.indexOf("manyakol")==0 ||event.body.indexOf("ambobo")==0 || event.body.indexOf("walang utak")==0 || event.body.indexOf("Walang utak")==0 || event.body.indexOf("send bold")==0 || event.body.indexOf("Send bold")==0 || event.body.indexOf("😆")==0 || event.body.indexOf("😂")==0 || event.body.indexOf("🤣")==0 || event.body.indexOf("😂😂")==0 || event.body.indexOf("😂😂😂")==0 || event.body.indexOf("😂😂😂😂😂")==0 || event.body.indexOf("🤣🤣")==0 || event.body.indexOf("🤣🤣🤣")==0 || event.body.indexOf("🤣🤣🤣🤣")==0 || event.body.indexOf("😆😆")==0 || event.body.indexOf("😆😆😆")==0 || event.body.indexOf("😆😆😆😆")==0 || event.body.indexOf("HAHAHA")==0 || event.body.indexOf("hahaha")==0 || event.body.indexOf("hehehe")==0 || event.body.indexOf("Hahaha")==0 || event.body.indexOf("hehehe")==0 || event.body.indexOf("🤣😂")==0 || event.body.indexOf("😆🤣")==0 || event.body.indexOf("😂🤣😂")==0 || event.body.indexOf("😆🤣😂")==0 || event.body.indexOf("😂🤣😅")==0 || event.body.indexOf("😆😂🤣")==0 && !bot.includes(event.senderID))  {
		var msg = {
				body: ""
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😹", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }[