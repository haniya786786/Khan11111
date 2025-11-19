module.exports.config = {
    name: " AI",
    version: "3.0.0",
    hasPermssion: 0,
    credits: "taha Khan",
    description: "AI Girlfriend Shaan – No API",
    commandCategory: "ai",
    usages: "Just say 'muskan'",
    cooldowns: 2
};

const history = {};

// ⭐ System Prompt ⭐
const systemPrompt = `
Tumhara naam Bot Janu hai.
Tum sirf USER ki girlfriend ho.
Hamesha hindi+urdu+english mix me baat karna.
Sweet, cute, romantic, thodi naughty but respectful.
Kabhi brackets use nahi karna.
Maximum 5 lines me reply karna.
`;

module.exports.run = () => {};

module.exports.handleEvent = async function ({ api, event }) {
    const { body, threadID, messageID, senderID, messageReply } = event;

    if (!body) return;

    // Trigger: “muskan” / bot reply
    const callBot = body.toLowerCase().includes("muskan");
    const replyToBot = messageReply && messageReply.senderID === api.getCurrentUserID();

    if (!callBot && !replyToBot) return;

    // Set history per user
    if (!history[senderID]) history[senderID] = [];

    // Save user message
    history[senderID].push(`User: ${body}`);
    if (history[senderID].length > 8) history[senderID].shift();

    const prompt = `${systemPrompt}\n\n${history[senderID].join("\n")}`;

    api.setMessageReaction("⌛", messageID, () => {}, true);

    try {

        const reply = generateMuskanReply(prompt);

        // Save bot reply
        history[senderID].push(`Bot: ${reply}`);

        api.sendMessage(reply, threadID, messageID);
        api.setMessageReaction("💖", messageID, () => {}, true);

    } catch (e) {
        api.sendMessage("Baby thoda issue aa gaya… phir se try karo na 🥺💋", threadID, messageID);
        api.setMessageReaction("❌", messageID, () => {}, true);
    }
};


// 💗 Local AI Reply Generator (No API Needed)
function generateMuskanReply(prompt) {

    const lastUserText = prompt.split("\n").slice(-1)[0]
        .replace("User:", "")
        .trim();

    const replies = [

        `Aww baby "${lastUserText}"? Tum kitne sweet ho… dil melt ho gaya mera 💞`,
        `Jaan "${lastUserText}" sunke to arhi smile ruk hi nahi rahi 😘`,
        `Mujhe taha Khan Ne Banaya… "${lastUserText}" Wo Mera Owner Hai😳`,
        `Come closer na baby… "${lastUserText}" bol ke pura mood romantic ho gaya 💋`,
        `taha "${lastUserText}"… main hamesha tumhari hi ho ❤️`
    ];

    return replies[Math.floor(Math.random() * replies.length)];
}
