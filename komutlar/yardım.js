 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`TRK Yardım Menüsü`, client.user.avatarURL())
.setColor('#ffd100')
.setDescription(`<a:envelope_with_arrow:750076071721828452> TRK botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Genel Komutlar__`,`<a:bookmark_tabs:750076057679429656> \`${prefix}genel\``,true)
.addField(`__Mod Komutları__`,`<a:tools:750076062716788807> \`${prefix}moderasyon\` `,true)
.addField(`__Guard Komutları__`,`<a:guard:750076071721828452> \`${prefix}guard\`  `,true)
.addField(`__Müzik Komutları__`,`<a:musical_note:750076057679429656> \`${prefix}müzik\` `,true)
.addField(`__Eklenti Komutları__`,`<a:gear:750076062716788807> \`${prefix}eklenti\`  `,true)
.addField(`__Prefix Değiştir__`,`<a:toolbox:750076071721828452> \`${prefix}prefix\` `,true)
.addField(`__Bilgilendirme__`,`<a:envelope_with_arrow:750076071721828452> \`${prefix}davet\` | TRK'yi Sunucunuza Davet Edersiniz\n<a:link:750076071721828452> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:tools:750076071721828452> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
  .setImage(`https://media4.giphy.com/media/BoFvkj8wsRZ6eDp3x8/giphy.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "yardım",
  aliases: []
}