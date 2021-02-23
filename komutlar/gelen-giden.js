const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');

exports.run = async (client, message, args) => {
 let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;

  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`<:Gokturk_hayir:> Bu komutu kullanabilmek için "\`Sunucuyu Yönet\`" yetkisine sahip olmalısın.`);
  let resimligc = db.fetch(`resimligc_${message.guild.id}`)
  
    if(args[0] === "sıfırla") {
    if(!resimligc) {
      message.channel.send(`<:Gokturk_hayir:> Ayarlanmayan şeyi sıfırlayamazsın.`)
      return
    }
    
    db.delete(`resimligc_${message.guild.id}`)
    message.channel.send(`<:Gokturk_evet:> Resimli Gelen-Giden Kanalı Başarıyla Sıfırlandı.`)
    return
  }
  let kanal = message.mentions.channels.first()
    if (!kanal) {
        return message.channel.send(`<:Gokturk_hayir:> Gelen-Giden kanalı olarak ayarlamak istediğin kanalı etiketlemelisin. \`${prefix}vkanal #kanal\``)
    }
    db.set(`resimligc_${message.guild.id}`, kanal.name)
    message.channel.send(`<:Gokturk_evet:> Artık Resimli Gelen-Giden ${kanal} Kanalına Gönderilecek.`)
  
};
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['hoşgeldin-ayarla'],
    permLevel: 3
};

exports.help = {
  name: 'vkanal',
  description: 'Mod log kanalını ayarlar.',
  usage: 'vkanal <#kanal>'
}