const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
  let fadeaway = ("c!")
  
const yardım = new Discord.MessageEmbed()
.setAuthor(` Yetkili Komutları   `, message.author.avatarURL(({ format: 'png', dynamic: true, size: 1024 })))

.setThumbnail("")
.setColor('BLACK')
.setImage("https://cdn.discordapp.com/attachments/681362755940646932/808694180276207656/standard.gif")
.setDescription(`
__**${fadeaway}ban** | Etiketlediğiniz kişiyi sunucudan yasaklar__
**${fadeaway}banlist** | Sunucundan Banlanan üyeleri gösterir
**${fadeaway}emojiekle** | Sunucunuza belirttiğiniz link ve adda emoji yükler
**${fadeaway}kick** | İstediğiniz kişiyi sunucudan atar
**${fadeaway}oylama** | Oylama yapmanızı sağlar
**${fadeaway}reklamara** | Üyelerin Oynuyor ve Adlarındaki reklamları tarar
**${fadeaway}herkestenrolal** | Herkesten Rol Alır
**${fadeaway}herkeserolver** | Herkese Rol Verir
**${fadeaway}sunucukur** | Bot sunucunuzu baştan yapar
**${fadeaway}takmaad** |  Belirtilen kişinin takma adını değiştirir
**${fadeaway}sil** | Belirtilen miktar mesajı siler
**${fadeaway}sunucupanel** | Bot sunucunuza üye göstergesi paneli kurar




`)
message.channel.send(yardım)

  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetkilikomutları'],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'la yardım komutu nolabilir başka',
  usage: 'yetkili '
}; 


