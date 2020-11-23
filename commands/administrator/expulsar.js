const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply("Você não tem as permissões necessárias.")
    let member = message.mentions.members.first()
    if (member === message.member) return message.reply(`Você não pode banir você mesmo.`)
    if(!member)
      return message.reply("Por favor mencione um usuário válido.")
    if(!member.kickable)
      return message.reply("Eu não posso expulsar esse usuário, ele pode ter um cargo maior que o meu.")
    let reason = args.slice(1).join(' ')
    if(!reason) reason = "Nenhuma motivo existente."
    await member.kick(reason)
      .catch(error => message.reply(`Desculpe ${message.author} não consegui expulsar o membro porque: ${error}.`))

      message.channel.send(`${message.author}`)

      let embed = new Discord.MessageEmbed()
          .setThumbnail("https://media1.tenor.com/images/be4a63a9c7bc780a09244f863f3cb8e0/tenor.gif?itemid=4928092")
          .setTitle("Kick!!!")
          .addField("Usuário expulso", `${member.user.tag}`)
          .addField("Responsável pela expulsão:", `${message.author.tag}`)
          .addField("Motivo:", `${reason}`)
          .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
          .setColor("DARK_RED").setTimestamp()

          message.channel.send(embed)
          
}

module.exports.help = {
    name: "kick"
}