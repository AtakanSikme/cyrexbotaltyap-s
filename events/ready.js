 const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

module.exports = client => {
 setInterval(function() {
}, 8000);
  var msgArray = [
    


"🤔 c!yardım Beta 0.8.3",
"🎉 Yenilikler : c!yetkilikayıtsistemi | c!kullanıcıkayıtsistemi ",
  "✨ c!botlistyardım | c!aboneyardım",

 ];

 setInterval(() => {
  var rastgeleOyun = Math.floor(Math.random() * msgArray.length);
     client.user.setStatus("online");
  client.user.setActivity(`${msgArray[rastgeleOyun]}`, { type: 'LISTENING' ,})
}, 15000);
    console.log(`Cyrexbot Giriş Yaptı.`);
}
  