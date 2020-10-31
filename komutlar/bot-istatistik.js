const Discord = require("discord.js");
const moment = require("moment");
const ayarlar = require("../ayarlar/bot.json");
require("moment-duration-format");
exports.run = async (client, message, args) => {
  let lordcreative = new Discord.MessageEmbed()
    .setThumbnail(
      `https://cdn.discordapp.com/attachments/537352782848720897/766188718645706762/logo.jpg`
    )
    .addField(
      "__**Bot Verileri**__",
      `<a:white_small_square:750076071721828452> **Toplam Sunucu** **|**  **${
        client.guilds.cache.size
      }** \n <a:white_small_square:750076071721828452> **Toplam Kullanıcı** **|** **${client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString()}** \n <a:white_small_square:750076071721828452> **Toplam Kanal** **|** **${
        client.channels.cache.size
      }**`
    )
    .addField(
      "__**Bot Geliştiricisi**__",
      `<a:tools:750076071721828452> **Bot Sahibi** \ **Bot Geliştiricisi**  <@532557798295339019> \n **Tarık.#1907** \n`
    )
    .addField(
      "__**Sürümler**__",
      `<a:gear:750076071721828452> **Discord.js Sürümü** **|**  **v${Discord.version}** \**Node.js Sürümü** **|**  **${process.version}**`
    )
    .addField(
      "__**Gecikmeler**__",
      `<a:hourglass: **${client.ws.ping}** ms`,
      true
    )
    .addField(
      "**__Müzik Oynatılan__** ",
      "<a:musical_note:750076071721828452> " +
        client.voice.connections.size +
        " Sunucu",
      true
    )
    .setImage(`https://media4.giphy.com/media/BoFvkj8wsRZ6eDp3x8/giphy.gif`)
    .setColor("#ffd100");
  message.channel.send(lordcreative);
};

exports.config = {
  name: "botbilgi",
  aliases: []
};
