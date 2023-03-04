const { command, sleep, isPrivate, isUrl, Bitly, getJson, getBuffer } = require("../lib/");
let { execSync } = require('child_process')
const {MessageType} = require('@adiwajshing/baileys');

command({
    pattern: "getqr ?(.*)",
    fromMe: isPrivate,
    desc: "Get connection QR",
    type: "tool",
  }, async (message, match, m) => {
    for (let index = 0; index < 5; index++) {
      await sleep(30 * 1000);
      await message.sendFromUrl("https://alfa-project-alien-alfa.koyeb.app", {
        caption: "Scan within 20 seconds",
      });
    }
    return await message.treply("Your session is OVER");
  }
);

