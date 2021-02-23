const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('Cyrex Botlist Yardım Komutları')
.setTimestamp()
.addField('c!bot-onayla botid sahipid ', 'Botu Onaylarsınız')
.addField('c!bot-reddet botid sahipid sebep', 'Botu Reddedersiniz')
.addField('c!bot-ekle', 'Bot eklersiniz')
.addField('c!botlist-ayar', 'Ayarlama Komutlarını Gösterir')
.setImage('https://cdn.discordapp.com/attachments/681362755940646932/808694180276207656/standard.gif')
.setFooter('CyrexBot', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'botlistyardım',
  description: 'Tüm komutları gösterir.',
  usage: 'botyardımmoruks'
};