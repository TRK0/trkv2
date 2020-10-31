
const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#ffd100') 
.setAuthor(`TRK Davet Sistemi`, client.user.avatarURL())
.setDescription(`<a:tools:750076071721828452> TRK botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Davet Kanal__`,`<a:gear:750076062716788807> \`${prefix}davet-kanal\` Sunucunuzda Kaç Kişinin Ne Kadar Daveti Olduğunu Gösteren Kanalı Ayarlar`,true)
.addField(`__Kanal Sıfırla__`,`<a:gear:750076062716788807> \`${prefix}davet-kanal-sıfırla\` Sunucunuzda Kaç Kişinin Ne Kadar Daveti Olduğunu Gösteren Kanalı Sıfırlar`,true)
.addField(`__Davet Ekle__`,`<a:gear:750076062716788807> \`${prefix}davet-ekle\` Etiketlediğiniz Kişinin Davet Sayısını Arttırır`,true)
.addField(`__Davetlerim__`,`<a:gear:750076062716788807> \`${prefix}davetlerim\` Sunucuda Kaç Davetiniz Olduğunu Gösterir`,true)
.addField(`__Davet Rütbe Ekle__`,`<a:gear:750076062716788807> \`${prefix}rütbe-ekle\` Sunucunuzda Davet Sayısına Göre Rol Verme Sistemine Rol Ekler`,true)
.addField(`__Rütbe Sil__`,`<a:gear:750076062716788807> \`${prefix}rütbe-sil\` Sunucunuzda Davet Sayısına Göre Rol Verme Sisteminden Rol Siler`,true)
.addField(`__Bilgilendirme__`,`<a:tools:750076071721828452> \`${prefix}davet\` | TRK'yi Sunucunuza Davet Edersiniz\n<a:tools:750076071721828452> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:tools:750076071721828452> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`https://media0.giphy.com/media/BoFvkj8wsRZ6eDp3x8/giphy.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "davetsistemi",
  aliases: []
}
