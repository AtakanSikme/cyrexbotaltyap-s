const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, params) => {
  
  const yardım = new Discord.MessageEmbed()
  
  let prefix = ayarlar.prefix
 
  if (!params[0]) {
    message.channel.sendCode("yardım",`DDOS SYSTEM MENÜSÜ
                    
​
✅DDOS Sistemi Otomatik Olarak Aktiftir Sadece ddos-system Diye Bir Tane Metin Kanalı Açınız.           
​
`);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.sendCode('yardım', `= ${command.help.name} =
​
Hakkında  :: ${command.help.description}
Kullanım  :: ${prefix}${command.help.usage}`);
    }
  }
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'ddos-sistemi',
  description: 'Botun yardım komutlarını gösterir.',
  usage: 'ddossistemi'
};