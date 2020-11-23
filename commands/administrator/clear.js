const Discord = require('discord.js')
const config = require('../../config.json')
const { parse } = require('uuid')

exports.run = async (client, message, args) => {

if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply("Você não tem a permissão exigida para isso.")
const deleteCount = parseInt(args[0], 10);
if (!deleteCount || deleteCount <1 || deleteCount >99)
    return message.reply("Selecione o número de 1 a 99 mensagens.");

const fetched = await message.channel.messages.fetch({ limit: deleteCount + 1});
message.channel.bulkDelete(
    fetched)
    
    let botA = client.user.displayAvatarURL();

    const embed = new Discord.MessageEmbed()
    .setTitle("Faxina na área!!")
    .setDescription(`${args[0]} mensagens(m) foi apagada.\n\n${message.author.username} foi o responsável pela limpeza`)
    .setTimestamp()
    .setFooter(config.nome, botA)
    .setColor("#4C00C1")

    message.channel.send(embed)

     .catch(error => console.log(`Algo de errado: ${error}.`)
)
}
