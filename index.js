const Discord = require("discord.js");
const client = new Discord.Client();

require('dotenv').config();

const config = {
	token: "<TOKEN>" // Có thể dùng .env file để verify token bằng process.env.token thay vì nhập token vào "TOKEN"
};

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

    // Thực hiện các mã pin đã được đặt
    bot.clickWindow(p1, 0, 0)
    bot.clickWindow(p2, 0, 0)
    bot.clickWindow(p3, 0, 0)
    bot.clickWindow(p4, 0, 0);

    // Cho bot vào server
    setTimeout(() => { bot.chat('/2y2c') }, 10*1000)

    setTimeout(() => { bot.clickWindow(10,0,0) }, 12*1000);
});

bot.on('end', () => {
    console.log('end')
})

bot.on('message', msg => {
    console.log(msg.toString())
})


client.login(config.token).catch(err => console.log(err));
client.on("error", (e) => { console.error(e) });