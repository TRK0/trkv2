const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
    
    const embed = new Discord.MessageEmbed()
    .setTitle(`TRK - Komut Sayısı`)
    .setDescription('**\n TRK Bot | Toplam**  **`' + client.commands.size + '`** **Komut Vardır!**')
    .setColor("#ffd100")
    .setThumbnail('https://i.ibb.co/s2qGRFx/kod.png')
    .setTimestamp()
    .setFooter("TRK | Gelişmiş Türkçe Bot | 2020" , client.user.avatarURL())

    return message.channel.send(embed);
    
};

exports.config = {
  name: 'komutlar',
  aliases: ['komut-sayısı']
};

