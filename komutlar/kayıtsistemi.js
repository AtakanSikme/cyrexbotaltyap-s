const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
  let fadeaway = ("c!")
  
const yardım = new Discord.MessageEmbed()
.setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
.setThumbnail("")
.setColor('BLACK')
.setImage("https://cdn.discordapp.com/attachments/681362755940646932/808694180276207656/standard.gif")
.setDescription(`** Kullanıcı Kayıt Sistemi Kullanımı**

 ** | c!kayıt-kanal-ayarla #kanal |** Üyelerin Kayıt Olacağı Kanal
 
 ** | c!kayıt-log-ayarla #kanal|** Üyeler Kayıt Olunca Bildirim Yollanan Kanal

** | c!giriş-mesajı #kanal |** Hg Mesajının Atılacağı Kanal.

 ** | c!kayıt-verilecek-rol-ayarla @rol |** Kayıt Olan Kullanıcıya Verilecek Rol
 
 ** | c!kayıt-sistemini-kapat |** Kayıt Sistemini Kapatır ve Tüm Ayarları Sıfırlar
 
 



`)
message.channel.send(yardım)

  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcıkayıtsistemi'],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcıkayıt-sistemi',
  description: 'la yardım komutu nolabilir başka',
  usage: 'kullanıcı-kayıt-sistemi '
}; 


