const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
    name: "admin",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Ullash",
    description: "Show Owner Info",
    commandCategory: "info",
    usages: "",
    cooldowns: 5
};

module.exports.run = async function({ api, event }) {
    var time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");

    var callback = () => api.sendMessage({
        body: `
┏━━━━━━━━━━━━━━━━━━━━━┓
┃      🌟 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 🌟      
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 👤 𝐍𝐚𝐦𝐞     : 𝐑𝐎𝐍𝐈
┃ 🚹 𝐆𝐞𝐧𝐝𝐞𝐫   : 𝐌𝐚𝐥𝐞
┃ ❤️ 𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧  : 𝐒𝐢𝐧𝐠𝐥𝐞
┃ 🎂 𝐁𝐢𝐫𝐭𝐡𝐝𝐚𝐲  : 01 Sep 2007 
┃ 🕌 𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧  : 𝐈𝐬𝐥𝐚𝐦
┃ 🎓 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 : 𝐇𝐒𝐂 (2023)
┃ 🏡 𝐀𝐝𝐝𝐫𝐞𝐬𝐬  :𝐒𝐢𝐫𝐚𝐣𝐠𝐚𝐧𝐣 
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🎭 𝐓𝐢𝐤𝐭𝐨𝐤  : [𝐂𝐥𝐢𝐜𝐤 𝐇𝐞𝐫𝐞](https://www.tiktok.com/@rana_vai.2.0?_t=ZS-8y1Qda3FlYO&_r=1)
┃ 🌐 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : [𝐂𝐥𝐢𝐜𝐤 𝐇𝐞𝐫𝐞](https://www.facebook.com/share/1A5C51XdNy/)
┃ ▶️ 𝐘𝐨𝐮𝐓𝐮𝐛𝐞 : [𝐂𝐥𝐢𝐜𝐤 𝐇𝐞𝐫𝐞](https://youtube.com/@farhad.vai2.0?si=zrIkLY-F-eTbgSO3)
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🕒 𝐔𝐩𝐝𝐚𝐭𝐞𝐝 𝐓𝐢𝐦𝐞: ${time}
┗━━━━━━━━━━━━━━━━━━━━━┛
        `,
        attachment: fs.createReadStream(__dirname + "/cache/1.png")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"));
  
    return request(encodeURI(`https://graph.facebook.com/100036047565461/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`))
        .pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
        .on('close', () => callback());
};
