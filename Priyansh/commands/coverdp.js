module.exports.config = {
  name: "coverdp",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "Boys Dp photos",
  commandCategory: "Random-IMG",
  usages: "Boy dp",
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
"https://i.imgur.com/0nqgeuP.jpg","https://i.imgur.com/HS6objA.jpg","https://i.imgur.com/hE4O4Gn.jpg","https://i.imgur.com/vB8cXcP.jpg","https://i.imgur.com/u1Yl2K4.jpg","https://i.imgur.com/dW3PiSZ.jpg","https://i.imgur.com/mpcxQKn.jpg","https://i.imgur.com/Zrsempv.jpg","https://i.imgur.com/KxLAgba.jpg","https://i.imgur.com/O6M6Bsb.jpg","https://i.imgur.com/HTsXsCn.jpg","https://i.imgur.com/3gxPUL8.jpg","https://i.imgur.com/mZh8Sqe.jpg","https://i.imgur.com/3BEd8Dm.jpg","https://i.imgur.com/6fGvEnk.jpg","https://i.imgur.com/A9DMndw.jpg","https://i.imgur.com/K5cg5Nm.jpg","https://i.imgur.com/B6Z0DBL.jpg","https://i.imgur.com/YuZ43r9.jpg","https://i.imgur.com/LJU0Nxu.jpg","https://i.imgur.com/Apnyf07.jpg","https://i.imgur.com/Ratm0QU.jpg","https://i.imgur.com/kpCq2vO.jpg","https://i.imgur.com/tjoOmew.jpg","https://i.imgur.com/2JMKwhV.jpg","https://i.imgur.com/h2VuH6m.jpg","https://i.imgur.com/Mfg3Hl1.jpg","https://i.imgur.com/WtmWdhj.jpg","https://i.imgur.com/XNYv8ux.jpg","https://i.imgur.com/ypz77wj.jpg","https://i.imgur.com/Cvgo0q0.jpg","https://i.imgur.com/AFIelGq.jpg","https://i.imgur.com/mGrA4sv.jpg","https://i.imgur.com/kB9ZE8Y.jpg","https://i.imgur.com/ARUjJwZ.jpg","https://i.imgur.com/9pNT7RM.jpg","https://i.imgur.com/6RuLT86.jpg","https://i.imgur.com/Vmalect.jpg","https://i.imgur.com/oaCopvP.jpg","https://i.imgur.com/W5bZUjU.jpg","https://i.imgur.com/F9Bj1Yv.jpg","https://i.imgur.com/jcfXWmQ.jpg","https://i.imgur.com/Tp4FVNg.jpg","https://i.imgur.com/40ooje2.jpg","https://i.imgur.com/npPdZjs.jpg","https://i.imgur.com/CKiJy8B.jpg","https://i.imgur.com/hIyXD4M.jpg","https://i.imgur.com/pg2tyXT.jpg","https://i.imgur.com/lsdHDCf.jpg","https://i.imgur.com/PAkiumQ.jpg","https://i.imgur.com/Qvo6eqL.jpg","https://i.imgur.com/Z1p1tN1.jpg","https://i.imgur.com/3bShUi7.jpg","https://i.imgur.com/sKYhZKo.jpg","https://i.imgur.com/dxDuP1d.jpg","https://i.imgur.com/IOOhzCn.jpg","https://i.imgur.com/fXflUJt.jpg","https://i.imgur.com/QleYrDO.jpg","https://i.imgur.com/imPNc3a.jpg","https://i.imgur.com/gMvDG8f.jpg","https://i.imgur.com/6PqBkVa.jpg","https://i.imgur.com/DZp7ns2.jpg","https://i.imgur.com/olTu3Zh.jpg","https://i.imgur.com/9r5jiLV.jpg","https://i.imgur.com/SHlqqgz.jpg","https://i.imgur.com/AgApn45.jpg","https://i.imgur.com/NwNhN79.jpg","https://i.imgur.com/bwpJEhA.jpg","https://i.imgur.com/2XrVrFZ.jpg","https://i.imgur.com/a77jayb.jpg","https://i.imgur.com/jqrAf0w.jpg","https://i.imgur.com/gkLsB3X.jpg","https://i.imgur.com/7CCV98j.jpg","https://i.imgur.com/vWqLeNw.jpg","https://i.imgur.com/q9KOjYq.jpg","https://i.imgur.com/WBWQBJ6.jpg","https://i.imgur.com/sgKCbqz.jpg","https://i.imgur.com/qHEm9Oe.jpg","https://i.imgur.com/MmnaKlN.jpg","https://i.imgur.com/wWUPPXj.jpg","https://i.imgur.com/rXWTH0W.jpg","https://i.imgur.com/EzYAPmq.jpg","https://i.imgur.com/VZeI6JX.jpg","https://i.imgur.com/S4Ys8TN.jpg","https://i.imgur.com/tMGRPM1.jpg","https://i.imgur.com/UwfKBEv.jpg","https://i.imgur.com/t3IdjR4.jpg","https://i.imgur.com/Z9jQV7D.jpg","https://i.imgur.com/aPPPi3M.jpg","https://i.imgur.com/nRaM636.jpg","https://i.imgur.com/OuFxQn2.jpg","https://i.imgur.com/NtqAWgF.jpg","https://i.imgur.com/9t11KRw.jpg","https://i.imgur.com/EqD7aHJ.jpg","https://i.imgur.com/L7y2PNN.jpg","https://i.imgur.com/LpqJdtm.jpg","https://i.imgur.com/lwvirvZ.jpg","https://i.imgur.com/eRUcQxh.jpg","https://i.imgur.com/LzRgkfe.jpg","https://i.imgur.com/mS0VklT.jpg","https://i.imgur.com/yqv54uI.jpg","https://i.imgur.com/qkVXtsF.jpg","https://i.imgur.com/oLSVRpe.jpg"
     ];
     var callback = () => api.sendMessage({body:`💝 𝐌𝐚𝐝𝐞 𝐛𝐲 ༄𒁍≛⃝𝐃𝐫.𝐌𝐮𝐬𝐤𝐚𝐧`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };