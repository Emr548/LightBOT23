const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» Light BOT *EĞLENCE* menüsü')
.setTimestamp()
.addField('» d!sorusor', 'Bota Soru sorarsınız ve cevaplar')
.addField('» d!ilginçbilgi', 'İlginç bir bilgi öğrenirsin')
.addField('» d!şanslısayı', 'Şanslı sayını öğrenirsin')
.addField('» d!ağla', 'Botu ağlatırsınız')
.addField('» d!renk', 'renk kodunun hangi renk olduğunu gösterir')
.setFooter('© 2020 Light Bot', client.user.avatarURL())
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
  name: 'moderasyon',
  description: 'Tüm komutları gösterir.',
  usage: 'moderasyon'
};