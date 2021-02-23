const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("RED")
  .setTitle("**CyrexBOT Bağlantılar**")
  .setDescription("[__**Botu Sunucuna Ekle**__](https://discord.com/api/oauth2/authorize?client_id=802905122183053362&permissions=0&scope=bot) \n [__**Destek Sunucum**__](https://discord.gg/2sdYE8Ak)")
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: '',
  usage: 'linkler'
};