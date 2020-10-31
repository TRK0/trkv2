const db = require("quick.db");
const Discord = require("discord.js");
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => {
  let prefix = (await db.fetch(`prefix.${message.guild.id}`)) || fynx.prefix;
  let eklenti = new Discord.MessageEmbed()
    .setAuthor(`TRK Koruma Komutları`, client.user.avatarURL())
    .setColor("#ffd100")
    .setDescription(
      `<a:envelope_with_arrow:750076071721828452> TRK botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__Rol Koruma__`,
      `<a:link:750076071721828452> \`${prefix}rol-koruma\` Belirtilen Rolü Korur`,
      true
    )
    .addField(
      `__Anti Raid__`,
      `<a:link:750076071721828452> \`${prefix}anti-raid\` Yasaklı kişiler girdiğinde haber verir`,
      true
    )
    .addField(
      `__Anti Raid Bot İzni__`,
      `<a:link:750076071721828452> \`${prefix}bot-izni\` Yasaklı bir bot girdiğinde haber verir`,
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
  name: "guard",
  aliases: []
};
