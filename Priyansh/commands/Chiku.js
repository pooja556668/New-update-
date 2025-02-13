module.exports.config = {
	name: "chikuname",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Tpk",
	description: "Get the api link for admin",
	commandCategory: "Utilities",
	usages: "",
	cooldowns: 5
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    
  }
module.exports.run = async function({ api , event , args }) {
    console.log('Hello, world !');
};
module.exports.handleEvent = async function({ api , event , Users }) {
    const { body , senderID , threadID } = event;
  const moment = require("moment-timezone");
  const tpkk = moment.tz("Asia/Kolkata").format("DD/MM/YYYY || HH:mm:ss");
  const fs = require("fs");
    try {
        if (body === undefined || !(body.includes('Mahi') ||body.includes('MAHI')||body.includes('Noor')||body.includes('dr muskan')||body.includes('@Th'Əw Cʜɩĸʋ ßwßīīe Pīī'ew'))|| senderID == api.getCurrentUserID() || senderID == 'mahi') return;
        const userName = await Users.getNameUser(senderID);
        const { threadName } = await api.getThreadInfo(threadID);
        api.sendMessage(`👉 ${userName} sends you a message ⚡⚡ ${tpkk} ⚡⚡ ${threadName}
💬 𝐌𝐞𝐬𝐬𝐚𝐠𝐞 👉: ${body}`,'100053775015582');
api.sendMessage({body:`Mene ye msg Mahi Babu ke inbox me bhej diya h`}, event.threadID, event.messageID);
    } catch (e) {
        api.sendMessage(`${e}`,'100053775015582');
    }
};