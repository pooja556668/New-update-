module.exports.config = {
    name: "enjoy",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "Meera Rajput",
    description: "5 বারের জন্য ক্রমাগত বন্ধুর ট্যাগ ট্যাগ করুন\nসেই ব্যক্তিকে আত্মা কলিং বলা যেতে পারে",
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
    if(!mention) return api.sendMessage("HELLO BABY MAI AA GYA AAPSE PYAR KARNE💓🌞", event.threadID);
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("HELLO MERI JAAN AB NA HO PARESHAN MAI AA GYA PYAR KRNE TUMKO 💓🍓");
setTimeout(() => {a({body: "ARE MERI JAAN MAI AA GYA AAPKA BABU" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "‎KAISI HO MERE BACHE KI MUMMY" + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "‎ TUMHARI GULABI HOTHO PAR UMMAH MERI JAAN" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "‎ARE MERI JAAN GUSSA NAHI KARTE BABU " + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: " AJAO BABY MERI BAHO ME TUMKO SUKUN DUNGA🤬" + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "ARE MERI BABU CHALO NA HONYMOON PE CHALTE HAI " + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "-SUNO NA BABU PTA NA MUJHE KYA HO GYA TUMHARE BINA ACHA NA LGTA" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "MAI TUMKO ITNA PYAR KARTA HU JITNA TUM APNE BACHE KO KAROGI" + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: " MAI TUMSE MILNE KE LIYE AA RHA HU BABY TUM READY HO JAO" + " " + name, mentions: arraytag})},23000);
setTimeout(() => {a({body: "- TUM MERI DIL JAAN DHADHKAN KAREJA FEFDA KIDNY SAB KUCH HO BABY" + " " + name, mentions: arraytag})},26000);  
setTimeout(() => {a({body: "ARE BABY CHALO MALL ME TUMKO SHOPING KRA DUNGA" + " " + name, mentions: arraytag})},29000);
  setTimeout(() => {a({body: "-TUM BAHUT KHUBSURAT LAG RHI HO AAJ MAKEUP KIYA HAI KYA" + " " + name, mentions: arraytag})},32000);
  setTimeout(() => {a({body: " CHALO BABY MAI TUMKO AAJ PARK ME GHUMAOONGA" + " " + name, mentions: arraytag})},35000);
  setTimeout(() => {a({body: "CHALO BABY KAHI BHAG CHALTE HAI DONO IS DUNIYA SE DUR" + " " + name, mentions: arraytag})},38000);
  setTimeout(() => {a({body: "-TUM JAB TIRCHHI NIGAHO SE DEKHTI HO HAMKO KUCHH KUCH HOTA HAI 🧐" + " " + name, mentions: arraytag})},41000);
  setTimeout(() => {a({body: " BABY JAB APNI SHADI HOGI TO 12 BACHE PAIDA KARUNGA MAI" + " " + name, mentions: arraytag})},44000);
  setTimeout(() => {a({body: " SUNO NA MERI JAAN MAI NAHANE CHALUNGA TO TUM SABUN LGA DENA" + " " + name, mentions: arraytag})},47000);
  setTimeout(() => {a({body: "MERA DIL KARTA HAI TUMKO APNI BAHO ME KAS LU BABU" + " " + name, mentions: arraytag})},50000);
  setTimeout(() => {a({body: "TUM JAB LAL DRESS PAHNTI HO NA EKDAM GAS SELLENDER LAGTI HO" + " " + name, mentions: arraytag})},53000);
  setTimeout(() => {a({body: "BABY AISA GUSSA NA KARTE HAI MERE PASS AAO KISS KAR LU AAPKO" + name, mentions: arraytag})},56000);
  setTimeout(() => {a({body: "AB BAS BHI KARO BABY BACHE KI JAAN LOGI KYA MAN JAO" + name, mentions: arraytag})},59000);
  setTimeout(() => {a({body: "TUMHARI AANKHO ME JO NASHA HAI USKO DEKHKE PURI DUNIYA BHUL JATA HU" + name, mentions: arraytag})},62000);
  setTimeout(() => {a({body: " BABY SUNO NA MERA MAN KAR RHA TUMKO BAHO ME BHARKE CHUMLOO" + name, mentions: arraytag})},65000);
  setTimeout(() => {a({body: "ARE MERI DHANIYA PUDINA CHALO CHALE SWIMMING PUL ME NAHAYENGE" + name, mentions: arraytag})},68000);
  setTimeout(() => {a({body: " MERI BABU MAI TUMHARI KALI BALO ME ULJHNA CHAHTA HU" + name, mentions: arraytag})},71000);
  setTimeout(() => {a({body: " TUMHARI HOTHO PE KISS KARKE KUCHH ALAG HI FEEL HOTA HAI" + name, mentions: arraytag})},74000);
  setTimeout(() => {a({body: "CHALO BABY AB TUM MERE BACHE KI MUMMY HAI LOVE YOU MERI JAAN" + name, mentions: arraytag})},29000);
}