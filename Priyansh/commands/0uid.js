module.exports.config = {
	name: "uid",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
	description: "Get User ID.",
	commandCategory: "Tools",
	cooldowns: 5
};

module.exports.run = function({ api, event }) {
	if (Object.keys(event.mentions) == 0) return api.sendMessage(`${event.senderID}`, event.threadID, event.messageID);attachment: await streamURL(`https://graph.facebook.com/${event.senderID}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)},event.threadID,event.messageID);
}
	else {
		for (var i = 0; i < Object.keys(event.mentions).length; i++) api.sendMessage(`${Object.values(event.mentions)[i].replace('@', '')}: ${Object.keys(event.mentions)[i]}`, event.threadID);
		return;
	
					),
				},