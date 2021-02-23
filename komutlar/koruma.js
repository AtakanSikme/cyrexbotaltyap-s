const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
  let fadeaway = ("c!")
  
const yardım = new Discord.MessageEmbed()
.setFooter(`Yakında Daha Fazla Gelecek !`, client.user.avatarURL)
.setThumbnail("")
.setImage("https://cdn.discordapp.com/attachments/681362755940646932/808694180276207656/standard.gif")
.setColor('BLACK')
.setTitle(`** Güvenlik Komutları  **`)
.setDescription(`

** | c!emoji-koruma aç |** Sunucudaki Emojilerin Silinmesine Engel Olur.

** | c!kanal-koruma aç |** Sunucudaki Kanalların Silinmesine Engel Olur.

** | c!rol-koruma aç |** Sunucudaki Rollerin Silinmesine Engel Olur.

** | c!banlimit | ** Banlimiti Ayarlar.

** | c!sağ-tık-ban-koruması | ** Ayarlamanıza Gerek Yok Oto Çalışır Tek Gerekli Şey Botun Rolünü En Üste Almanız.




`)
message.channel.send(yardım)

  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['güvenlik','koruma'],
  permLevel: 0
};

exports.help = {
  name: 'güvenlik',
  description: 'la yardım komutu nolabilir başka',
  usage: 'güvenlik'
}; 


