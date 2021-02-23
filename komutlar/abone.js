const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
  let fadeaway = ("c!")
  
const yardım = new Discord.MessageEmbed()
.setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
.setThumbnail("")
.setColor('BLACK')
.setImage("https://cdn.discordapp.com/attachments/681362755940646932/808694180276207656/standard.gif")
.setDescription(`**Abone Sistemi**

 ** | c!abonerol |** Abone Rolünü ayarlarsınız.

** | c!abonelog |** Abone Log'u ayarlarsınız.

 ** | c!abone-y-rol |** Abone Yetkili Rolü Ayarlarsınız

 ** | c!abone |** Abone rolü verirsiniz

 



`)
message.channel.send(yardım)

  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['aboneyardımmenüsü'],
  permLevel: 0
};

exports.help = {
  name: 'aboneyardım',
  description: 'la yardım komutu nolabilir başka',
  usage: 'aboneyardım '
}; 