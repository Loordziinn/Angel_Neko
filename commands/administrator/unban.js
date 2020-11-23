const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "unban",
    category: "administrator",
    run: async (client, message, args) => {

        const member = args[0];

        if (!member) {
             return message.channel.send(`Insira o id do usuário para desbanir!`)
        }

        try {
            message.guild.fetchBans().then(bans => {
                message.guild.members.unban(member)
            })
            await message.channel.send(`O ${member} foi desbanido!`)
        } catch (e) {
            return message.channel.send(`Não foi possível desbanir porque ${error}.`)
        }

    }
}