const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
  let fadeaway = ("c!")
  
const yardım = new Discord.MessageEmbed()
.setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
.setThumbnail("")
.setColor('BLACK')
.setImage("https://cdn.discordapp.com/attachments/681362755940646932/808694180276207656/standard.gif")
.setDescription(`** Yetkili Kayıt Sistemi Kullanımı**

 ** | c!yetkili-kayıt-kanal-ayarla #kanal |** Üyelerin Kayıt Olacağı Kanal

 ** | c!yetkili-kayıt-log-ayarla #kanal|** Üyeler Kayıt Olunca Bildirim Yollanan Kanal

** | c!yetkili-giriş-mesajı #kanal |** Hg Mesajının Atılacağı Kanal.

 ** | c!kayıt-yetkili-rol-ayarla @rol |** Kullanıcıyı Kayıt Edecek Olan Rol

 ** | c!kayıt-erkek-rol-ayarla @rol |** Kayıt Olan Erkek Üyeye Verilecek Rol

 ** | c!kayıt-kadın-rol-ayarla @rol |** Kayıt Olan Kadın Üyeye Verilecek Rol

 ** | c!yetkili-kayıt-alınacak-rol-ayarla @rol |** Kayıt Olan Kullanıcıdan Alınacak Rol
 
 ** | c!kayıtbilgi | c!kayıtbilgi @kullanıcı |** Kullanıcının Kaç Kişiyi Kayıt Ettiğini Gösterir
 
 ** | c!yetkili-kayıt-sistemini-kapat |** Kayıt Sistemini Kapatır ve Tüm Ayarları Sıfırlar
 

 



`)
message.channel.send(yardım)

  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetkilikayıtsistemi'],
  permLevel: 0
};

exports.help = {
  name: 'yetkilikayıt-sistemi',
  description: 'la yardım komutu nolabilir başka',
  usage: 'yetkili-kayıt-sistemi '
}; 


