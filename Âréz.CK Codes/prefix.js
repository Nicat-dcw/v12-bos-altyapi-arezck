const Discord = require('discord.js');
const Database = require('plasma-db');
const db = new Database("./database.json");
const config = require('../arezck.json')
exports.run = async(client, message, args) => {
    const başarısız = client.arez.başarısız
    const başarılı = client.arez.başarılı
    const hayır = client.arez.hayırr
    const ünlem = client.arez.ünlem
    var a = db.fetch(`prefix_${message.guild.id}`)
    if(!a){
      var p = config.prefix
    }
    else {
      var p = a
    }
    if(!args[0]) return message.channel.send(
    new Discord.MessageEmbed()
      .setColor(başarısız)
      .setAuthor(`${client.user.username} Prefix Sistemi`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
      .setTitle(`${hayır} Başarısız!`)
      .setDescription(`${ünlem} Bir seçenek belirtmeniz gerekli! \n\n \`${p}prefix ayarla  /  ${p}prefix sıfırla\``)
      .setThumbnail(client.user.avatarURL())
      .setFooter(`${message.author.tag} istedi!`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
    )
    if(args[0] === "ayarla"){
    var s = args.slice(1).join(' ')
    if(!s) return message.channel.send(
      new Discord.MessageEmbed()
      .setColor(başarısız)
      .setAuthor(`${client.user.username} Prefix Sistemi`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
      .setTitle(`${hayır} Başarısız!`)
      .setDescription(`${ünlem} Bir prefix belirtmeniz gerekli! \n\n \`${p}prefix ayarla !!\``)
      .setThumbnail(client.user.avatarURL())
      .setFooter(`${message.author.tag} istedi!`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
    )
      if(s === p) return message.channel.send(
        new Discord.MessageEmbed()
      .setColor(başarısız)
      .setAuthor(`${client.user.username} Prefix Sistemi`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
      .setTitle(`${hayır} Başarısız!`)
      .setDescription(`${ünlem} Belirttiğiniz prefix ile şuanki prefix zaten aynı!`)
      .setThumbnail(client.user.avatarURL())
      .setFooter(`${message.author.tag} istedi!`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
      )
        db.set(`prefix_${message.guild.id}`, s)
      return message.channel.send(
        new Discord.MessageEmbed()
      .setColor(başarılı)
      .setAuthor(`${client.user.username} Prefix Sistemi`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
      .setTitle(`${client.arez.ok} Başarılı!`)
      .setDescription(`**${p}** olan prefix başarıyla **${s}** olarak ayarlandı!`)
      .setThumbnail(client.user.avatarURL())
      .setFooter(`${message.author.tag} istedi!`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
      )
    }
    if(args[0] === "sıfırla"){
      if(db.has(`prefix_${message.guild.id}`)){
      db.delete(`prefix_${message.guild.id}`)
      return message.channel.send(
        new Discord.MessageEmbed()
      .setColor(başarılı)
      .setAuthor(`${client.user.username} Prefix Sistemi`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
      .setTitle(`${client.arez.ok} Başarılı!`)
      .setDescription(`Prefix başarıyla sıfırlandı! Şuanki prefix: \`${client.arez.prefix}\``)      
      .setThumbnail(client.user.avatarURL())
      .setFooter(`${message.author.tag} istedi!`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
      )
      }
      else return message.channel.send(
        new Discord.MessageEmbed()
      .setColor(başarısız)
      .setAuthor(`${client.user.username} Prefix Sistemi`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
      .setTitle(`${hayır} Başarısız!`)
      .setDescription(`${ünlem} Prefix zaten ayarlanmamış! Şuanki prefix: \`${client.arez.prefix}\``)
      .setThumbnail(client.user.avatarURL())
      .setFooter(`${message.author.tag} istedi!`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
      )
    }
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 4
};
exports.help = {
    name: "prefix"
}