
/**
 *            2Y2C-Login-API
 *  Yêu cầu giữ credit về source code.
 * 
 * 
 * Project: https://github.com/MoonVN571/2Y2C-Login-API
 */
const Discord = require("discord.js");
const client = new Discord.Client();

var mineflayer = require('mineflayer');

require('dotenv').config();

const config = { // Đổi file ".env.example" thành ".env" để dùng .env
	token: process.env.TOKEN, // Có thể dùng .env file để verify token bằng "TOKEN" vì nhập token vào process.env.token thay
        pin: process.env.PIN
};

if(!config.token) return console.log("Kiểm tra TOKEN của bạn đã đặt hay chưa.");

client.on('ready', () => {
	console.log('Bot online!');
});

const bot = mineflayer.createBot({ // Tạo bot
    host: '2y2c.org',
    port: 25565,
    username: "EnderWork", // Đặt tên của proxy bot
    version: "1.16.4" // Version hiện tại của server
});

bot.on('windowOpen', async (window) => { // Thực hiện khi khung login hiện ra
    // Sửa dòng leak memory
    window.requiresConfirmation = false;

    /* 
     * Nhập 4 số mã pin. Nhưng cần nhập trong .env 
     * Cách nhập: Thí dụ pin là 9999, thì đặt phần pin là 9,9,9,9 ( Thí dụ: PIN=9 9 9 9 )
     */
    var v = config.pin;
    var p1 = v.split(" ")[0]; // lấy mã trước dấu cách
    var p2 = v.split(" ")[1]; // lấy mã sau dấu cách thứ 1
    var p3 = v.split(" ")[2]; // lấy mã sau dấu cách thứ 2
    var p4 = v.split(" ")[3]; // lấy mã sau dấu cách thứ 3


    if(!p1 || !p2 || !p3 || !p4) return console.log("Vui lòng kiểm tra lại mã pin, phải ghi đúng như example, hãy đặt nếu như bạn chưa đặt nó.");

    // Thực hiện các mã pin đã được đặt
    bot.clickWindow(p1, 0, 0);
    bot.clickWindow(p2, 0, 0);
    bot.clickWindow(p3, 0, 0);
    bot.clickWindow(p4, 0, 0);

    // Cho bot vào server
    setTimeout(() => { bot.chat('/2y2c') }, 15*1000); // Dùng /2y2c sau khi login xong

    setTimeout(() => { bot.clickWindow(10,0,0) }, 20*1000); // Sau đó bấm vào khung kia để vào server
});

bot.on('end', () => { // Log khi bot end
    console.log('end');
});

bot.on('message', msg => { // Log message từ chat game
    console.log(msg.toString());
});

// Login bot với TOKEN Discord
client.login(config.token).catch(err => console.log(err));

// Log lỗi
client.on("error", (e) => console.error(e));

