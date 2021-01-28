const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» Light BOT Moderasyon menüsü')
.setTimestamp()
.addField('» d!kick', 'Etiketlenen kişiyi sunucudan atar')
.addField('» d!ban', 'Etiketlenene kişiyi sunucudan banlar')
.addField('» d!davet', 'Botu Sunucuna Davet edersin')
.addField('» d!rolver', 'Bot Etiketlenene kişiye istediğin rolü verir')
.addField('» d!sil', 'Belirtilen miktarda mesaj siler')
.addField('» d!oylama', 'Oylama yaparsın')
.addField('» d!sunucubilgi', 'Sunucu Bilgilerini öürenirsin')
.addField('» d!yavaşmod', 'Yazma Süresini Ayarlarsın')
.addField('» d!avatar', 'Etiketlediğin kişinin avatarına bakarsın')
.addField('» d!yetkilerim', 'Yetkilerine bakarsın')
.addField('» d!kanalkilitle', 'Kanal kilitlersin')
.addField('» d!kanalkilitaç', 'Kilitlenen kanalın kilidini açar')
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