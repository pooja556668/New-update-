module.exports.config = {
  name: "admin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "Friends Dp photos",
  commandCategory: "Random-IMG",
  usages: "bestie dp",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.ibb.co/hfNnxYN/b00aff06f18d6053e3d8ed45058b4c68.jpg", "https://i.ibb.co/jgk6rB0/7ce2390636d1a46a331662dbaaf693d6.jpg", "https://i.ibb.co/qRmVPbx/c2d197fceca703f0b167adf4a4e31821.jpg"
    ];
     var callback = () => api.sendMessage({body:`❤️𝐀𝐃𝐌𝐈𝐍 𝐈𝐍𝐅𝐎❤️

  🍒𝗠𝗥.. 𝗔𝗔𝗥𝗬𝗔𝗡 𝗕𝗔𝗕𝗨🥀•

𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 https://www.facebook.com/Mr.Aaryan.babu : 

𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐂𝐨𝐧𝐭𝐚𝐜𝐭 : +916009815052`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };