const db = require("quick.db");
const Discord = require("discord.js");
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => {
  let prefix = (await db.fetch(`prefix.${message.guild.id}`)) || fynx.prefix;
  let eklenti = new Discord.MessageEmbed()
    .setColor("#ffd100")
    .setAuthor(`TRK Genel Komutlar`, client.user.avatarURL())
    .setDescription(
      `<a:envelope_with_arrow:750076071721828452> TRK botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__Komut Sayısı__`,
      `<a:tools:750076071721828452> \`${prefix}komutlar\` Botun Komut Sayısını Gösterir`,
      true
    )
    .addField(
      `__Davet Et__`,
      `<a:envelope_with_arrow:750076071721828452> \`${prefix}davet\` Botumuzu Davet Edersiniz`,
      true
    )
    .addField(
      `__Bot Bilgi__`,
      `<a:link:750076071721828452> \`${prefix}botbilgi\` Botumuzun İstatistikleri`,
      true
    )
    .addField(
      `__Bot Shard__`,
      `<a:link:750076071721828452> \`${prefix}shard\` Shard Bilgilerini Gösterir`,
      true
    )
    .addField(
      `__Profil__`,
      `<a:link:750076071721828452> \`${prefix}profil\` Kullanıcı Profilinizi Gösterir`,
      true
    )
    .addField(
      `__Oylama__`,
      `<a:link:750076071721828452> \`${prefix}oylama\` Sunucuda Oylama Başlatır`,
      true
    )
    .addField(
      `__Duyuru__`,
      `<a:mega:750076071721828452> \`${prefix}duyuru\` Sunucuda Duyuru Yapar`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `<a:envelope_with_arrow:750076071721828452> \`${prefix}davet\` | TRK'yi Sunucunuza Davet Edersiniz\n<a:link:750076071721828452> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:tools:750076071721828452> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`
    )
    .setImage(`https://media4.giphy.com/media/BoFvkj8wsRZ6eDp3x8/giphy.gif`)
    .setThumbnail(client.user.avatarURL);
  message.channel.send(eklenti);
};
exports.config = {
  name: "genel",
  aliases: []
};
