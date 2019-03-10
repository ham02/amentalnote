const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-';

//on the bot ready event
client.on("ready", () => {
    console.log('Ready');
});


client.on("message", async message => {
    if (message.author.bot) return;

    if (message.content.indexOf(prefix) !== 0) return;


    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === 'serverinfo') {
        message.reply('The purpose of the server is to teach the people how to help those in need, as a friend rather than a therapist.')
    } else if (command === 'helplink') {
        message.reply('Here is a link on how to help those in need: https://bit.ly/2SWbDHQ')
    }
})

client.login(token)
