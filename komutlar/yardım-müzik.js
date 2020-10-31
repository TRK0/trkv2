const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#ffd100') 
.setAuthor(`TRK Müzik Komutları`, client.user.avatarURL())
.setDescription(`<a:envelope_with_arrow:750076071721828452> TRK botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Müzik Oynat__`,`<a:notes:750076057679429656> \`${prefix}oynat\` İstediğiniz Şarkıyı Başlatır`,true)
.addField(`__Müziği Duraklat__`,`<a:notes:750076057679429656> \`${prefix}duraklat\` Şarkıyı Durdurur`,true)
.addField(`__Müziği Devam Ettir__`,`<a:notes:750076057679429656> \`${prefix}devam\` Şarkıyı Devam Ettirir`,true)
.addField(`__Müziği Geç__`,`<a:notes:750076057679429656> \`${prefix}atla\` Şarkıyı Atlar`,true)
.addField(`__Müziği Durdur__`,`<a:notes:750076057679429656> \`${prefix}durdur\` Şarkıyı Kapatıp Odadan Çıkar`,true)
.addField(`__Müzik Kuyruğu__`,`<a:notes:750076057679429656> \`${prefix}kuyruk\` Şarkı Kuyruğunu Gösterir`,true)
.addField(`__Müzik Döngüsü__`,`<a:notes:750076057679429656> \`${prefix}döngü\` Şarkıyı Döngüye Sokar`,true)
.addField(`__Ses Seviyesi__`,`<a:notes:750076057679429656> \`${prefix}ses\` Ses Seviyesini Ayarlarsınız`,true)
.addField(`__Kuyruğu Temizle__`,`<a:notes:750076057679429656> \`${prefix}kuyruk-temizle\` Kuyruk Listesini Temizler`,true)
.addField(`__Kuyruğu Karıştır__`,`<a:notes:750076057679429656> \`${prefix}karıştır\` Kuyruktaki Şarkıları Karıştırır`,true)
.addField(`__Bilgilendirme__`,`<a:envelope_with_arrow:750076071721828452> \`${prefix}davet\` | TRK'yi Sunucunuza Davet Edersiniz\n<a:link:750076071721828452> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:tools:750076071721828452> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`https://media4.giphy.com/media/BoFvkj8wsRZ6eDp3x8/giphy.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "müzik",
  aliases: []
}
