const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('BLACK')
.setTitle(`** Eğlence Komutları **`)
.setImage("https://cdn.discordapp.com/attachments/681362755940646932/808694180276207656/standard.gif")
.setDescription(`

** | c!8ball |** Bota Soru Sorarsınız

** | c!adamasmaca |** Adam Asmaca Oynarsınız

** | c!yazıtura |** Yazı Tura Oynarsınız

** | c!token |** Botun Tokenini Öğrenirsiniz




`)
message.channel.send(yardım)

  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['eğlence'],
  permLevel: 0
};

exports.help = {
  name: 'YSADHASHDARDDASHLDPASIMASHDOPSAĞMĞĞĞM120ORF*PFQIOKSPEĞDOASGEĞA0SIHOKPSA0POKONDĞOASPGBSOAPGDOIOASPĞBPD0BSOOAIĞMĞ',
  description: 'la yardım komutu nolabilir başka',
  usage: 'eğlence '
}; 


