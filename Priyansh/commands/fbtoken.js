const axios = require('axios');

module.exports.config = {
    name: "fbtoken",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "James fixed by HiroshiKim", // api credit jake idol pogi
    description: "Facebook Token Getter",
    commandCategory: "admin",
    usages: "[uid] [password]",
    cooldowns: 2,
};

module.exports.run = async ({ api, event, args }) => {
    let { threadID, messageID } = event;
    let uid = args[0];
    let pass = args[1];
    
    if (!uid || !pass) {
        api.sendMessage(`Missing input!\nUsage: ${global.config.PREFIX}fbtoken [uid] [password]`, threadID, messageID);
        return;
    }
    
    api.sendMessage("Please wait...", threadID, messageID);

    try {
        const response = await axios.get(`http://6v7tokengetter.jake2024.repl.co/token?uid=${uid}&pass=${pass}`);
        const tokenData = response.data.tokenData.message.data;
        const at = tokenData.access_token;
        const session = tokenData.cookies;
        const eaad = tokenData.access_token_eaad6v7;

        api.sendMessage(`Access Token (eaad6v7): ${eaad}\nAccess Token: ${at}\nCookies: ${session}`, threadID, messageID);

    } catch (error) {
        return api.sendMessage(`An error occurred: ${error}`, threadID, messageID);
    }
};