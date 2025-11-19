 const fs = require("fs");
module.exports.config = {
	name: "taha",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Arun", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 100, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("ayesha") ||
     react.includes("Boss") || 
     react.includes("BOSS") || 
     react.includes("ayesha") ||
     react.includes("admin") || 
react.includes("Admin")) {
		var msg = {
				body: "★𝗢𝘄𝗻𝗲𝗿ﮩ٨ـﮩ💚💖ـ٨\n\n✦🌸===『*★🌸◉❖TAHA≛𝐊𝐇𝐀𝐍❖◉✦\n\n★★᭄\n𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐋𝐈𝐍𝐊 𝐌𝐄𝐑𝐈 𝐁𝐎𝐒𝐒 𝐊𝐀😁�🥰https://www.facebook.com/profile.php?id=apk bf hun yawr`",
				attachment: fs.createReadStream(__dirname + `/noprefix/8e2558ff8750da7e5d22e519cca16380.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙈", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
