const Discord = require("discord.js");
const qdb = require("quick.db");
const { Database } = require("wio.db");
const wdb = new Database("ArezCK");
const config = require("../arezck.json");
module.exports = message => {
  const client = message.client;
  if (!message.guild) return;
  if(!qdb.has(`dil_${message.guild.id}`)){
    
    
    
  //--ETİKET PREFİX--\\
  if (
    message.content == `<@${client.user.id}>` ||
    message.content == `<@!${client.user.id}>`
  ) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLACK")
        .setAuthor(`${client.user.username} Etiket Prefix Sistemi`)
        .setDescription(`
      Prefix'im: !
      
      Sahibim; 
      \`427053194384769025\`
      <@!427053194384769025>
      
      `)
    );
  }
  //--ETİKET PREFİX--\\
  
  //--AFK--\\
  let user = message.mentions.users.first();
  var prefix = qdb.fetch(`prefix_${message.guild.id}`);
  if (!prefix) {
    var prefix = config.prefix;
  }
  if (message.content.startsWith(`${prefix}afk`)) return;
  var nick = message.member.nickname;
  if (!nick) {
    var nick = message.author.username;
  }
  if (qdb.has(`afknedeni_${message.author.id}`)) {
    qdb.delete(`afknedeni_${message.author.id}`);
    if (message.author.id !== message.guild.owner.id) {
      message.member.setNickname(qdb.fetch(`nick_${message.author.id}`));
    }
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLACK")
        .setAuthor(
          `${client.user.username} AFK Sistemi`,
          client.user.displayAvatarURL({ dynamic: true, format: "png" })
        )
        .setDescription(`<@!${message.author.id}> Geri Döndü! Artık AFK Değil.`)
    );
  }
  if (!user) return;
  if (
    message.content.includes(`<@${user.id}>`) ||
    message.content.includes(`<@!${user.id}>`)
  ) {
    var zaman = qdb.fetch(`afkzaman_${user.id}`);
    var sebep = qdb.fetch(`afknedeni_${user.id}`);
    if (sebep) {
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("BLACK")
          .setAuthor(
            `${client.user.username} AFK Sistemi`,
            client.user.displayAvatarURL({ dynamic: true, format: "png" })
          )
          .setDescription(
            `<a:unlem:821085126091735090> Bu kullanıcı; \n ${zaman} \n tarihinden beri AFK! \n\n**Sebebi;**\n \`\`\`${sebep}\`\`\``
          )
      );
    }
  }
  //--AFK--\\
    
    
  }
  else {
    
    
    
      //--ETİKET PREFİX--\\
  if (
    message.content == `<@${client.user.id}>` ||
    message.content == `<@!${client.user.id}>`
  ) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLACK")
        .setAuthor(`${client.user.username} Label Prefix System`)
        .setDescription(`
      My prefix: !
      
      My owner; 
      \`427053194384769025\`
      <@!427053194384769025>
      
      `)
    );
  }
  //--ETİKET PREFİX--\\
  
  //--AFK--\\
  let user = message.mentions.users.first();
  var prefix = qdb.fetch(`prefix_${message.guild.id}`);
  if (!prefix) {
    var prefix = config.prefix;
  }
  if (message.content.startsWith(`${prefix}afk`)) return;
  var nick = message.member.nickname;
  if (!nick) {
    var nick = message.author.username;
  }
  if (qdb.has(`afknedeni_${message.author.id}`)) {
    qdb.delete(`afknedeni_${message.author.id}`);
    if (message.author.id !== message.guild.owner.id) {
      message.member.setNickname(qdb.fetch(`nick_${message.author.id}`));
    }
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLACK")
        .setAuthor(
          `${client.user.username} AFK System`,
          client.user.displayAvatarURL({ dynamic: true, format: "png" })
        )
        .setDescription(`<@!${message.author.id}> is Back! Not AFK anymore.`)
    );
  }
  if (!user) return;
  if (
    message.content.includes(`<@${user.id}>`) ||
    message.content.includes(`<@!${user.id}>`)
  ) {
    var zaman = qdb.fetch(`afkzaman_${user.id}`);
    var sebep = qdb.fetch(`afknedeni_${user.id}`);
    if (sebep) {
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("BLACK")
          .setAuthor(
            `${client.user.username} AFK System`,
            client.user.displayAvatarURL({ dynamic: true, format: "png" })
          )
          .setDescription(
            `<a:unlem:821085126091735090> This user since; \n ${zaman} \n AFK! \n\n**Reason;**\n \`\`\`${sebep}\`\`\``
          )
      );
    }
  }
  //--AFK--\\
    
    
    
  }
};