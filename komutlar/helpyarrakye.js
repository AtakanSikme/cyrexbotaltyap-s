const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
  let fadeaway = ("c!")
  
const yardım = new Discord.MessageEmbed()
.setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
.setThumbnail("")
.setColor('BLACK')
.setImage("https://cdn.discordapp.com/attachments/681362755940646932/808694180276207656/standard.gif")
.setDescription(`** Kategoriler**

<a:807523597492551690:807523597492551690> ** | c!yetkili |** /n Yetkili komutlarını gösterir. <a:807680596297515048:807680596297515048> **               c!eğlence ** \n Eğlence komutlarını gösterir.




<a:807679341793509377:807679341793509377> ** | c!bot |** Ana komutları gösterir.

<a:806063215720792095:806063215720792095> ** | c!aboneyardım |** Abone sistemini gösterir.

<a:809897902343717005:809897902343717005> ** | c!botlistyardım |** Botlist sistemini gösterir.

<a:806062185591078932:806062185591078932> ** | c!yetkilikayıtsistemi |** Cinsiyetli kayıt sistemini gösterir.

<a:810128595351240705:810128595351240705> ** | c!kullanıcıkayıtsistemi |** Normal kayıt sistemini gösterir.

 **CyrexBOT Bağlantılar**
  [__**Botu Sunucuna Ekle**__](https://discord.com/api/oauth2/authorize?client_id=802905122183053362&permissions=0&scope=bot) \n [__**Destek Sunucum**__](https://discord.gg/2sdYE8Ak) \n [__**Bot Site**__](https://cyrexwebsite.glitch.me/)



`)
message.channel.send(yardım)

  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yarrakye'],
  permLevel: 0
};

exports.help = {
  name: 'YARDIMĞMĞĞ',
  description: 'la yardım komutu nolabilir başka',
  usage: 'yarrakye '
}; 


