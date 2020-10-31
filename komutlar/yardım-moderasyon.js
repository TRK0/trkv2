
 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#ffd100') 
.setAuthor(`TRK Moderasyon Komutları`, client.user.avatarURL())
.setDescription(`<a:envelope_with_arrow:750076071721828452> TRK botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Sayaç__`,`<a:tools:750076062716788807> \`${prefix}sayaç\` Sunucunuza Sayaç Kurarsınız ve Anlık Bilgi Alırsınız`,true)
.addField(`__Otomatik Rol__`,`<a:tools:750076062716788807> \`${prefix}otorol\` Suncunuza Yeni Gelen Üyelere Belirlediğiniz Rölü Verir`,true)
.addField(`__Ban__`,`<a:tools:750076062716788807> \`${prefix}ban\` Sunucunuzda Belirtiğiniz Kişiyi Yasaklar`,true)
.addField(`__Kick__`,`<a:tools:750076062716788807> \`${prefix}kick\` Sunucunuzda Belirtiğiniz Kişiyi Kickler`,true)
.addField(`__Ban Kaldırma__`,`<a:tools:750076062716788807> \`${prefix}unban\` yazarak Sunucunuzda Belirtiğiniz Kişinin Banını Açar`,true)
.addField(`__Mod Log__`,`<a:tools:750076062716788807> \`${prefix}modlog\` Sunucunuzda Moderasyon Kayıt Logununu Tuttar`,true)
.addField(`__Ban Say__`,`<a:tools:750076062716788807> \`${prefix}bansay\` Sunucunuzdan Kaç Kişi Ban Yemiş`,true)
.addField(`__Ban Sorgu__`,`<a:tools:750076062716788807> \`${prefix}bansorgu\` Kişinin Neden Banlandığını Gösterir`,true)
.addField(`__Küfür Engel__`,`<a:tools:750076062716788807> \`${prefix}küfürengel\` Küfür Edilmesini Tamamen Yasaklar.`,true)
.addField(`__Reklam Engel__`,`<a:tools:750076062716788807> \`${prefix}reklamengel\` Reklam Yapılmasını Tamamen Yasaklar.`,true)
.addField(`__Reklam Kick__`,`<a:tools:750076062716788807> \`${prefix}reklam-kick\` Reklam Yapan Kişiyi 3 Uyarıdan Sonra Kickler`,true)
.addField(`__Mesaj Temizleme__`,`<a:tools:750076062716788807> \`${prefix}sil\` Belirtiğiniz Kadar Mesaj Siler`,true)
.addField(`__Yavaş Mod__`,`<a:tools:750076062716788807> \`${prefix}yavaşmod\` Kanala Yazı Süre Limiti Koyar.`,true)
.addField(`__Sa-As__`,`<a:tools:750076062716788807> \`${prefix}sa-as\` Sunucuzda Selam Verenlere Selam Der`,true)
.addField(`__Yasaklı Tag__`,`<a:tools:750076062716788807> \`${prefix}yasaklı-tag\` Sunucuza Belirli Taga Sahip Üyeler Giremez`,true)
.addField(`__Bilgilendirme__`,`<a:envelope_with_arrow:750076071721828452> \`${prefix}davet\` | TRK'yi Sunucunuza Davet Edersiniz\n<a:link:750076071721828452> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:tools:750076071721828452> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`https://media4.giphy.com/media/BoFvkj8wsRZ6eDp3x8/giphy.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "moderasyon",
  aliases: []
}
