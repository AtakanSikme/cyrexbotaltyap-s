const Discord = require('discord.js');
const talkedRecently = new Set();
exports.run = function(client, message,  args) {
let codeworkprefix = args.slice(0).join('!');
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Bu özelliği kullanabilmek için \`Mesajları Yönet\` yetkisine sahip olmalısınız.`);
       if (talkedRecently.has(message.author.id)) {
           return message.channel.send(`${message.author.username} Bu Özelliği 4 Saniyede Bir Kullanabilirsin!`, )
    } else {
        talkedRecently.add(message.author.id);
        setTimeout(() => {
        message.delete();
          talkedRecently.delete(message.author.id);
        }, 4000);
    }
if(!args[0]) return message.channel.send(`${message.author.username} Lütfen 1-99 Arası Sayı Girin!`, )
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Başarıyla \`${args[0]}\` adet mesaj **silindi!**`).then(msg => msg.delete(5000));
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 2
};

exports.help = {
  name: 'sil',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'sil'
};