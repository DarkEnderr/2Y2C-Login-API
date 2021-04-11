const Discord = require("discord.js");
const client = new Discord.Client();

var mineflayer = require('mineflayer');

require('dotenv').config();

const config = { // Đổi file "".env.example" thành ".env" để dùng .env
	token: process.env.TOKEN // Có thể dùng .env file để verify token bằng "TOKEN" vì nhập token vào process.env.token thay
};

client.on('ready', () => {
	console.log('Bot online!');
});

const bot = mineflayer.createBot({ // Tạo bot
    host: '2y2c.org',
    port: 25565,
    username: "<USERNAME>", // Đặt tên của proxy bot
    version: "1.16.4" // Version hiện tại của server
});

bot.on('windowOpen', () => { // Thực hiện khi khung login hiện ra ( inventory )
    /* 
     * Nhập 4 số mã pin. Nhưng cần nhập trong .env 
     * Cách nhập: Thí dụ pin là 9999, thì đặt phần pin là 9,9,9,9 ( Ví dụ: PIN=9,9,9,9 )
     */
    var p1 = config.pin.split(",")[0]; 
    var p2 = config.pin.split(",")[1];
    var p3 = config.pin.split(",")[2];
    var p4 = config.pin.split(",")[3];

    // Thực hiện các mã pin đã được đặt
    bot.clickWindow(p1, 0, 0);
    bot.clickWindow(p2, 0, 0);
    bot.clickWindow(p3, 0, 0);
    bot.clickWindow(p4, 0, 0);

    // Cho bot vào server
    setTimeout(() => { bot.chat('/2y2c') }, 10*1000); // Dùng /2y2c sau khi login xong

    setTimeout(() => { bot.clickWindow(10,0,0) }, 12*1000); // Sau đó bấm vào khung kia để vào server
});

bot.on('end', () => { // Log khi bot end
    console.log('end');
});

bot.on('message', msg => { // Log message từ chat game
    console.log(msg.toString());
});

client.login(config.token).catch(err => console.log(err));
client.on("error", (e) => { console.error(e) });