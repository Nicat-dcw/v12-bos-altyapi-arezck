const Discord = require('discord.js');
const qdb = require('quick.db');
let tarih = new Date().toLocaleString("tr-TR", { timeZone: "Asia/Istanbul"});
exports.run = async(client, message, args) => {
  var nick = message.member.nickname
  if(!nick){
    var nick = message.author.username
  }
var başarılı = client.arez.başarılı
var başarısız = client.arez.başarısız
if(!qdb.has(`dil_${message.guild.id}`)){
  var neden = args.slice(0).join(' ')
  if(!neden) return message.channel.send(
  new Discord.MessageEmbed()
    .setColor(başarısız)
    .setAuthor(`${client.user.username} AFK Sistemi`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
    .setTitle("<a:hayirr:811134331866578974> Başarısız!")
    .setDescription("<a:unlem:821085126091735090> Bir AFK nedeni belirtmelisin!")
    .setFooter(`${message.author.tag} istedi!`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
  )
  qdb.set(`afkzaman_${message.author.id}`, tarih)
  qdb.set(`nick_${message.author.id}`, nick)
  qdb.set(`afknedeni_${message.author.id}`, neden)
  if(message.author.id !== message.guild.owner.id){
    message.member.setNickname("[AFK]" + nick)
  }
  return message.channel.send(
  new Discord.MessageEmbed()
    .setColor(başarılı)
    .setAuthor(`${client.user.username} AFK Sistemi`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
    .setTitle("<a:807962707923042354:810110731117789264> Başarılı!")
    .setDescription(`<a:okee:810110613186543627> Başarıyla AFK moduna girildi! AFK Nedeni: \`${neden}\``)
    .setFooter(`${message.author.tag} istedi!`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
  )}
  else {
      var neden = args.slice(0).join(' ')
  if(!neden) return message.channel.send(
  new Discord.MessageEmbed()
    .setColor(başarısız)
    .setAuthor(`${client.user.username} AFK System`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
    .setTitle("<a:hayirr:811134331866578974> Unsuccesful!")
    .setDescription("<a:unlem:821085126091735090> You have to give an AFK reason!")
    .setFooter(`${message.author.tag} wanted!`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
  )
  qdb.set(`afkzaman_${message.author.id}`, tarih)
  qdb.set(`nick_${message.author.id}`, nick)
  qdb.set(`afknedeni_${message.author.id}`, neden)
  if(message.author.id !== message.guild.owner.id){
    message.member.setNickname("[AFK]" + nick)
  }
  return message.channel.send(
  new Discord.MessageEmbed()
    .setColor(başarılı)
    .setAuthor(`${client.user.username} AFK System`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
    .setTitle("<a:807962707923042354:810110731117789264> Succesful!")
    .setDescription(`<a:okee:810110613186543627> Successfully entered AFK mode! AFK Reason: \`${neden}\``)
    .setFooter(`${message.author.tag} wanted!`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
  )
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  kategori: "Moderasyon",
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "afk",
  description: "AFK olursunuz.",
  usage: "(prefix)afk <neden>",
  category: ""
}