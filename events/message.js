const Discord = require("discord.js");
const ayarlar = require('../arezck.json');
const qdb = require('quick.db')
module.exports = message => {
    //--MESSAGE.JS--\\
    let client = message.client;
    if(message.guild){
    var a = qdb.fetch(`prefix_${message.guild.id}`)
    if(!a){
        var prefix = ayarlar.prefix
    }
    else {
        var prefix = a
    }
    }
  else { var prefix = ayarlar.prefix }
	if (!qdb.has(`dil_${message.guild.id}`)){
  if (message.author.bot) return
	if (!message.content.startsWith(prefix)) return;
	let command = message.content.split(" ")[0].slice(prefix.length);
	let params = message.content.split(" ").slice(1);
	let perms = client.elevation(message);
	let cmd;
  if(!client.commands.has(command)){/* */}
	if (client.commands.has(command)) {
	  cmd = client.commands.get(command);
	} else if (client.aliases.has(command)) {
	  cmd = client.commands.get(client.aliases.get(command));
	}
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    if(cmd.conf.enabled === false){
        return message.channel.send(
            new Discord.MessageEmbed()
            .setAuthor(`${client.user.username}`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
            .setTitle(`${client.arez.ünlem} Başarısız!`)
            .setDescription("Bu komut geçici olarak kullanıma kapatılmıştır. Lütfen daha sonra tekrar deneyiniz.")
            .setFooter(`${message.author.tag} istedi.`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
        )
    }
    if(cmd.conf.guildOnly === true){
        if(message.channel.type === "dm"){
            return message.channel.send(
                new Discord.MessageEmbed()
                .setAuthor(`${client.user.username}`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
                .setTitle(`${client.arez.ünlem} Başarısız!`)
                .setDescription(`Bu komut sadece sunucularda kullanılabilmektedir!`)
                .setFooter(`${message.author.tag} istedi.`, message.author.displayAvatarURL({dynamic: true, format: "png"}))   
            )
        }
        else {}
    }
    if(cmd.conf.permLevel === 1){
        if(!message.member.permissions.has("MANAGE_ROLES")){
            return message.channel.send(
                new Discord.MessageEmbed()
                .setAuthor(`${client.user.username}`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
                .setTitle(`${client.arez.ünlem} Başarısız!`)
                .setDescription(`Bu komutu kullanmak için \`ROLLERİ YÖNET\` yetkisine sahip olman lazım.`)
                .setFooter(`${message.author.tag} istedi.`, message.author.displayAvatarURL({dynamic: true, format: "png"}))   
            )
        }
    }
    if(cmd.conf.permLevel === 2){
        if(!message.member.permissions.has("BAN_MEMBERS")){
            return message.channel.send(
                new Discord.MessageEmbed()
                .setAuthor(`${client.user.username}`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
                .setTitle(`${client.arez.ünlem} Başarısız!`)
                .setDescription(`Bu komutu kullanmak için \`ÜYELERİ YASAKLA\` yetkisine sahip olman lazım.`)
                .setFooter(`${message.author.tag} istedi.`, message.author.displayAvatarURL({dynamic: true, format: "png"}))   
            )
        }
    }
    if(cmd.conf.permLevel === 3){
        if(!message.member.permissions.has("ADMINISTRATOR")){
            return message.channel.send(
                new Discord.MessageEmbed()
                .setAuthor(`${client.user.username}`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
                .setTitle(`${client.arez.ünlem} Başarısız!`)
                .setDescription(`Bu komutu kullanmak için \`YÖNETİCİ\` yetkisine sahip olman lazım.`)
                .setFooter(`${message.author.tag} istedi.`, message.author.displayAvatarURL({dynamic: true, format: "png"}))   
            )
        }
    }
    if(cmd.conf.permLevel === 4){
        if(!message.member.permissions.has("MANAGE_GUILD")){
            return message.channel.send(
                new Discord.MessageEmbed()
                .setAuthor(`${client.user.username}`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
                .setTitle(`${client.arez.ünlem} Başarısız!`)
                .setDescription(`Bu komutu kullanmak için \`SUNUCUYU YÖNET\` yetkisine sahip olman lazım.`)
                .setFooter(`${message.author.tag} istedi.`, message.author.displayAvatarURL({dynamic: true, format: "png"}))   
            )
        }
    }
    if(cmd.conf.permLevel === 5){
        if(!message.member.permissions.has("MANAGE_ROLES")){
            return message.channel.send(
                new Discord.MessageEmbed()
                .setAuthor(`${client.user.username}`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
                .setTitle(`${client.arez.ünlem} Başarısız!`)
                .setDescription(`Bu komutu kullanmak için sunucunun sahibi olman lazım.`)
                .setFooter(`${message.author.tag} istedi.`, message.author.displayAvatarURL({dynamic: true, format: "png"}))   
            )
        }
    }
    if(cmd.conf.permLevel === 6){
        if(!message.member.permissions.has("MANAGE_MESSAGES")){
            return message.channel.send(
                new Discord.MessageEmbed()
                .setAuthor(`${client.user.username}`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
                .setTitle(`${client.arez.ünlem} Başarısız!`)
                .setDescription(`Bu komutu kullanmak için \`MESAJLARI YÖNET\` yetkisine sahip olman lazım.`)
                .setFooter(`${message.author.tag} istedi.`, message.author.displayAvatarURL({dynamic: true, format: "png"}))   
            )
        }
    }
    if(cmd.conf.permLevel === 7){
        if(!message.member.permissions.has("MANAGE_ROLES")){
            return message.channel.send(
                new Discord.MessageEmbed()
                .setAuthor(`${client.user.username}`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
                .setTitle(`${client.arez.ünlem} Başarısız!`)
                .setDescription(`Bu komutu sadece bot'un sahibi ve yetkili ekip kullanabilir!`)
                .setFooter(`${message.author.tag} istedi.`, message.author.displayAvatarURL({dynamic: true, format: "png"}))   
            )
        }
    }
    cmd.run(client, message, params, perms);
  }
  }
  else {
      if (message.author.bot) return
	if (!message.content.startsWith(prefix)) return;
	let command = message.content.split(" ")[0].slice(prefix.length);
	let params = message.content.split(" ").slice(1);
	let perms = client.elevation(message);
	let cmd;
  if(!client.commands.has(command)){/* */}
	if (client.commands.has(command)) {
	  cmd = client.commands.get(command);
	} else if (client.aliases.has(command)) {
	  cmd = client.commands.get(client.aliases.get(command));
	}
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    if(cmd.conf.enabled === false){
        return message.channel.send(
            new Discord.MessageEmbed()
            .setAuthor(`${client.user.username}`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
            .setTitle(`${client.arez.ünlem} Unsuccesful!`)
            .setDescription("This command is temporarily disabled. Please try again later.")
            .setFooter(`${message.author.tag} wanted.`, message.author.displayAvatarURL({dynamic: true, format: "png"}))
        )
    }
    if(cmd.conf.guildOnly === true){
        if(message.channel.type === "dm"){
            return message.channel.send(
                new Discord.MessageEmbed()
                .setAuthor(`${client.user.username}`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
                .setTitle(`${client.arez.ünlem} Unsuccesful!`)
                .setDescription(`This command can only be used on servers!`)
                .setFooter(`${message.author.tag} wanted.`, message.author.displayAvatarURL({dynamic: true, format: "png"}))   
            )
        }
        else {}
    }
    if(cmd.conf.permLevel === 1){
        if(!message.member.permissions.has("MANAGE_ROLES")){
            return message.channel.send(
                new Discord.MessageEmbed()
                .setAuthor(`${client.user.username}`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
                .setTitle(`${client.arez.ünlem} Unsuccesful!`)
                .setDescription(`To use this command, you must have the \`MANAGE ROLES\` privilege.`)
                .setFooter(`${message.author.tag} wanted.`, message.author.displayAvatarURL({dynamic: true, format: "png"}))   
            )
        }
    }
    if(cmd.conf.permLevel === 2){
        if(!message.member.permissions.has("BAN_MEMBERS")){
            return message.channel.send(
                new Discord.MessageEmbed()
                .setAuthor(`${client.user.username}`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
                .setTitle(`${client.arez.ünlem} Unsuccesful!`)
                .setDescription(`To use this command, you must have the \`BAN MEMBERS\` privilege.`)
                .setFooter(`${message.author.tag} wanted.`, message.author.displayAvatarURL({dynamic: true, format: "png"}))   
            )
        }
    }
    if(cmd.conf.permLevel === 3){
        if(!message.member.permissions.has("ADMINISTRATOR")){
            return message.channel.send(
                new Discord.MessageEmbed()
                .setAuthor(`${client.user.username}`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
                .setTitle(`${client.arez.ünlem} Unsuccesful!`)
                .setDescription(`To use this command, you must have the \`ADMINISTRATOR\` privilege.`)
                .setFooter(`${message.author.tag} wanted.`, message.author.displayAvatarURL({dynamic: true, format: "png"}))   
            )
        }
    }
    if(cmd.conf.permLevel === 4){
        if(!message.member.permissions.has("MANAGE_GUILD")){
            return message.channel.send(
                new Discord.MessageEmbed()
                .setAuthor(`${client.user.username}`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
                .setTitle(`${client.arez.ünlem} Unsuccesful!`)
                .setDescription(`To use this command, you must have the \`MANAGE GUILD\` privilege.`)
                .setFooter(`${message.author.tag} wanted.`, message.author.displayAvatarURL({dynamic: true, format: "png"}))   
            )
        }
    }
    if(cmd.conf.permLevel === 5){
        if(message.author.id !== message.guild.owner.id){
            return message.channel.send(
                new Discord.MessageEmbed()
                .setAuthor(`${client.user.username}`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
                .setTitle(`${client.arez.ünlem} Unsuccesful!`)
                .setDescription(`You must be the owner of the server to use this command.`)
                .setFooter(`${message.author.tag} wanted.`, message.author.displayAvatarURL({dynamic: true, format: "png"}))   
            )
        }
    }
    if(cmd.conf.permLevel === 6){
        if(!message.member.permissions.has("MANAGE_MESSAGES")){
            return message.channel.send(
                new Discord.MessageEmbed()
                .setAuthor(`${client.user.username}`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
                .setTitle(`${client.arez.ünlem} Unsuccesful!`)
                .setDescription(`To use this command, you must have the \`MANAGE MESSAGES\` privilege.`)
                .setFooter(`${message.author.tag} wanted.`, message.author.displayAvatarURL({dynamic: true, format: "png"}))   
            )
        }
    }
    if(cmd.conf.permLevel === 7){
        if(message.author.id !== ayarlar.sahip){
            return message.channel.send(
                new Discord.MessageEmbed()
                .setAuthor(`${client.user.username}`, client.user.displayAvatarURL({dynamic: true, format: "png"}))
                .setTitle(`${client.arez.ünlem} Unsuccesful!`)
                .setDescription(`Only the bot owner and authorized team can use this command!`)
                .setFooter(`${message.author.tag} wanted.`, message.author.displayAvatarURL({dynamic: true, format: "png"}))   
            )
        }
    }
    cmd.run(client, message, params, perms);
  }
  }
  //--MESSAGE.JS--\\

  //--ETİKET PREFİX--\\
  
  //--ETİKET PREFİX--\\
};