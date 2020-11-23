const jimp = require('jimp')
const Discord = require('discord.js')
exports.run = async function(client, message, args , database) {
    jimp.read(args[0]).then(async comuns => {
        let db = await client.database.ref(`Servidores/Backgrounds/${message.guild.id}/${message.author.id}`).once('value');
        
        if (db.val() == null) {
            client.database.ref(`Servidores/Backgrounds/${message.guild.id}/${message.author.id}`).set({
                background: args[0]
            });

            const embed = new Discord.MessageEmbed()
            .setDescription(`Background do comando perfil atualizado para esse [link](${args[0]}) de    agem.`)
            .setColor('#FF0000')
            message.channel.send(embed)
        } else {
            client.database.ref(`Servidores/Backgrounds/${message.guild.id}/${message.author.id}`).update({
                background: args[0]
            });

            const embed = new Discord.MessageEmbed()
            .setDescription(`Background do comando perfil atualizado para esse [link](${args[0]}) de imagem.`)
            .setColor('#FF0000')
            message.channel.send(embed) 
        }
        

    }).catch;(() => {
        return message.reply('Url inválida.')
    })
};