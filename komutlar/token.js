const Discord = require('discord.js')
 
exports.run = async (client ,message, args) =>{

  
  const embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`Buyur Kardeşim Tokenin`)
  .setImage('https://cdn.discordapp.com/attachments/756466201105924108/757574229901181048/ekC59Fi-sC3B6zlC3BCk-yazarC4B1yC4B1m-buradakiler-beni-eleC59Ftiremez_836814.png')
  message.channel.send(embed)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['botoken'],
 permLevel: 0
};
 
exports.help = {
 name: 'token',
 description: 'Bot Pingi',
 usage: 'token'
};
