const Discord = require("discord.js");
const config = require('../../config.json')

exports.run = (client, message, args) => {
 
    var membro = message.mentions.members.first()  || message.guild.members.cache.get(args[0]) || message.member;

    if (!membro) return message.reply(`Mencione um usuário! ex: ${config.prefix}ban **<@membro>** <motivo>`)
    if (membro === message.member) return message.reply(`Você não pode banir você mesmo!`)
 
    const motivo = args.slice(1).join(" ");
    if (!motivo) return message.reply(`Escreva o motivo! ex.: ${config.prefix}ban <@membro> <motivo>`)
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`Você precisa da permissão **Banir Membros**.`)
 
    message.channel.send(`Você concorda em banir este usuário?`).then(msg => {
        msg.react("✅")
 
        let filtro = (reaction, usuario) => reaction.emoji.name === "✅" && usuario.id === message.author.id;
        let coletor = msg.createReactionCollector(filtro, {max: 1})
 
        coletor.on("collect", cp => {
            cp.remove(message.author.id);
            let embed = new Discord.MessageEmbed()
            embed.setThumbnail("https://media1.tenor.com/images/de413d89fff5502df7cff9f68b24dca5/tenor.gif?itemid=12850590")
            embed.setTitle("Banimento!!!")
            embed.setDescription(`**MEMBRO PUNIDO**\nMembro: ${membro.user.username}\nMotivo: **${motivo}**`)
            embed.setFooter(`${config.prefix} | Angel Neko`)
            message.channel.send(embed)
            membro.ban();
        })
    })
}
 
exports.help = {
    name: 'ban'
}