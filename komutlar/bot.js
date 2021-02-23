const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
  let fadeaway = ("c!")
  
const yardım = new Discord.MessageEmbed()
.setFooter(`Yakında Daha Fazla Gelecek !`, client.user.avatarURL)
.setThumbnail("")
.setColor('BLACK')
.setImage("https://cdn.discordapp.com/attachments/681362755940646932/808694180276207656/standard.gif")
.setDescription(`**Ana Komutlar**

** | c!öneri |** Bot hakkındaki önerilerinizi bot sahiplerine ulaştırır

** | c!istatistik |** Botun istatistiklerini gösterir

** | c!token|** Botun tokenini öğrenirsiniz

** | c!ping |** Botun pingini gösterir

** | c!linkler |** Botla alakalı linkleri alırsınız






`)
message.channel.send(yardım)

  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot'],
  permLevel: 0
};

exports.help = {
  name: 'bot',
  description: 'la yardım komutu nolabilir başka',
  usage: 'bot'
}; 


