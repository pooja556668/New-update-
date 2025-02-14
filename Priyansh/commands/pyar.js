module.exports.config = {
    name: "Pyar",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "Hammad",
    description: "5 Translation: Constantly tag a friend for the bar\nThat person can be called soul calling",
    commandCategory: "nsfw",
    usages: " please @mention",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("To @mention 1 person you love ", event.threadID);
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Meri Jan me shiro krti hon tm se pyar bhari baten krna💋");
setTimeout(() => {a({body: "Me smjh nai pa rha k tumay dekh k mujy itna acha kyu mehsoos hota hai💚 । 🥰।" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "‎Meri jan mera dil krta hai k tere honton ko choomo tere seene pe sir rakh k so jaon🙈🥀🥰 😍..🙈🥀🥰   😍.." + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "‎༉༎༉😽༉༎༉😽!! Mere Dil ki lakeerein mit rahi hain tere lazawaal muhabat me 🙈 ༅༎•❤️🌸🐰🙈 ༅༎•❤️🌸🐰" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "‎Her Din her pal mujy tmari zaroort hai!😽!" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "‎~🖤 Me tm se asmaano ki wusat jitni muhabat karti hon🐰🦋🥰" + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "Me tm se pyar krn gi zindagi ki her umer me!💖tm meri chahat ho🥀🌸🥀🌸 " + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "‎- Meri Muhabat aisi hai tmary liye 😍🥀- k kbhi bhool na paon gi tmy marty dam tk 😊❤️i Love You Jan😘" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "me tmari ankhon ki khobsourti me dhoob jana chahti hon👀❤️🩹 🤟" + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "Jis din tm mery pyar ko smjh jao gy – me simit jaon gi! 🙂🌸" + " " + name, mentions: arraytag})},23000);
setTimeout(() => {a({body: "Me janna chahti hon. 😥🌸 – k zindagi k akhri safay pe kia likha hai.💔😌" + " " + name, mentions: arraytag})},26000);  
setTimeout(() => {a({body: "‎︵🦋シ-Mat Rona kisi k liye..!😇🙂- ye ksi ne kaha tha 🐰✨ lekin din a akhir me phr b mujy tmari zaroort ho gi 😊🦋︵🦋❤️🩹" + " " + name, mentions: arraytag})},29000);
  setTimeout(() => {a({body: "In logon ko seene se lagany ka waqt hai agr thori c b dair ho gai to sb khatam ho jay ga!💔😢" + " " + name, mentions: arraytag})},32000);
  setTimeout(() => {a({body: "‎∞──🔐✨🦋──∞ 🌺{·(Meri hamesha se hi aik favorite line rahi hai k)·}🌺___Bina Trust k Pyar be mahni hai 🙂 Haq k bina koi b rishta adhoora hai-!😌 🥀" + " " + name, mentions: arraytag})},35000);
  setTimeout(() => {a({body: " Asmaan me sitaron ka milaab rangeen raaton me or ik muhabat ka khel Pyari c subha ko geela kr gya. " + " " + name, mentions: arraytag})},38000);
  setTimeout(() => {a({body: "-Damagh ka sakoon sb se haseen sakoon hai..❤️-or mujy ye sakoon sirf tmari muhabat me milta hai.🥀" + " " + name, mentions: arraytag})},41000);
  setTimeout(() => {a({body: " Muhabat humari jaise hamesha khoobsurat aur khushiyon se bhari nahi hoti, balky kabhi-kabhi mushkil aur imtehanon se bhi guzarti hai. 🥰❤️🖤" + " " + name, mentions: arraytag})},44000);
  setTimeout(() => {a({body: " Husn ka koi mukhtalif rang nahi hai - Khuda ki takhleeq khoobsurat hai, jaise aap ho.. 😊" + " " + name, mentions: arraytag})},47000);
  setTimeout(() => {a({body: "Me janna chahti hon. 😥🌸 – k hamari muhabat ki akhri intihaa kia ho gi.💔😌" + " " + name, mentions: arraytag})},50000);
  setTimeout(() => {a({body: "‎∞──🔐✨🦋──∞ 🌺{·( Hamesha Pasandida Line)·}🌺___ Pyar bina bharose ke be-maqsad hai or🙂 Haqooq ke baghair rishta bekar hai -!😌" + " " + name, mentions: arraytag})},53000);
  setTimeout(() => {a({body: "✨🐰-!<Is Line Pe End hai🍒'-🐻- 🦋🖤__ Tm dekhny ki baat krty ho , mujhe to tmari muskurahat se b pyaar hai!🖤🌸🤍🌸🥰" + " " + name, mentions: arraytag})},56000);
  setTimeout(() => {a({body: " Dair se qareeb aana, agar yeh ek qanoon hai, toh mohabbat aur nafrat me mohabbat baazi le jaye gi 😊😢" + " " + name, mentions: arraytag})},59000);
  setTimeout(() => {a({body: " Muj se sab kuch krny ke baad akela chhor diya hai 🙂💔🥀Aj wo poori tarah se kisi or ka hai😔💔🥀" + " " + name, mentions: arraytag})},62000);
  setTimeout(() => {a({body: "✨🐰-!<Is Line Pe End hai🍒'-🐻- 🦋🖤Aasman chaand aur sitaron se khoobsurat hai, baagh mein khoobsurat phool hain. Or is sb me ko dekhny k baad mujy tmari mohabbat ne nikhaar dia,,, if you don't forget🖤🌸🤍🌸🥰" + " " + name, mentions: arraytag})},65000);
  setTimeout(() => {a({body: "︵༎ຶ💚🌻❥︎✔︎•_Zindagi khoobsurat hai jab aap k pass man marzi ka partner hai:)🐰🍒_‎︵༎ය💚🌻❥︎✔︎•__Zindagi khoobsurat hai jab aap k pass man marzi ka partner hai:)🐰🍒__Zindagi khubsurat hai!! Agar tum mere saath ho😻✨💛🌸🥰" + " " + name, mentions: arraytag})},68000);
  setTimeout(() => {a({body: "I love u Jan😏😏 Hum sath jiyee gy sath mareingy 🤷 ♂️ 🤷‍♂️" + " " + name, mentions: arraytag})},71000);
  setTimeout(() => {a({body: "Aik din sb khuwaishien poori ho jain gi 🖤 𝐈𝐧 𝐒𝐚𝐡 𝐀𝐥𝐥𝐚𝐡__Jan ☺️🌺" + " " + name, mentions: arraytag})},74000);
  setTimeout(() => {a({body: " Agr waqt hai toh aapko us shakhs ko qubool karna chahiye jise aap mohabbat karte hain, agar der ho gayi hai toh sab kuch kho do gy💔😢" + " " + name, mentions: arraytag})},29000);
  setTimeout(() => {a({body: " Apny ap ko dusron ke liye bachana mohabbat ka naam hai. ।" + " " + name, mentions: arraytag})},77000);
setTimeout(() => {a({body: " Mohabbat do dilon ki milap hai, jahan ek bina doosre ke Adhhooora hota hai " + " " + name, mentions: arraytag})},80000);
 setTimeout(() => {a({body: "Pyar me takleef zyada hai par is takleef me itna hi maza b hai "  + name, mentions: arraytag})},83000);
  setTimeout(() => {a({body: "Pyar Hawa ki tarah hai, Tm isay mehsoos to kr sakty ho par dekh nai sakty" + " " + name, mentions: arraytag})},86000);
  setTimeout(() => {a({body: "Pyar denay mein lenay se zyada khushi hai.❤️" + " " + name, mentions: arraytag})},89000);
  setTimeout(() => {a({body: " Duniya mein bohot se qisam ki zulm hain. Mohabbat ki saza ka azab sab se bura azab hai. Is zalimiyat ke khilaf kuch kehna mumkin nahi, sirf bardasht kiya ja sakta hai " + " " + name, mentions: arraytag})},92000);
  setTimeout(() => {a({body: " Haqiqat itni sakht hoti hai ke kabhi-kabhi dil mein jama thodi si muhabbat bhi bebas ho jati hai aur usay bayan karna mushkil ho jata hai " + " " + name, mentions: arraytag})},95000);
  setTimeout(() => {a({body: " Zindagi mein ek hi khushi hai, aur woh mohabbat hai aur usay jawab mein paana." + " " + name, mentions: arraytag})},98000);
  setTimeout(() => {a({body: " Ishq mein toh be shumaari deewangi hai, lekin us deewangi ke peeche bhi kuch wajood hai.." + " " + name, mentions: arraytag})},101000);
  setTimeout(() => {a({body: "Agar aap apne aap se mohabbat nahi karte, to koi aur bhi nahi karega" + " " + name, mentions: arraytag})},104000);
  setTimeout(() => {a({body: " Muhabbat kabhi aisi hi nahi marti, muhabbat tab hi marti hai jab hum uska khayal rakhna bhool jatay hain. " + " " + name, mentions: arraytag})},107000);
  setTimeout(() => {a({body: " Mohabbat sirf chnd dinon ke liye hoti hai, lekin bhoolne mein waqt lagta hai " + " " + name, mentions: arraytag})},110000);
  setTimeout(() => {a({body: " Agar aap mujhe yaad rakhte hain, to mujhe kisi aur ki bhool se koi farq nahi parta. " + " " + name, mentions: arraytag})},113000);
  setTimeout(() => {a({body: " Jhilmilati bahar ki haseen shaam mein, jo darakhto ko sajati hain phool, woh phool behkte hain " + " " + name, mentions: arraytag})},116000);
  setTimeout(() => {a({body: " Agar tum qareeb nahi aate, to main tumhe kaise apna ek raaz bata sakti, maine apni saari mohabbat tumhare liye chhori hai " + " " + name, mentions: arraytag})},120000);
  setTimeout(() => {a({body: " Tum samajhtay ho magar beawaz rehtay ho, tum chalo jao aur mein nahi ruk sakta. " + " " + name, mentions: arraytag})},123000);
  setTimeout(() => {a({body: " O piyaare muskurahat, jigar ko jaga dene wali, phir kab tujhe dekhunga, itni jaldi mein kyun hai? " + " " + name, mentions: arraytag})},126000);
  setTimeout(() => {a({body: " Tumhari mohabbat sirf ek saal tak nahi, yeh mohabbat hamesha uske dil mein qaim rehni chahiye " + " " + name, mentions: arraytag})},129000);
  setTimeout(() => {a({body: " Is seene ke pehli dastak mein ek toofan iss seenay mein utth gaya hai, agar samajh nahi aaya to yeh toofan rukne ka naam nahi lega." + " " + name, mentions: arraytag})},132000);
  setTimeout(() => {a({body: " Kitni raaton tak main neend se jaag kar tumhare baare mein soch kar bitaye, sochta raha kab tum meray ho jao gay " + " " + name, mentions: arraytag})},135000);
}