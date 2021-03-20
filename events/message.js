const Discord = require("discord.js");
const ayarlar = require('../arezck.json');
const Database = require('plasma-db');
const pdb = new Database("./database.json")
module.exports = message => {
    //--MESSAGE.JS--\\
    let client = message.client;
    var a = pdb.fetch(`prefix_${message.guild.id}`)
    if(!a){
        var prefix = ayarlar.prefix
    }
    else {
        var prefix = a
    }
	if (message.author.bot) return
	if (!message.content.startsWith(prefix)) return;
    if (message.guild.id !== "822179831252123678") return message.reply("Bu botun komutları sadece " + `**${client.guilds.cache.get("822179831252123678").name}**` + " isimli sunucuda kullanılabilir.")
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
                .setDescription(`Bu komut sadece **${sunucu.name}** isimli sunucuda kullanılabilmektedir.`)
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
  //--MESSAGE.JS--\\

  //--ETİKET PREFİX--\\

  //--ETİKET PREFİX--\\
};