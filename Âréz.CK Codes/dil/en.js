const Discord = require('discord.js');
const qdb = require('quick.db');
exports.run = async(client, message, args) => {
  if(qdb.has(`dil_${message.guild.id}`)){

                return message.channel.send(
                new Discord.MessageEmbed()
                .setAuthor(`${client.user.username}`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
                .setTitle(`${client.arez.ünlem} Unsuccessful!`)
                .setDescription(`My language on this server is already English!`)
                .setFooter(`${message.author.tag} wanted.`, message.author.displayAvatarURL({dynamic: true, format: "png"}))   
            )
  
  }
  else {
    qdb.set(`dil_${message.guild.id}`, "en")
                return message.channel.send(
                new Discord.MessageEmbed()
                .setAuthor(`${client.user.username}`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
                .setTitle(`${client.arez.ok} Succesful!`)
                .setDescription(`Bot's language on this server is set to English!`)
                .setFooter(`${message.author.tag} wanted.`, message.author.displayAvatarURL({dynamic: true, format: "png"}))   
            )
  }
};
exports.conf = {
  aliases: ["en"],
  permLevel: 3,
  enabled: true,
  guildOnly: true
};
exports.help = {
  name: "english"
}