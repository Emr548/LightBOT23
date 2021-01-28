const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL())
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const narcosağla = new Discord.MessageEmbed()
    .setAuthor('Siktir git sen kimsinde beni ağlatıyon')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
        .setImage(`https://media1.tenor.com/images/e5424a465f80ab6762c886ce20dfbdc2/tenor.gif?itemid=18675678`)
    return message.channel.send(narcosağla);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ağla',
  description: 'Bot U Ağlatırsınız',
  usage: 'ağla'
};
