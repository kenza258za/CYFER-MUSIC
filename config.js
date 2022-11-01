module.exports = {
TOKEN: "OTQ2MTkwNzc3ODQ1OTU2NjQ4.G_QMcC.jajdYz26aJzah3RPl7pnvduf7ffK73t-G-akjc",
ownerID: "843819153194483732", //write your discord user id.
botInvite: "https://bit.ly/3gUXr3t ", //write your discord bot invite.
mongodbURL: "mongodb+srv://rlx:rlx@rlx2.yulr9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", //write your mongodb url.
status: '❤️',
commandsDir: './commands', //Please don't touch
language: "en", //en, tr

opt: {
DJ: {
commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume'] //Please don't touch
},

voiceConfig: {
leaveOnEnd: false, //If this variable is "true", the bot will leave the channel the music ends.
autoSelfDeaf: false, //IF YOU WANT TO DEAF THE BOT, set false to true.

leaveOnEmpty: { //The leaveOnEnd variable must be "false" to use this system.
status: false, //If this variable is "true", the bot will leave the channel when the bot is offline.
cooldown: 20000, //1000 = 1 second
},

leaveOnTimer: { //The leaveOnEnd variable must be "false" to use this system.
status: false, //If this variable is "true", the bot will leave the channel when the bot is offline.
cooldown: 20000, //1000 = 1 second
}
},

maxVol: 150, //You can specify the maximum volume level.
loopMessage: true,

discordPlayer: {
ytdlOptions: {
quality: 'highestaudio', //Please don't touch
highWaterMark: 1 << 25 //Please don't touch
}
}
}
}
