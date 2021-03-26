const Discord = require("discord.js");
const client = new Discord.Client();

require('dotenv').config();

const config = {
	token: process.env.TOKEN, // Discord token
	ip: process.env.ip // Server IP
};

var delay = require('delay')

var mineflayer = require('mineflayer')


client.on('ready', () => {
	console.log('Bot online!');
});

const bot = mineflayer.createBot({
    host: '2y2c.org',
    port: 25565,
    username: "APILoginByMoon",
    version: "1.12.2"
});

bot.on('windowOpen', () => {
    /* 
     * Nhập 4 số mã pin. 
     * Ví dụ: var p1 = 1;
     */
    // var p1 = 
    // var p2 =
    // var p3 =
    // var p4 =

    bot.clickWindow(p1, 0, 0)
    // console.log(p1)
    delay(1000)
    bot.clickWindow(p2, 0, 0)
    // console.log(p2)
    delay(1000)
    bot.clickWindow(p3, 0, 0)
    // console.log(p3)
    delay(1000)
    bot.clickWindow(p4, 0, 0, () => { console.log(p4); console.log('success'); logged++;});
});

bot.on('end', () => {
    console.log('end')
})

bot.on('message', msg => {
    console.log(msg.toString())
})


client.login(config.token).catch(err => console.log(err));
client.on("error", (e) => { console.error(e) });