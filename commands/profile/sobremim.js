
const Discord = require('discord.js')
const config = require('../../config.json')
exports.run = async function(client, message, args , database) {

    let jimp = require('jimp')

    jimp.read(args[0]).then(async profile => {
        let db = await client.database.ref(`Servidores/Sobre_mim/${message.guild.id}/${message.author.id}`).once('value');
        
        if (db.val() == null) {
            client.database.ref(`Servidores/Sobre_mim/${message.guild.id}/${message.author.id}`).set({
                sobremim: args[0]
            });

            const embed = new Discord.MessageEmbed()
            .setDescription(`Sobre mim personalizado alterado com sucesso.`)
            .setColor('#FF0000')
            message.channel.send(embed)
        } else {
            client.database.ref(`Servidores/Sobre_mim/${message.guild.id}/${message.author.id}`).update({
                sobremim: args[0]
            });

            const embed = new Discord.MessageEmbed()
            .setDescription(`Sobre mim personalizado alterado com sucesso.`)
            .setColor('#FF0000')
            message.channel.send(embed) 
        }

    }).catch(() => {
        return message.reply('Sobre mim inválido.')
    })
};