module.exports.config = {
  name: "owner",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "... - Long LTD",
  description: "War In Chatbox",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
  dependencies: {
      "fs-extra": "",
      "axios": ""
  }
}

module.exports.run = async function({ api, args, Users, event}) {
var mention = Object.keys(event.mentions)[0];

let name =  event.mentions[mention];
  var arraytag = [];
      arraytag.push({id: mention});
  var a = function (a) { api.sendMessage(a, event.threadID); }
a("🔰𝙊𝙒𝙉𝙀𝙍 𝙄𝙉𝙁𝙊🔰\n\n ◉❖🅧D 🅚I🅝G🧚🩷🪿❖◉\ (─━━◉❖🅧D≛🅚I🅝G❖◉━━─)(•◡•)\n\n𝐀𝐠𝐞 : 18\n\nTAHA KHAN :)\n\n : ()\n\n :\n\nTAHA KHAN :-👇👇 \n\n𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦 𝐋𝐢𝐧𝐤:-👉 :https://instagram.com/_APK BF HUN YAWR__?igshid=OGQ5ZDc2ODk2ZA==");


}
