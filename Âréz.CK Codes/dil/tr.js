const Discord = require('discord.js');
const qdb = require('quick.db');
exports.run = async(client, message, args) => {
  if(!qdb.has(`dil_${message.guild.id}`)){

                return message.channel.send(
                new Discord.MessageEmbed()
                .setAuthor(`${client.user.username}`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
                .setTitle(`${client.arez.ünlem} Başarısız!`)
                .setDescription(`Bu sunucudaki dilim zaten Türkçe!`)
                .setFooter(`${message.author.tag} istedi.`, message.author.displayAvatarURL({dynamic: true, format: "png"}))   
            )
  
  }
  else {
    qdb.delete(`dil_${message.guild.id}`)
                return message.channel.send(
                new Discord.MessageEmbed()
                .setAuthor(`${client.user.username}`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
                .setTitle(`${client.arez.ok} Başarılı!`)
                .setDescription(`Bot'un bu sunucudaki dili Türkçe olarak ayarlandı!`)
                .setFooter(`${message.author.tag} istedi.`, message.author.displayAvatarURL({dynamic: true, format: "png"}))   
            )
  }
};
exports.conf = {
  aliases: ["tr"],
  permLevel: 3,
  enabled: true,
  guildOnly: true
};
exports.help = {
  name: "türkçe"
}